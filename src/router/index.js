import { createRouter, createWebHashHistory } from 'vue-router'
import ContadorView from '../views/ContadorView.vue'

const routes = [
  {
    path: '/contador',
    name: 'contador',
    component: ContadorView
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
