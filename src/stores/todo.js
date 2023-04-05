import { defineStore } from "pinia";
import { ref } from "vue";
import { useSnackbarStore } from '@/stores/snackbar'
// Constants
import { TodoStatus } from '@/constants/index.js';

export const useTodoStore = defineStore("todo", () => {
  // State
  const { showSnackbar } = useSnackbarStore()
  const items = ref([
    { id: 0, title: "Learn Vue", endDate: "1/14/2023", state: TodoStatus.TODO },
    { id: 1, title: "Learn Pinia", endDate: "9/14/2023", state: TodoStatus.COMPLETED },
    { id: 2, title: "Learn JavaScript", endDate: "4/14/2023", state: TodoStatus.COMPLETED },
  ]);

  // Getters
  const getTodoById = (id) => {
    return items.value.find((item) => item.id === id);
  };

  // Actions
  const updateTodo = (id, item) => {
    const index = items.value.findIndex((item) => item.id === id);
    items.value[index] = item;

    showSnackbar('To-do updated successfully', 'success')
  };

  const deleteTodo = (id) => {
    const index = items.value.findIndex((item) => item.id === id);

    items.value = [
      ...items.value.slice(0, index),
      ...items.value.slice(index + 1),
    ];

    showSnackbar('Todo deleted successfully', 'success')
  };

  const addTodo = (item) => {
    const newTodo = {
      id: items.value.length,
      state: TodoStatus.TODO,
      ...item,
    }

    items.value = [...items.value, newTodo];

    showSnackbar('To-do has been created successfully', 'success')
  };

  return { items, updateTodo, deleteTodo, addTodo, getTodoById };
});
