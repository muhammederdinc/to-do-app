<script setup>
import { reactive } from 'vue';
// Components
import VueDatePicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css'
import TInputErrorMessage from '@/components/TInputErrorMessage.vue'
// Composables
import { useFormValidation } from '@/composables/formValidation';

const props = defineProps({
  initialFormData: {
    type: Object,
    default: () => ({}),
  },
})

// Emits
const emit = defineEmits(['submit', 'close'])

// Data
const formData = reactive(props.initialFormData)
const {
  form,
  submit,
  titleRules,
  isEndDateErrorMessageVisible
} = useFormValidation(emit, formData)

// Methods
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
