<script setup>
import { useTodo } from './composables/todo'
import { useEditTodoWithTeleport } from '@/composables/editTodoWithTeleport'
import TTodoDetail from '@/components/templates/TTodoDetail.vue'

const { todo } = useTodo()
const { updateTask, openNavigationDrawer, closeNavigationDrawer } = useEditTodoWithTeleport()
</script>

<template>
  <TTodoDetail
    :todo="todo"
    @openNavigationDrawer="openNavigationDrawer"
    @updateTask="updateTask"
    @closeNavigationDrawer="closeNavigationDrawer"
  />
</template>
