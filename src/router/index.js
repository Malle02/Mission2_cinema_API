import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/Home.vue'
import Details from '../views/MovieDetailsPage.vue'
import Detailstv from '../views/TvDetails.vue'
import Search from '../views/Search.vue'
import Moviecard from '../components/MovieCard.vue'
import Searchbar from '../components/SearchBar.vue'
import detailActeur from '../views/detailActeur.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/details/:id',
      name: 'details',
      component: Details
    },
    {
      path: '/tvdetails/:id',
      name: 'TvDetails',
      component: Detailstv
    },

    {
      path: '/search',
      name: 'search',
      component: Search
    },
    {
      path: '/moviecard',
      name: 'Moviecard',
      component: Moviecard
    },
    {
      path: '/searchbar',
      name: 'searchbar',
      component: Searchbar
    },
    {
      path: '/detailsacteur:id',
      name: 'ActeurDetails',
      component: detailActeur
    }
  ]
})

export default router
