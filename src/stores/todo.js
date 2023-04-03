import { defineStore } from "pinia";
import { ref } from "vue";
// Constants
import { TodoStatus } from '@/constants/index.js';

export const useTodoStore = defineStore("todo", () => {
  // State
  const items = ref([
    { id: 0, title: "Learn Vue 3", endDate: "1/14/2023", state: TodoStatus.TODO },
    { id: 1, title: "Learn Vue 2", endDate: "9/14/2023", state: TodoStatus.COMPLETED },
    { id: 2, title: "Learn Vue 2222", endDate: "4/14/2023", state: TodoStatus.COMPLETED },
  ]);

  // Actions
  const updateTodo = (id, item) => {
    const index = items.value.findIndex((item) => item.id === id);
    items.value[index] = item;
  };

  const deleteTodo = (id) => {
    const index = items.value.findIndex((item) => item.id === id);

    items.value = [
      ...items.value.slice(0, index),
      ...items.value.slice(index + 1),
    ];
  };

  return { items, updateTodo, deleteTodo };
});
