import Vue from 'vue'
import weex from 'weex-vue-render'
/*global Vue*/

weex.init(Vue)
/* weex initialized here, please do not move this line */
const { router } = require('./router');
const App = require('@/index.vue');
const mixin = require('@/mixin/index.js');   
console.log('mixin',mixin);  
/* eslint-disable no-new */ 
Vue.mixin(mixin);   
new Vue(Vue.util.extend({el: '#root', router}, App));
router.push('/'); 
 
   