<script setup>
import { reactive } from 'vue';
// Components
import VueDatePicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css'

const props = defineProps({
  initialFormData: {
    type: Object,
    default: () => ({}),
  },
})

// Data
const formData = reactive({ ...props.initialFormData })
</script>

<template>
  <Teleport to="#global-navigation-drawer">
    <div class="text-center mt-5">
      <h3>Edit Todo</h3>

      <div class="px-4">
        <v-text-field
          v-model="formData.title"
          variant="outlined"
          label="Search"
          clearable
          density="compact"
        />

        <VueDatePicker
          v-model="formData.endDate"
          :enable-time-picker="false"
        />
      </div>

      <div class="mx-3 mt-8">
        <v-btn
          class="mb-3"
          variant="outlined"
          color="success"
          block
          @click="$emit('submit', formData)"
        >
          Update
        </v-btn>

        <v-btn
          variant="outlined"
          color="red"
          block
          @click="$emit('close')"
        >
          Close
        </v-btn>
      </div>
    </div>
  </Teleport>
</template>
