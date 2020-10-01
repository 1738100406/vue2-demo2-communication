import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  { path: '/', component: Home },
  { path: '/about', component: () => import("../views/About.vue") },
  { path: '/bus', component: () => import("../views/bus/Father.vue") }
]

const router = new VueRouter({
  routes
})

export default router
