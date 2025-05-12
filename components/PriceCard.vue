
<script setup lang="js">
const value = ref(false)
</script>
<template>    
    <div class="container animate__animated animate__fadeInDown">
        <UCheckbox
        size="xl"
        indicator="hidden"
        variant="card"
        v-model="value"
        default-value
        label="1 Class">
        €10
        </UCheckbox>
    </div>
    <div class="container animate__animated animate__fadeInDown">
        <UCheckbox 
        size="xl"
        indicator="hidden"
        variant="card"
        v-model="value" 
        default-value label="10 Classes">
        <label>€90</label>
    </UCheckbox>
    </div>

</template>