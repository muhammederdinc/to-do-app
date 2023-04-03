<script setup>
defineProps({
  message: {
    type: String,
    required: true
  }
})
</script>

<template>
  <div class="v-input__details pl-3 text-error">
    <div class="v-messages" role="alert" aria-live="polite">
      <div class="v-messages__message">
        {{ message }}
      </div>
    </div>
  </div>
</template>
