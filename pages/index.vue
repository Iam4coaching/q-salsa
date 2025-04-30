<script setup lang="ts">
definePageMeta({
  layout: 'custom'
})
</script>

<template>
    <div>
    <Carousel/>
        
    <div class="flex flex-row justify-between h-150 background-animate bg-gradient-to-r from-red-300  via-green-300 to-purple-500 inset-x-0 sticky bottom-0 ">
         <div class="absolute -top-150 ml-12">
          <Img src="/Images/Qsalsa_Logo.png" height="600" width="600"/>
         </div>
         
         <button class="font-bold mr-30 px-12 py-12 text-6xl h-full text-[#ffffff] absolute inset-y-0 right-0">Check it out</button>
    </div>
    </div>
</template>