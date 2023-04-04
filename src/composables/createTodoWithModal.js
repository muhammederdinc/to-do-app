import { ref } from 'vue'
import { useTodoStore } from '@/stores/todo'
import { useSnackbarStore } from '@/stores/snackbar'

export function useCreateTodoWithModal() {
  // Data
  const isVisible = ref(false)
  const todoStore = useTodoStore()
  const { showSnackbar } = useSnackbarStore()

  // Methods
  const createTodo = (params) => {
    todoStore.addTodo(params)
    isVisible.value = false
    showSnackbar('To-do has been created successfully', 'success')
  }

  return {
    isVisible,
    createTodo
  }
}
