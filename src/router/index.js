import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: import('../views/HomeView.vue')
    },
    {
      path: '/to-do-list',
      name: 'todo',
      component: import('../views/ToDoList.vue')
    },
    {
      path: '/todo/:id',
      name: 'todoDetail',
      component: import('../views/TodoDetail.vue')
    },
  ]
})

export default router
