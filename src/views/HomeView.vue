<script setup>
const title = 'Welcome to our todo app! This app helps you manage your tasks and stay organized.'
</script>

<template>
  <div class="d-flex flex-column justify-center align-center h-100 text-center">
    <img src="@/assets/home.svg" class="home-svg" alt="todo SVG">

    <span class="mt-10">
      {{ title }}
    </span>
  </div>
</template>

<style>
.home-svg {
  height: 300px;
  max-height: 50%;
  max-width: 100%;
}
</style>
