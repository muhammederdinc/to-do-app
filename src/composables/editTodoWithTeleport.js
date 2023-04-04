import { useGlobalNavigationDrawer } from '@/stores/globalNavigationDrawer'
import { useTodoStore } from '@/stores/todo'
import { useSnackbarStore } from '@/stores/snackbar'

export function useEditTodoWithTeleport() {
  // Data
  const { open, close } = useGlobalNavigationDrawer()
  const todoStore = useTodoStore()
  const { showSnackbar } = useSnackbarStore()

  // Methods
  const updateTask = (params) => {
    todoStore.updateTodo(params.id, { ...params })
    close()
    showSnackbar('To-do updated successfully', 'success')
  }

  return {
    updateTask,
    openNavigationDrawer: open,
    closeNavigationDrawer: close,
  }
}
