<template>
  <div>
		<topHeader></topHeader>
		<div>
			<input class="testInput"  placeholder="随便写点什么吧"/>
			<image class="testImage"></image> 
		</div>
    <router-view></router-view> 
		<Bottom></Bottom>
  </div> 
</template>

<script>
import topHeader from './components/topHeader.vue';
import Bottom from './components/bottom.vue'
var modal = weex.requireModule('modal');
export default {
  name: 'App',
	components:{topHeader,Bottom},
  data () {
    return {
     
    }
  },
	methods:{
	},
	created(){
		modal.toast({
			message:'页面初始化成功', 
			duration:3
		})
	}
}
</script>

<style scoped>
	.testInput{
		height: 80px;
		padding: 10px;
		font-size: 32px;
		width: 750px;
		border-bottom-width: 1px;
	}
  .wrapper {
    justify-content: center;
    align-items: center;
  } 
</style>
