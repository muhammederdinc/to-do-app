import { defineStore } from "pinia";
import { ref } from "vue";

export const useGlobalNavigationDrawer = defineStore("globalNavigationDrawer", () => {
  // State
  const isVisible = ref(false);

  // Actions
  const open = () => {
    isVisible.value = true;
  };

  const close = () => {
    isVisible.value = false;
  };

  return { isVisible, open, close };
});
