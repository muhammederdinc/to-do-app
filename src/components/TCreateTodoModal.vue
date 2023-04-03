<script setup>
import { reactive } from 'vue'
// Components
import VueDatePicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css'

const showModal = true
const formData = reactive({
  title: '',
  endDate: ''
})
</script>

<template>
  <v-dialog
    v-model="showModal"
    persistent
    width="600"
  >
    <v-card>
      <v-card-title class="mt-4 mx-2">
        Create a new To-Do
      </v-card-title>

      <v-card-text>
        <v-text-field
          v-model="formData.title"
          variant="outlined"
          label="Title"
          clearable
          density="compact"
          class="mt-2"
        />

        <VueDatePicker
          v-model="formData.endDate"
          :enable-time-picker="false"
          :teleport="true"
        />
      </v-card-text>

      <v-divider />

      <v-card-actions>
        <v-spacer />

        <v-btn
          color="red"
          @click="$emit('close')"
        >
          Close
        </v-btn>

        <v-btn
          color="blue"
          variant="outlined"
          @click="$emit('submit', formData)"
        >
          Create
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>
