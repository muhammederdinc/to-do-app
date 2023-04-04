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
  <div class="d-flex flex-column justify-center align-center h-100 pa-4">
    <v-card
      variant="outlined"
      class="text-black"
      color="blue-lighten-1"
      max-width="800"
    >
      <v-card-title class="text-h5 text-center">
        {{ todo.title }}
      </v-card-title>

      <v-card-text class="d-flex flex-column">
        <div class="d-flex">
          <span>
            End Date: {{ new Intl.DateTimeFormat("en-US").format(new Date(todo.endDate)) }}
          </span>
          
          <span class="ml-5">
            Status: {{ todo.state }}
          </span>
        </div>

        <span class="mt-5">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas vel lorem eget enim iaculis elementum non non massa.
          Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aenean gravida ex a aliquet maximus.
          Nam id ligula id nisl rhoncus rutrum vel eu sapien. Quisque varius purus quis lorem tincidunt, a malesuada quam gravida.
          Fusce ac odio vitae sapien dapibus maximus. Nulla facilisi. Proin faucibus volutpat tellus sed interdum.
          Maecenas lacinia odio at blandit tincidunt. Sed fringilla sollicitudin sapien, a tristique lectus cursus vel.
        </span>
      </v-card-text>

      <v-card-actions class="d-flex justify-end">
        <v-btn
          variant="outlined"
          @click="$emit('openNavigationDrawer')"
        >
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
