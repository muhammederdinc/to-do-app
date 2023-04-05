import { reactive, ref } from 'vue'

export function useCreateTodoModal(emit) {
  // Data
  const showModal = true
  const form = ref(null)
  const isEndDateErrorMessageVisible = ref(false)
  const formData = reactive({
    title: '',
    endDate: ''
  })

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

  return {
    form,
    submit,
    formData,
    showModal,
    titleRules,
    isEndDateErrorMessageVisible
  }
}
