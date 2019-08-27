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
	   <scroller class="scroll-list" offset-accuracy="300"  @loadmore="onloadmore" loadmoreoffset="0px" show-scrollbar=false>   
		   <slider class="slider" interval="3000" auto-play="true"> 
				  <div class="frame" v-for="img in imageList">
					<image class="image" resize="cover" :src="img.src"></image>
				  </div>
				   <indicator class="indicator"></indicator> 
		   </slider> 
		   <div class="gd-list">
			   <div class="gd-item" v-for="item in goodlist">
				   <image class="gd-image" resize="cover" :src="item.img"></image>
				   <text class="gd-info">{{item.info}}</text>
				   <text class="gd-title">{{item.tlt}}</text>
				   <text class="gd-price">{{item.price}}</text>
			   </div>    
		   </div>
		   <loading class="loading" :display="showLoading">
		   	<text class="indicator1">...</text>
		   </loading> 
	   </scroller> 
	</div> 
</template>
  
<script>
	 const animation = weex.requireModule('animation'); 
	 const stream1 = weex.requireModule('stream');
	 const modal = weex.requireModule('modal'); 
	   export default{
	   	 name:'HelloWorld', 
		 data(){
			 return{
				  logo: 'https://gw.alicdn.com/tfs/TB1yopEdgoQMeJjy1XaXXcSsFXa-640-302.png',
				 list:['A','B','C'],
				 isMove:false  ,
				 rows:['推荐','限时购','新品','居家','餐厨','配件','服装','电器','洗护','杂货','美食','等等','等等'],
				 positionStyle:{},
				 imageList:[],
				 goodlist:[],
				 showLoading:'show'    
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
				  //另外一种方法使用动画模块而不适用过渡
			 },
			 onloadmore(){ 
				  console.log('onload--more'); 
				  modal.toast({
				  	message: 'loading',
				  	duration: 1
				  })  
				  this.showLoading = 'show';
				  setTimeout(() => {
				  	this.goodlist.push(...this.goodlist);
				  	this.showLoading = 'hide'
				  }, 300) 
			 } 
		 },
		 created(){
			 console.log('list---created---'); 
			 console.log(stream1); 
			 this.http('api/home/index',res=>{
				// debugger; 
				console.log(res);    
				this.imageList = res.data.result['banners']; 
			 }) 
			 this.http('api/home/pullGoods', res => {
			 	let result = res.data.result;
			 	this.goodlist = result['goods'];
			 })
		 } 
	   }
</script>

<style scoped>
	.scroll-list{
		position: fixed;
		top:250px; 
		left: 0px;
		right: 0px;
		height: 850px;  
	}  
	.loading{
		width: 100px;
		height: 40px;  
	}
	.indicator1{  
		text-align: center;
	}
	.gd-list{
		flex-direction: row; 
		flex-wrap: wrap;  
		padding-top: 20px; 
	}
	.gd-item{
	    width: 350px;
	    height: 510px;
	    margin-bottom: 20px;
		margin-left: 15px;
	}
	.gd-image{
	    width: 350px;
	    height: 350px;
	    background-color: #f4f4f4;
	}
	
	.gd-title{
	    font-size: 28px;
	    color:#333;
	    width: 350px;
	    margin-top: 15px;
	    overflow: hidden;
	    lines:1;
	    white-space: nowrap;
	    text-overflow: ellipsis;
	}
	.gd-info{
	    display: block;
	    font-size: 28px;
	    width: 350px;
	    height: 65px;
	    padding-left: 10px;
	    padding-right: 10px;
	    padding-top: 15px;
	    padding-bottom: 15px;
	    color:#9F8A60;
	    background-color: #F1ECE2;
	    overflow: hidden;
	    lines:1;
	    white-space: nowrap;
	    text-overflow: ellipsis;
	}
	.gd-price{
	    font-size: 28px;
	    width: 350px;
	    margin-top: 10px;
	    color:#b4282d;
	    overflow: hidden;
	    lines:1;
	    white-space: nowrap;
	    text-overflow: ellipsis;
	}
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
	.slider{
		margin-top: 20px;
		margin-left: 25px;
		width: 700px;
		height: 400px;
		border-width: 2px;
		border-style: solid;
		border-color: #41B883;
	}
	.frame{
		width: 700px;
		height: 400px;
		position: relative;
	}
	.image{
		width: 700px;
		height: 400px; 
	}
	.indicator {
     position: absolute;
     left: 0;
     right: 0;
     bottom: 0;
     height: 60px;
     background-color: rgba(0, 0, 0, 0);
     item-color: #ddd;  
     item-selected-color: #b4282d; 
  } 
</style>
 