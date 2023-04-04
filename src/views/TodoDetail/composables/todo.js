import { useRouter } from 'vue-router'
import { useTodoStore } from '@/stores/todo'

export function useTodo() {
  // Data
  const router = useRouter()
  const { getTodoById } = useTodoStore()

  const { id } = router.currentRoute.value.params
  const todo = getTodoById(Number(id))

  return { todo };
}
