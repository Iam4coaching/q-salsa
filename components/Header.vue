<script setup lang="ts">
import type { DropdownMenuItem } from '@nuxt/ui'

const items = ref([
  {
    label: 'Gallery', to:'/gallery', color:'primary',
  },
  {
    label: 'Pricing', to:'/pricing',
  },
  {
    label: 'Events', to:'/events',
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
    side: 'bottom',
    sideOffset: 8,
    collisionPadding:8
    }"
    :ui="{
        content: 'w-48',
        item: 'custom-dropdown-item',
    }"
    class="my-dropdown"
>
    <UButton class="dropmenuitem" size="xl" icon="prime-align-justify" />
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
   // variant
   .menu-item{
    width:full;
    height:auto;
    display: flex;
    flex-direction: column;
     &--primary {
        background-color: #0e34cd;
        color: #ffffff;
    }
   }
  
</style>