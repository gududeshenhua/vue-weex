<template>
	<div class="topic">
		<div class="header">
			<text class="header-text">专题</text>
		</div>
		<scroller class="list-all" show-scrollbar=false @loadmore="loadmore">
			<scroller class="list-1" show-scrollbar=false scroll-direction="horizontal">
				<div class="list1-item" v-for="item in list">
					<image class="list1-image" resize="cover" :src="item.img"></image>
					<text class="list1-text">{{item.name}}</text>
				</div> 
			</scroller>
			
			<div class="topic-item" v-for="item in articles">
				<div class="speator"></div> 
				<div class="item-top">
					<image class="item-top-header" resize="cover" :src="item.autherImg"></image>
					<text class="item-top-text">{{item.auther}}</text> 
				</div>
				<div class="item-content"> 
					<image class="item-content-image" resize="cover" :src="item.img"></image>
					<div class="item-content-text">
						<text class="text-left">{{item.tlt}}</text> 
						<text class="text-right">{{item.price}}</text>
					</div>
					<text class="text-bottom">{{item.info}}</text>
			    </div> 
		    </div>
		</scroller>
    </div>
</template>
  
<script>
	   export default{ 
		 data(){
			 return{
				 list:[],
				 articles:[]
			 }
		 },
		 methods:{
			 loadmore(){
				 
			 }
		 },
		 created(){
			  this.http('api/topic/index', res => { 
			     this.list = res.data.result['topics'];   
			 });
			 this.http('api/topic/articles', res => {
			     this.articles = res.data.result['articles'];
			 })
		 } 
	   }
</script>
 
<style scoped>
	.topic{
		
	}
	.item-top{
		flex-direction: row; 
		align-items: center;
		 padding-top: 15px;
		 padding-bottom: 15px; 
	}
	.item-top-header{
		border-radius: 50%;
		width: 60px; 
		height: 60px;
		background-color:lightgray;
		margin-left: 20px;
	}
	.item-top-text{
		font-size: 30px; 
		margin-left: 20px; 
	}
	.speator{ 
		height: 30px; 
		background-color: #f4f4f4;  
	}
	.item-content-image{
		background-color: lightgray;
		width: 750px;
		height: 300px;
	}
	.message{
		padding: 10px;  
	}
	.header{
		height: 100px;
		background-color:#fafafa;
		align-content: center; 
		border-bottom-width: 1px;
		border-bottom-color: #d9d9d9; 
	}
	.header-text{
		font-size: 40px;
		 height: 100px;
		 padding-top: 20px; 
		 text-align: center; 
	}
	.list-1{
		width: 750px; 
		height: 200px;
		padding-top: 20px; 
		flex-direction: row;
		align-items: center; 
	}
	.list1-item{
		width: 270px;   
		height: 160px; 
		margin-left: 20px; 
		border-width: 1px;
		border-color: lightgray;
		border-style: solid; 
		position: relative;
	}
	.list1-image{
		width: 270px;
		height: 160px;
		border-radius: 6px;	
		position: absolute;
		left: 0px; 
		top: 0px;
	}
	.list1-text{
		font-size: 28px;  
		color: white; 
		margin-left: 20px;
		margin-right: 20px; 
		text-align: center; 
		lines:1;
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis; 
		margin-top: 50px;  
	}
	.item-content-text{
		flex-direction: row;
		padding-top: 10px;
		padding-bottom: 10px;
	}
	.text-left{
		font-size: 40px; 
		flex: 1;
		text-indent: 10px; 
	}
	.text-right{
		font-size: 40px; 
		padding-right: 10px; 
		color: darkred; 
	}
	.text-bottom{
		font-size: 30px;
		text-indent: 10px;  
	}
</style>
