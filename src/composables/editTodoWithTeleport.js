import { useGlobalNavigationDrawer } from '@/stores/globalNavigationDrawer'
import { useTodoStore } from '@/stores/todo'

export function useEditTodoWithTeleport() {
  // Data
  const { open, close } = useGlobalNavigationDrawer()
  const todoStore = useTodoStore()

  // Methods
  const updateTask = (params) => {
    todoStore.updateTodo(params.id, { ...params })
    close()
  }

  return {
    updateTask,
    openNavigationDrawer: open,
    closeNavigationDrawer: close,
  }
}
