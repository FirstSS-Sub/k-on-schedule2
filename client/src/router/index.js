import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: 'about' */ '../views/About.vue')
  },
  {
    path: '/user',
    name: 'User',
    component: () => import(/* webpackChunkName: 'user' */ '../views/User.vue')
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import(/* webpackChunkName: 'login' */ '../views/Login.vue')
  },
  {
    path: '/create_user',
    name: 'CreateUser',
    component: () => import(/* webpackChunkName: 'create_user' */ '../views/CreateUser.vue')
  },
  {
    path: '/schedule',
    name: 'Schedule',
    component: () => import(/* webpackChunkName: 'schedule' */ '../views/Schedule.vue')
  },
  {
    path: '/test_db',
    name: 'TestDB',
    component: () => import(/* webpackChunkName: 'test_db' */ '../views/TestDB.vue')
  },
  {
    path: '/create_group',
    name: 'CreateGroup',
    component: () => import(/* webpackChunkName: "create_group" */ '../views/CreateGroup.vue')
  },
  {
    path: '/login_forget',
    name: 'LoginForget',
    component: () => import(/* webpackChunkName: "login_forget" */ '../views/LoginForget.vue')
  },
  {
    path: '/line_link', // Lineからの呼出の時のみ表示したいので、App.vueには記載していない
    name: 'LineLink',
    component: () => import(/* webpackChunkName: "login_forget" */ '../views/LineLink.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
