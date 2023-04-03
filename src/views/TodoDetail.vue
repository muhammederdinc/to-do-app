<script setup>
import { useRouter } from 'vue-router'
import { useTodoStore } from '@/stores/todo'

const router = useRouter()
const { getTodoById } = useTodoStore()

const { id } = router.currentRoute.value.params
const todo = getTodoById(Number(id))
</script>

<template>
  <div>
    {{ todo }}
  </div>
</template>
