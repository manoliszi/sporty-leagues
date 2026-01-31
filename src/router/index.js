import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import LeagueView from '@/views/LeagueView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/league/:id',
    name: 'league',
    component: LeagueView,
    props: true
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
