<script setup>
import { reactive, ref } from 'vue';
// Components
import VueDatePicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css'
import TInputErrorMessage from '@/components/TInputErrorMessage.vue'

const props = defineProps({
  initialFormData: {
    type: Object,
    default: () => ({}),
  },
})

// Emits
const emit = defineEmits(['submit', 'close'])

// Data
const form = ref(null)
const isEndDateErrorMessageVisible = ref(false)
const formData = reactive(props.initialFormData)
const titleRules = [
  v => !!v || 'Title is required',
  v => (v && v.length <= 30) || 'Title must be less than 30 characters',
  v => /^[a-zA-ZğüşıöçĞÜŞİÖÇ ]+$/.test(v) || 'Title can only contain letters and spaces'
]

// Methods
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

const close = () => {
  isEndDateErrorMessageVisible.value = false
  emit('close')
}
</script>

<template>
  <Teleport to="#global-navigation-drawer">
    <div class="text-center mt-5">
      <h3>Edit Todo</h3>

      <div class="px-4 mt-5">
        <v-form ref="form">
          <v-text-field
            v-model="formData.title"
            :rules="titleRules"
            class="mb-2"
            variant="outlined"
            label="Title"
            clearable
            density="compact"
          />

          <VueDatePicker
            v-model="formData.endDate"
            :enable-time-picker="false"
          />

          <TInputErrorMessage
            v-if="isEndDateErrorMessageVisible"
            message="Title is required"
          />
        </v-form>
      </div>

      <div class="mx-3 mt-8">
        <v-btn
          class="mb-3"
          variant="outlined"
          color="success"
          block
          @click="submit"
        >
          Update
        </v-btn>

        <v-btn
          variant="outlined"
          color="red"
          block
          @click="close"
        >
          Close
        </v-btn>
      </div>
    </div>
  </Teleport>
</template>
