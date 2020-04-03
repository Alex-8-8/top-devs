import Vue from 'vue'
import VueRouter from 'vue-router'
import Content from '@/components/Content.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/top-devs/user/:id',
    component: Content,
  }
]

const router = new VueRouter({
  mode: 'history',
  routes,
})

export default router
