<script setup>
import { z } from "zod";

const schema = z.object({
    name: z.string().min(2, "Must be at least 2 characters"),
    email: z.string().email("Invalid email address"),
    phone: z.string().email("Invalid phone numbers"),
    message: z.string().min(10, "Must be at least 10 characters"),
    subject: z.string().min("Subject required"),
    access_key: z.string().min("Access key is required"),
});

const state = reactive({
    access_key: "3684acc7-2c29-4acb-b42b-42fb1a2baed9",
    subject: `${name} wants to apply for S-salsa.`,
    name: "",
    email: "",
    phone:"",
    message: "",
});

async function onSubmit(event) {
    result.value = "Please wait...";
    try {
        const response = await $fetch("https://api.web3forms.com/submit", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: form.value,
        });

        console.log(response); // You can remove this line if you don't need it

        result.value = response.message;

        if (response.status === 200) {
            status.value = "success";
        } else {
            console.log(response); // Log for debugging, can be removed
            status.value = "error";
        }
    } catch (error) {
        console.log(error); // Log for debugging, can be removed
        status.value = "error";
        result.value = "Something went wrong!";
    } finally {
        // Reset form after submission
        form.value.name = "";
        form.value.email = "";
        form.value.phone = "";
        form.value.message = "";

        // Clear result and status after 5 seconds
        setTimeout(() => {
            result.value = "";
            status.value = "";
        }, 5000);
    }
}
</script>

<template>
    <UForm :schema="schema" :state="state" class="form-container" @submit="onSubmit">
        <UFormGroup label="Name" name="name">
            <p>Name</p>
            <UInput v-model="state.name" class="input"/>
        </UFormGroup>

        <UFormGroup label="Email" name="email" >
            <p>E-mail</p>
            <UInput v-model="state.email" />
        </UFormGroup>
        <UFormGroup label="Email" name="email">
            <p>Phone-number</p>
            <UInput v-model="state.phone" />
        </UFormGroup>
        <UFormGroup label="Message" name="message">
            <p>Message</p>
            <UTextarea v-model="state.message" type="text" />
        </UFormGroup>

        <UButton class="form-button" type="submit"> Submit </UButton>
    </UForm>
</template>

<style lang="scss" scoped></style>