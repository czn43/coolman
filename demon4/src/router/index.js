import Vue from 'vue'
import Router from 'vue-router'
import pro from '@/components/pro'
 import home from'@/components/home'
import personal from'@/components/personal'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: home,
    },
		 {
		  path: '/personal',
		  name: 'personal',
		  component: personal,
		},
			 {
		  path: '/pro',
		  name: 'pro',
		  component: pro,
		}
		
  ]
})
