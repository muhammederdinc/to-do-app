import { ref, reactive, watch } from 'vue'
import { useTodoStore } from '@/stores/todo'
import { TodoStatus, ToDoListTableHeaders } from '@/constants/index.js';
import { useEditTodoWithTeleport } from '@/composables/editTodoWithTeleport'

export function useTodoList() {
  // Data
  const search = ref('')
  const sortBy = ref([])
  const filterStatus = ref('')
  const todoStore = useTodoStore()
  const todoList = ref(todoStore.items)
  const navigationFormData = reactive({})
  const { updateTask, openNavigationDrawer, closeNavigationDrawer } = useEditTodoWithTeleport()

  // Methods
  const openGlobalNavigationDrawer = (item) => {
    navigationFormData.id = item.id
    navigationFormData.title = item.title
    navigationFormData.endDate = item.endDate
    navigationFormData.state = item.state
  
    openNavigationDrawer()
  }

  const searchTodo = ({ target }) => {
    todoList.value = todoStore.items.filter((todo) => todo.title.toLowerCase().includes(target.value.toLowerCase()))
  }

  const filterTodo = () => {
    if(!filterStatus.value) {
      todoList.value = todoStore.items
  
      return
    }
  
    todoList.value = todoStore.items.filter((todo) => todo.state === filterStatus.value)
  }

  // Watchers
  watch(() => todoStore.items, (newVal) => {
    todoList.value = newVal
  },{ deep: true })

  return {
    search,
    sortBy,
    todoList,
    updateTask,
    TodoStatus,
    searchTodo,
    filterTodo,
    filterStatus,
    navigationFormData,
    ToDoListTableHeaders,
    closeNavigationDrawer,
    openGlobalNavigationDrawer,
    deleteTodo: todoStore.deleteTodo,
  };
}
