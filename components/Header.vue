<template>
    <header class="h-100 bg-[#3E7B08] flex justify-between sticky top-0 z-40">
        <div class="flex flew-row items start">
            <button class="font-bold text-7xl h-full px-16 py-16 justify-center whitespace-nowrap text-transparent bg-clip-text background-animate bg-gradient-to-r from-red-300  via-green-300 to-purple-500"
            >    <NuxtLink to="/">
                    Q-SALSA
                </NuxtLink>
            </button>
        </div>
    <div class=" flex flex-row-row">
            <button class="font-bold text-lg h-full px-12 py-12 bg-[#3E7B08] hover:bg-[#58AA0E] text-[#ffffff] justify-center ">
                <NuxtLink to="/gallery">
                    Gallery
                </NuxtLink>
            </button>
            <button class="font-bold text-lg h-full px-12 py-12 bg-[#3E7B08] hover:bg-[#58AA0E] text-[#ffffff] justify-center ">
                <NuxtLink to="/pricing">
                    Pricing
                </NuxtLink>
            </button>
            <button class="font-bold text-lg h-full px-12 py-12 bg-[#3E7B08] hover:bg-[#58AA0E] text-[#ffffff] justify-center ">
                <NuxtLink to="/contact">
                    Contact
                </NuxtLink>
            </button>
            <button class="font-bold text-lg h-full mr-20 px-12 py-12 bg-[#3E7B08] hover:bg-[#58AA0E] text-[#ffffff] justify-center">Sign up</button>
    </div>
    </header>
</template>