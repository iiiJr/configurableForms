import Vue from 'vue'
import VueRouter from 'vue-router'
// import index from '@'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'index',
    component: '../views/index.vue'
  }
]

const router = new VueRouter({
  routes
})

export default router
