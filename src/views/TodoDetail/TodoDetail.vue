<script setup>
import { useTodo } from './composables/todo'

const { todo } = useTodo()
</script>

<template>
  <div class="d-flex justify-center pa-4">
    <v-card
      class="text-white"
      color="blue-lighten-2"
      width="800"
    >
      <v-card-title class="text-h5">
        {{ todo.title }}
      </v-card-title>

      <v-card-subtitle class="d-flex flex-column">
        <span>
          End Date: {{ todo.endDate }}
        </span>

        <span class="mt-2">
          Status: {{ todo.state }}
        </span>
        </v-card-subtitle>

      <v-card-actions class="d-flex justify-end">
        <v-btn variant="outlined">
          Update Todo
        </v-btn>
      </v-card-actions>
    </v-card>
  </div>
</template>
