import {createRouter, createWebHistory} from 'vue-router'
import {PageOne, PageTwo, PageThree} from './components'

const routes = [
  { path: '/page-one', component: PageOne},
  { path: '/page-two', component: PageTwo},
  { path: '/page-three', component: PageThree}
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router