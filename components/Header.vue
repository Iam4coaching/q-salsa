<script setup lang="ts">
import type { DropdownMenuItem } from '@nuxt/ui'

const items = ref([
  {
    label: 'Gallery', to:'/gallery',
    class: 'dropmenuitem',
  },
  {
    label: 'Pricing', to:'/pricing',
    class: 'dropmenuitem',
   
  },
  {
    label: 'Events', to:'/events',
    class: 'dropmenuitem',
  },
  ] satisfies DropdownMenuItem[]);

</script>

<template>
    <header>
        <div >
            <h1 class="Logo-icon">    
              <NuxtLink to="/">
                    Q-SALSA
                </NuxtLink>
              </h1>    
 
</div>
<UDropdownMenu
    :items="items"
    :content="{
    align: 'center',
    sideOffset: 8,
    side: 'bottom',
    collisionPadding: 8,

    }"
    :ui="{

    }"
    class="my-dropdown"
>
    <UButton size="xl" icon="prime-align-justify" />
</UDropdownMenu>
<nav >
            <button >
                <NuxtLink to="/gallery">
                    Gallery
                </NuxtLink>
            </button>
            <button >
                <NuxtLink to="/pricing">
                    Pricing
                </NuxtLink>
            </button>
            <button>
                <NuxtLink to="/contact">
                    Contact
                </NuxtLink>
            </button>
        </nav>
    </header>
</template>

<style lang="scss" scoped>
</style>