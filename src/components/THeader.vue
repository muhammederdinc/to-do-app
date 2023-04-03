<script setup>
defineProps({
  routingButtons: {
    type: Array,
    required: true
  }
})
</script>

<template>
  <v-app-bar class="px-2" color="blue-lighten-1">
    <v-app-bar-nav-icon
      class="d-sm-none pa-0 ma-0"
      color="white"
      @click="$emit('toggleDrawerVisibility')"
    />

    <div v-if="routingButtons.length" class="d-none d-sm-flex">
      <v-btn
        v-for="(btn, index) in routingButtons"
        :key="index"
        color="white"
        variant="text"
        :to="btn.path"
      >
        {{ btn.text }}
      </v-btn>
    </div>

    <v-spacer />

    <v-btn
      class="d-none d-sm-flex"
      color="white"
      variant="outlined"
      @click="$emit('showCreateTodoModal')"
    >
      <v-icon class="mr-1">mdi-plus</v-icon>

      Add To-Do
    </v-btn>

    <v-btn
      class="d-sm-none"
      size="small"
      variant="outlined"
      color="white"
      icon="mdi-plus"
      @click="$emit('showCreateTodoModal')"
    />
  </v-app-bar>
</template>
