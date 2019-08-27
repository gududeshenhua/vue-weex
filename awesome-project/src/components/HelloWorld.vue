<template>
	<div class="home">
 <!-- <text class="message">Now, let's use Vue.js to build your Weex app?????????.</text>
	<image :src="logo" class="logo" />
	<text class="greeting">The environment is ready!</text>
	<div class="item-list">
		<div v-for="(item,index) in list" class="item">
			<text>{{item}}</text>
		</div> 
	</div>
	<div @click="move" :class="[isMove?'moved':'box1','box']"></div> -->
	  <div class="home-header">
		  <div class="scan">
			  <text class="iconfont"></text>
			  <text>扫一扫</text>
		  </div>
		  <div class="search">
			  <input class="search-input" type="text" placeholder="请随便输入点什么吧"></input>
		  </div>  
		  <div class="home-message">
			  <text class="iconfont"></text>
			  <text>消息</text>  
		  </div>
	  </div>
	   <scroller class="scroller" @click="chooseChannel" scroll-direction="horizontal" loadmoreoffset="750px" show-scrollbar=true> 
	        <div class="scroller-ative" :style="positionStyle"></div>
			<div class="row" v-for="item in rows">  
				<text class="text">{{item}}</text>
			</div>
	   </scroller>
	</div>
</template>
  
<script>
	 const animation = weex.requireModule('animation'); 
	   export default{
	   	 name:'HelloWorld', 
		 data(){
			 return{
				  logo: 'https://gw.alicdn.com/tfs/TB1yopEdgoQMeJjy1XaXXcSsFXa-640-302.png',
				 list:['A','B','C'],
				 isMove:false  ,
				 rows:['推荐','限时购','新品','居家','餐厨','配件','服装','电器','洗护','杂货','美食','等等','等等'],
				 positionStyle:{}
			 }
		 },  
		 methods:{
			 move(){  
			 	this.isMove = !this.isMove;
			 },
			 chooseChannel(event){ 
				 //console.log(event);  
				 var left  = event.srcElement.offsetParent.localName!='article'? event.srcElement.offsetParent.offsetLeft: event.srcElement.offsetLeft;
				 // var left = event.touch.clientX || event.touch.pageX;
				  left = (Math.floor(left/150)*150+50); 
				  this.positionStyle={ 
					  'left':left+'px', 
				  } 
				  
			 }
		 },
		 created(){
			 console.log('list---created---'); 
		 } 
	   }
</script>

<style scoped>
	.message{
		padding: 10px; 
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
	 .home-header{
		 display: flex;
		 flex-direction: row; 
	 }
	 .search{
		 flex: 1; 
	 }
	 .search-input{ 
		 margin-top: 10px;
		 height: 70px; 
		  background-color: lightgray;
		  border-radius: 10px; 
		  text-indent: 20px; 
		  font-size: 30px;  
		  placeholder-color: white; 
 	 }
	.scan,.home-message{
		width: 120px; 
		height: 100px;
		justify-content: center;
		align-items: center; 
	}
	.scroller{
		position: relative;
		flex-direction: row;  
		border-bottom-width: 2px;
		border-bottom-color: #EDEDED;
		border-bottom-style: solid; 
	}
	.scroller-ative{
		position: absolute;
		width: 50px;
		height: 4px;
		bottom: 10px;
		left: 50px;  
		background-color: #b4282d; 
		transition-property: left;
		transition-duration: 0.1s;  
		transition-delay: 0;
		transition-timing-function: ease-in; 
	}
	.row{ 
		width: 150px;  
		 padding-top: 10px;
		 padding-bottom: 20px;
	} 
	.text{
		text-align: center; 
	}
</style>
