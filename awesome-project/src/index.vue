<template>
  <div>
		<topHeader></topHeader>
		<div>
			<input class="testInput"  placeholder="随便写点什么吧"/>
			<image class="testImage"></image> 
		</div>
    <!-- <image :src="logo" class="logo" />
    <text class="greeting">The environment is ready!</text>
		<div class="item-list">
			<div v-for="(item,index) in list" class="item">
				<text>{{item}}</text>
			</div> 
		</div>
		<div @click="move" :class="[isMove?'moved':'box1','box']"></div> -->
    <router-view/>
  </div> 
</template>

<script>
import topHeader from './components/topHeader.vue'
var modal = weex.requireModule('modal');
export default {
  name: 'App',
	components:{topHeader},
  data () {
    return {
      logo: 'https://gw.alicdn.com/tfs/TB1yopEdgoQMeJjy1XaXXcSsFXa-640-302.png',
			list:['A','B','C'],
			isMove:false  
    }
  },
	methods:{
		move(){  
			this.isMove = !this.isMove;
		}
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
  .logo {
    width: 424px;
    height: 200px
  }
	.box{
		width: 250px;
		height: 250px;
		transform-origin: center center;
		transition-property: transform,background-color;
		transition-duration: 0.3s;
		transition-delay: 0s;
		transition-timing-function: case;
	}
	.moved{
		background-color: #FF0000;
		transform: translate(250px,200px) scale(1.5,1.5);
	}
	.box1{
		background-color: yellow;
		transform: translate(0,0) scale(1); 
	}
  .greeting {
    text-align: center;
    margin-top: 70px;
    font-size: 50px;
    color: #41B883;
  }
  .message {
    margin: 30px;
    font-size: 32px;
    color: #727272;
  }
	.item-list{
		/* width: 100%; */
		flex-wrap: wrap; 
		flex-direction: row;
	}
	.item{
		flex:1;
	}
</style>
