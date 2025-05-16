<script setup lang="ts">
import { ref, reactive, watch } from "vue";
import { z } from "zod";
import validator from "validator";

// Reactive form state
const result = ref < string > ("");
const status = ref < "success" | "error" | "" > ("");
const isSubmitted = ref(false);
const errors = reactive<Record<string, string>>({});

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
    access_key: "68150a9d-cc42-4d33-85cf-bc2558ae5957",
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
    watch(
        () => state.plan,
        (newVal) => {
            console.log("Plan changed to:", newVal);
        }
    );
    const validation = schema.safeParse(state);
    errors.plan = ""; // Clear previous errors
    if (!validation.success) {
        const formatted = validation.error.format();
        errors.plan = formatted.plan?._errors?.[0] || "";
        status.value = "error";
        result.value = "Validation failed!";
        return;
    }
    try {
        const response: { status: number; message: string } = await $fetch("https://api.web3forms.com/submit", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(state),
        });

        await new Promise((resolve) => setTimeout(resolve, 1000));

        result.value = response.message;

        if (response.status === 200) {
            status.value = "success";
            isSubmitted.value = true;
        } else {
            status.value = "error";
        }
    } catch (error) {
        console.error(error);
        status.value = "error";
        result.value = "Something went wrong!";
    } finally {
        isSubmitted.value = true;
    }
}
</script>

<template>
    <form @submit.prevent="onSubmit" v-if="!isSubmitted" class="form">
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

        <button type="submit" class="form-button">
            Submit
        </button>
        <div class="h-captcha" data-captcha="true"></div>
    </form>

    <div v-else class="success-animation">
        <Icon name="prime-check-circle" size="20em"
            class="success-icon animate__animated animate__backInDown animate__tada" />
        <h2>Form successfully sent!</h2>
    </div>
</template>
  

<style lang="scss" scoped></style>