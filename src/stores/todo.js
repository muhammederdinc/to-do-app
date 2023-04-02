import { defineStore } from "pinia";
import { ref } from "vue";
// Constants
import { TodoStatus } from '@/constants/index.js';

export const useTodoStore = defineStore("todo", () => {
  // State
  const items = ref([
    { id: 0, title: "Learn Vue 3", endDate: "2023-09-09", state: TodoStatus.TODO },
    { id: 1, title: "Learn Vue 2", endDate: "2023-09-10", state: TodoStatus.COMPLETED },
  ]);

  // Actions
  const updateItem = (id, item) => {
    const index = items.value.findIndex((item) => item.id === id);
    items.value[index] = item;
  };

  return { items, updateItem };
});
