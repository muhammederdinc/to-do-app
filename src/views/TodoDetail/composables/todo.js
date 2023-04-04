import { useRouter } from 'vue-router'
import { useTodoStore } from '@/stores/todo'
import { computed } from 'vue'

export function useTodo() {
  // Data
  const router = useRouter()
  const { getTodoById } = useTodoStore()
  const { id } = router.currentRoute.value.params

  // Computed
  const todo = computed(() => getTodoById(Number(id)))

  return { todo };
}
