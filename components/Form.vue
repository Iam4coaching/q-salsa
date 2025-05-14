<script setup lang="ts">
import { ref, reactive, watch } from "vue";
import { z } from "zod";
import validator from "validator";

//import VueHcaptcha from '@hcaptcha/vue3-hcaptcha';

// Reactive form state
const result = ref < string > ("");
const status = ref < "success" | "error" | "" > ("");
const isSubmitted = ref(false);
const errors = reactive<Record<string, string>>({});
const isLoading = ref(false);

/*
// hCaptcha site key
const hcaptchaToken = ref("");
const hcaptchaVerified = ref(false);
const hcaptchaRef = ref<InstanceType<typeof VueHcaptcha> | null>(null);

function onCaptchaVerified(token: string) {
  hcaptchaToken.value = token;
  hcaptchaVerified.value = true;
}

function onCaptchaExpired() {
  hcaptchaToken.value = "";
  hcaptchaVerified.value = false;
}
*/
function resetForm() {
  // Reset form fields
  state.name = "";
  state.email = "";
  state.phone = "";
  state.plan = "";
  state.message = "";

  // Reset other state
  errors.plan = "";
  result.value = "";
  status.value = "";
  isSubmitted.value = false;

  /*
  // Reset captcha
  hcaptchaToken.value = "";
  hcaptchaVerified.value = false;
  hcaptchaRef.value?.reset();
  */
}

// Define the schema using Zod
const schema = z.object({
    name: z.string().min(2, "Must be at least 2 characters"),
    email: z.string().email("Invalid email address"),
    phone: z.string().refine(validator.isMobilePhone, "Invalid phone number"),
    plan: z.string().min(1, "Please select a plan"),
    message: z.string().min(10, "Must be at least 10 characters"),
    subject: z.string().min(1, "Subject required"),
    access_key: z.string().min(1, "Access key is required"),
});

// Define the form state using a TypeScript type inferred from the schema
type FormState = z.infer<typeof schema>;

const state = reactive < FormState > ({
    access_key: "3684acc7-2c29-4acb-b42b-42fb1a2baed9",
    subject: "Sign-up for Salsa.",
    name: "",
    email: "",
    phone: "",
    plan: "",
    message: "",
});

watch(() => state.plan, (newVal) => {
    if (newVal) {
        errors.plan = "";
    }
});

async function onSubmit(event: Event) {
 /* if (!hcaptchaVerified.value || !hcaptchaToken.value) {
    status.value = "error";
    result.value = "Please complete the CAPTCHA.";
    return;
  }
*/
  const validation = schema.safeParse(state);
  errors.plan = ""; // Clear previous errors
  if (!validation.success) {
    const formatted = validation.error.format();
    errors.plan = formatted.plan?._errors?.[0] || "";
    status.value = "error";
    result.value = "Validation failed!";
    return;
  }

  isLoading.value = true; // Start loading


  const payload = {
    ...state,
    //"h-captcha-response": hcaptchaToken.value,
  };

  try {
    const response: { status: number; message: string } = await $fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      //body: JSON.stringify(payload),
    });

    await new Promise((resolve) => setTimeout(resolve, 1000));

    result.value = response.message;

    if (response.status === 200) {
      status.value = "success";
      isSubmitted.value = true;

      setTimeout(() => {
        resetForm();
      }, 4000); // Wait for animation + 3s
    } else {
      status.value = "error";
    }
  } catch (error) {
    console.error(error);
    status.value = "error";
    result.value = "Something went wrong!";
  } finally {
    isLoading.value = false;
    /*
    hcaptchaVerified.value = false;
    hcaptchaToken.value = "";
    hcaptchaRef.value?.reset();
    */
  }
}
</script>

<template>
    <form @submit.prevent="onSubmit" v-if="!isSubmitted" class="form">

        <label>Plan</label>
        <div class="plan-button-group">
            <label :class="['plan-button', { active: state.plan === 'basic' }]">
                <input type="radio" value="basic" v-model="state.plan" name="plan" class="hidden-radio" />
                1 Class - $10
            </label>

            <label :class="['plan-button', { active: state.plan === 'pro' }]">
                <input type="radio" value="pro" v-model="state.plan" name="plan" class="hidden-radio" />
                10 Classes - $100
            </label>
        </div>
        <p v-if="errors.plan" class="error-message">{{ errors.plan }}</p>

        <label for="name">Name</label>
        <input id="name" type="text" v-model="state.name" class="input-form" required />

        <label for="email">Email</label>
        <input id="email" type="email" v-model="state.email" class="input-form" required />

        <label for="phone">Phone</label>
        <input id="phone" type="tel" v-model="state.phone" class="input-form" required />
        <label for="message">Message</label>
        <textarea id="message" v-model="state.message" class="input-form" required></textarea>

<!--
        <vue-hcaptcha
            ref="hcaptchaRef"
            sitekey="04cefc14-6f78-4672-8df4-5c8eedd8f9de"
            @verify="onCaptchaVerified"
            @expired="onCaptchaExpired"
            data-theme="light"
            data-size="normal"
            data-callback="onCaptchaSuccess"> /> 
    </vue-hcaptcha>-->
       
   <button
        type="submit"
        class="form-button"
        :disabled="isLoading"
        >
        <span v-if="isLoading" class="spinner"></span>
        <span v-else>Submit</span>
    </button>
    </form>

    <div v-else class="success-animation">
        <Icon name="prime-check-circle" size="20em"
            class="success-icon animate__animated animate__backInDown animate__tada" />
        <h2>Form successfully sent!</h2>
    </div>
</template>