import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import vueAwesomeSwiper from '@/components/swiper'
import baseSlider from '@/components/baseSlider'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path:'/swiper',
      name:'swiper',
      component: vueAwesomeSwiper
    },
    {
      path:'/baseSlider',
      name:'baseSlider',
      component:baseSlider
    }
  ]
})
