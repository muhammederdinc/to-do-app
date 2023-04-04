<script setup>
import TEditTodoTeleport from '@/components/TEditTodoTeleport.vue'

defineProps({
  todo: {
    type: Object,
    default: () => ({})
  }
})
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

      <v-card-text class="d-flex flex-column">
        <span>
          End Date: {{ new Intl.DateTimeFormat("en-US").format(new Date(todo.endDate)) }}
        </span>

        <span class="mt-2">
          Status: {{ todo.state }}
        </span>
        </v-card-text>

      <v-card-actions class="d-flex justify-end">
        <v-btn variant="outlined" @click="$emit('openNavigationDrawer')">
          Update Todo
        </v-btn>
      </v-card-actions>
    </v-card>

    <TEditTodoTeleport
      :initial-form-data="{...todo}"
      @submit="$emit('updateTask', $event)"
      @close="$emit('closeNavigationDrawer')"
    />
  </div> 
</template>
