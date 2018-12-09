import Vue from 'vue'
import Router from 'vue-router'
import HomePage from '@/components/HomePage'
import AboutPage from '@/components/AboutPage'
import CoursesPage from '@/components/CoursesPage'
import StaffPage from '@/components/StaffPage'
import ArtMajorPage from '@/components/ArtMajorPage'
import UniversitiesPage from '@/components/UniversitiesPage'

Vue.use(Router)

export default new Router({
  scrollBehavior () {
    return { x: 0, y: 0 }
  },
  linkExactActiveClass: 'is-active',
  routes: [
    {
      path: '/',
      name: 'HomePage',
      component: HomePage
    },
    {
      path: '/about',
      name: 'AboutPage',
      component: AboutPage
    },
    {
      path: '/courses',
      name: 'CoursesPage',
      component: CoursesPage
    },
    {
      path: '/staff',
      name: 'StaffPage',
      component: StaffPage
    },
    {
      path: '/art-major',
      name: 'ArtMajorPage',
      component: ArtMajorPage
    },
    {
      path: '/universities',
      name: 'UniversitiesPage',
      component: UniversitiesPage
    }
  ],
  mode: 'history'
})
