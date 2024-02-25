import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ContadorView from '../views/ContadorView.vue'
import FaqView from '../views/FaqView.vue'
import CliqueParaCurtirView from '../views/CliqueParaCurtirView.vue'
import FiltroDeUsuariosView from '../views/FiltroDeUsuariosView.vue'
import BarraNavegacaoView from '../views/BarraNavegacaoView.vue'
import CalculadoraView from '../views/CalculadoraView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/contador',
    name: 'contador',
    component: ContadorView
  },
  {
    path: '/faq',
    name: 'faq',
    component: FaqView
  },
  {
    path: '/cliqueparacurtir',
    name: 'cliqueparacurtir',
    component: CliqueParaCurtirView
  },
  {
    path: '/filtrousuarios',
    name: 'filtrousuarios',
    component: FiltroDeUsuariosView
  },
  {
    path: '/barranavegacao',
    name: 'barranavegacao',
    component: BarraNavegacaoView
  },
  {
    path: '/calculadora',
    name: 'calculadora',
    component: CalculadoraView
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
