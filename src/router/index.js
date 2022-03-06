import Vue from 'vue'
import VueRouter from 'vue-router'
import index from '../views/index.vue'
// import form from '@/views/form.vue'
// import jsonEdit from '@/views/jsonEdit.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'index',
    component: index
  }
]

const router = new VueRouter({
  routes
})

export default router
