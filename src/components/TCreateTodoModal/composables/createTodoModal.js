import { reactive } from 'vue'
import { useFormValidation } from '@/composables/formValidation';

export function useCreateTodoModal(emit) {
  // Data
  const showModal = true
  const formData = reactive({
    title: '',
    endDate: ''
  })
  const {
    form,
    submit,
    titleRules,
    isEndDateErrorMessageVisible
  } = useFormValidation(emit, formData)

  return {
    form,
    submit,
    formData,
    showModal,
    titleRules,
    isEndDateErrorMessageVisible
  }
}
