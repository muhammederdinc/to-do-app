import { defineStore } from "pinia";
import { ref } from "vue";
// Constants
import { TodoStatus } from '@/constants/index.js';

export const useTodoStore = defineStore("todo", () => {
  const items = ref([
    { id: 0, title: "Learn Vue 3", endDate: "2023-09-09", state: TodoStatus.TODO },
  ]);

  return { items };
});
