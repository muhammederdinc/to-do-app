import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/HomeView.vue')
    },
    {
      path: '/to-do-list',
      name: 'todo',
      component: () => import('../views/TodoListView/TodoListView.vue')
    },
    {
      path: '/todo/:id',
      name: 'todoDetail',
      component: () => import('../views/TodoDetailView/TodoDetailView.vue')
    },
  ]
})

export default router
