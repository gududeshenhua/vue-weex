/*global Vue*/
import Router from 'vue-router'
import Test from '@/components/Test' 
import TestOne from '@/components/TestOne' 
import HelloWorld from '@/components/HelloWorld' 
import TestTwo from '@/components/TestTwo'

 
Vue.use(Router)

export const router = new Router({ 
	mode:"abstract",  
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component:HelloWorld  
    },{
			path:'/one', 
			name:'one',   
			component:Test   
		},
		{
			path:'/two', 
			name:'two',   
			component:TestOne    
		},{
			path:'/last', 
			name:'last',
			component:TestTwo
		}
  ]
})
