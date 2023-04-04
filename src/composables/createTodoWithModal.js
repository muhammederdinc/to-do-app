import { ref } from 'vue'
import { useTodoStore } from '@/stores/todo'

export function useCreateTodoWithModal() {
  // Data
  const isVisible = ref(false)
  const todoStore = useTodoStore()

  // Methods
  const createTodo = (params) => {
    todoStore.addTodo(params)
    isVisible.value = false
  }

  return {
    isVisible,
    createTodo
  }
}
