import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

const Index = () => import('@/views/index.vue')

const routes = [
  {
    path: '/',
    name: 'index',
    component: Index
  }
]

const router = new VueRouter({
  routes
})

export default router
