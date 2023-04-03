<script setup>
import { useRouter } from 'vue-router'
import { useTodoStore } from '@/stores/todo'

const router = useRouter()
const { getTodoById } = useTodoStore()

const { id } = router.currentRoute.value.params
const todo = getTodoById(Number(id))
</script>

<template>
  <div class="d-flex justify-center pa-4">
    <v-card
      class="text-white"
      color="blue-lighten-2"
      theme="dark"
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
