<template>
    <div>
        <Header/>
      <p>Some default layout content shared across all pages</p>
      <slot />
      <div class="fixed inset-0 bg-gradient-to-tr from-white to-green-100 z-[-1] " />
    </div>
  </template>