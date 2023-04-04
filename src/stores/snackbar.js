import { defineStore } from "pinia";
import { reactive } from "vue";

export const useSnackbar = defineStore("snackbar", () => {
  // State
  const snackbar = reactive({
    isVisible: false,
    message: "İşlem başarılı",
    color: "success",
    timeout: 5000,
  });

  // Actions
  const showSnackbar = (message = "İşlem başarılı", color = "success", timeout = 5000) => {
    snackbar.isVisible = true;
    snackbar.message = message;
    snackbar.color = color;
    snackbar.timeout = timeout;
  };

  return { snackbar, showSnackbar };
});
