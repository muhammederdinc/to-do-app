<script setup>
import { reactive, ref } from 'vue'
// Components
import VueDatePicker from '@vuepic/vue-datepicker';
import { TInputErrorMessage } from '@/components/TInputErrorMessage.vue'
// Styles
import '@vuepic/vue-datepicker/dist/main.css'

const showModal = true
const formData = reactive({
  title: '',
  endDate: ''
})

const emit = defineEmits(['submit'])
const form = ref(null)
const isEndDateErrorMessageVisible = ref(false)
const titleRules = [
  v => !!v || 'Title is required',
  v => (v && v.length <= 10) || 'Title must be less than 30 characters',
  v => /^[a-zA-Z ]+$/.test(v) || 'Title can only contain letters and spaces'
]

const submit = async () => {
  isEndDateErrorMessageVisible.value = false
  const { valid } = await form.value.validate()

  if (!formData.endDate) {
    isEndDateErrorMessageVisible.value = true
  }

  if (valid && !isEndDateErrorMessageVisible.value) {
    emit('submit', formData)
  }
}
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
        <v-form ref="form">
          <v-text-field
            v-model="formData.title"
            :rules="titleRules"
            variant="outlined"
            label="Title"
            clearable
            density="compact"
            class="my-2"
          />
          
          <VueDatePicker
            v-model="formData.endDate"
            :enable-time-picker="false"
            :teleport="true"
          />

          <TInputErrorMessage
            v-if="isEndDateErrorMessageVisible"
            message="Title is required"
          />
        </v-form>
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
          @click="submit"
        >
          Create
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>
