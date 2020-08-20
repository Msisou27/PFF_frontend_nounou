import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Annonces from '../views/Annonces.vue'
import Nav from '../views/Nav.vue'
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'
import Profil from '../views/Profil.vue'
import Gestion from '../views/Gestion.vue'
import Product from '../views/Product.vue'
import Productcrea from '../views/Productcrea.vue'
import Updateproduct from '../views/Updateproduct.vue'
import Testtest from '../views/Testtest.vue'
import Foot from '../views/Foot.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/Annonces',
    name: 'Annonces',
    component: Annonces
  },
  {
    path: '/Nav',
    name: 'Nav',
    component: Nav
  },
  {
    path: '/Login',
    name: 'Login',
    component: Login
  },
  {
    path: '/Register',
    name: 'Register',
    component: Register
  },
  {
    path: '/Profil',
    name: 'Profil',
    component: Profil
  },
  {
    path: '/Gestion',
    name: 'Gestion',
    component: Gestion
  },
  {
    path: '/Product/:slug',
    name: 'Product',
    component: Product, Annonces
  },
  {
    path: '/Productcrea',
    name: 'Productcrea',
    component: Productcrea
  },
  {
    path: '/Updateproduct/:slug',
    name: 'Updateproduct',
    component: Updateproduct
  },
  {
    path: '/Testtest',
    name: 'Testtest',
    component: Testtest
  },
  {
    path: '/Foot',
    name: 'Foot',
    components: Foot
  }
 
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
