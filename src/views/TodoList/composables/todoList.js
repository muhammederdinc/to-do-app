import { ref } from 'vue'
import { TodoStatus, ToDoListTableHeaders } from '@/constants/index.js';

export function useTodoList() {
  // Data
  const search = ref('')
  const sortBy = ref([])

  return {
    search,
    sortBy,
    TodoStatus,
    ToDoListTableHeaders
  };
}
