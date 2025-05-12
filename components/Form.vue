<script setup>
import { z } from "zod";
import validator from "validator";
const result = ref("");
const status = ref("");

const isSubmitted = ref(false)

const schema = z.object({
    name: z.string().min(2, "Must be at least 2 characters"),
    email: z.string().email("Invalid email address"),
    phone: z.string().refine(validator.isMobilePhone, "Invalid phone number"),
    plan: z.string().plan("Please select a plan"),
    message: z.string().min(10, "Must be at least 10 characters"),
    subject: z.string().min("Subject required"),
    access_key: z.string().min("Access key is required"),
});

const state = reactive({
    access_key: "3684acc7-2c29-4acb-b42b-42fb1a2baed9",
    subject: "Sign-up for Salsa.",
    name: "",
    email: "",
    phone:"",
    plan:"",
    message: "",
});

async function onSubmit(event) {
    try {
        const response = await $fetch("https://api.web3forms.com/submit", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(state),
        });

        console.log(response);
        await new Promise(resolve => setTimeout(resolve, 1000))
        result.value = response.message;

        if (response.status === 200) {
            status.value = "success";
            isSubmitted.value = true;

        } else {
            status.value = "error";
        }
    } catch (error) {
        console.log(error);
        status.value = "error";
        result.value = "Something went wrong!";
    } finally {
        isSubmitted.value = true;
    }
}
</script>

<template>
     <form v-if="!isSubmitted" @submit.prevent="handleSubmit" class="form">
        <UForm :schema="schema" :state="state" class="form" @submit="onSubmit">
        <UFormField label="Name" name="name">
            <UInput v-model="state.name"/>
        </UFormField>
        <UFormField label="Email" name="email" type="email">
            <UInput v-model="state.email" />
        </UFormField>
        <UFormField label="phone" name="phone" type="phone">
            <UInput v-model="state.phone" />
        </UFormField> 
        <div class="price-plan">
            <UCheckbox indicator="start" variant="card" v-model="state.plan" default-value label="Check me" />
            <UCheckbox indicator="start" variant="card" v-model="state.plan" default-value label="Check me" />
        </div>
        <UFormField label="Message" name="message">
            <UTextarea v-model="state.message" />
        </UFormField>
        <UButton class="form-button" type="submit"> Submit </UButton>
    </UForm>
     </form>
    
     <div v-else class="success-animation">
        <Icon name="prime-check-circle" size="20em" class="success-icon animate__animated animate__backInDown animate__tada"></Icon>
        <h2>Form successfully send!</h2>
    </div>
</template>

<style lang="scss" scoped></style>