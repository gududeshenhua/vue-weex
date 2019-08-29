<template>
	<div class="bottom">
		<!-- <div class="bottom-item" v-for="item in 4"  @click="routerGo(item)">
			<text>{{item}}</text> 
		</div> -->
		<div class="bottom">
			<div class="bottom-item" @click="routerGo('1')">
			 <text class="bar-ic iconfont" :class="[this.isActive('1')]">&#xe61a;</text> 
			 <text class="bar-text" :class="[this.isActive('1')]">首页</text>
			</div>       
			<div class="bottom-item" @click="routerGo('2')">
			 <text class="bar-ic iconfont" :class="[this.isActive('2')]">&#xe61b;</text> 
			 <text class="bar-text" :class="[this.isActive('2')]">专题</text>
			</div>   
			<div class="bottom-item" @click="routerGo('3')">
			 <text class="bar-ic iconfont" :class="[this.isActive('3')]">&#xe60f;</text> 
			 <text class="bar-text" :class="[this.isActive('3')]">分类</text>
			</div>   
			<div class="bottom-item" @click="routerGo('4')">
			 <text class="bar-ic iconfont" :class="[this.isActive('4')]">&#xe645;</text> 
			 <text class="bar-text" :class="[this.isActive('4')]">购物车</text>
			</div>   
			<div class="bottom-item" @click="routerGo('5')">    
			 <text class="bar-ic iconfont" :class="[this.isActive('5')]">&#xe60e;</text> 
			 <text class="bar-text" :class="[this.isActive('5')]">个人</text>
			</div> 
		</div>
	</div>
</template>

<script>
	//import '../common/style.css'; 
	export default{  
		data(){   
			return{ 
				active:'1'
			}
		},
		methods:{
			initIconFont () {
              let domModule = weex.requireModule('dom')
			  domModule.addRule('fontFace', {
               'fontFamily': 'iconfont',
               'src':  "url('http://at.alicdn.com/t/font_882126_rqg9r7f08d.ttf')"
             })    
            }, 
			isActive(url){ 
				return this.active == url?'isActive':''
			},
			routerGo(val){  
				this.active = val; 
				//debugger; 
				console.log(val); 
				if(val=='1'){
					this.$router.push({path:'/'});  
				}else if(val=='2'){
					this.$router.push('/one');     
				}else if(val=='3'){
					this.$router.push({name:'two'});  
				}else{
					this.$router.push('/last') 
				}
			} 
		},
		created(){
			this.initIconFont(); 
		}
	}
</script>

<style scoped>   
    .iconfont{  
		font-size: 40px; 
		font-family: iconfont; 
	} 
    /* @import "../common/style.css";  */     
	/* .iconfont {
		  font-family:"iconfont" !important;
		  font-size:50px;
		  font-style:normal;
		  -webkit-font-smoothing: antialiased;
		  -webkit-text-stroke-width: 0.2px;
		  -moz-osx-font-smoothing: grayscale; 
		}  */
	/*@font-face {
	  font-family: 'iconfont';   
	  src: url('//at.alicdn.com/t/font_882126_rqg9r7f08d.eot');
	  src: url('//at.alicdn.com/t/font_882126_rqg9r7f08d.eot?#iefix') format('embedded-opentype'),
	  url('//at.alicdn.com/t/font_882126_rqg9r7f08d.woff2') format('woff2'),
	  url('//at.alicdn.com/t/font_882126_rqg9r7f08d.woff') format('woff'),
	  url('//at.alicdn.com/t/font_882126_rqg9r7f08d.ttf') format('truetype'),
	  url('//at.alicdn.com/t/font_882126_rqg9r7f08d.svg#iconfont') format('svg');
	} */ 
	.bottom{ 
		position: fixed;
		bottom: 0px;
		flex-direction: row;
		flex-wrap: wrap; 
		width: 750px;
		border-top-width: 1px;
		border-top-color: black;
		border-top-style: solid; 
	}
	.isActive{
		/* background-color: red; */
		color: #b4282d;  
	}
	.bottom-item{
		flex: 1;
		justify-content: center;
		align-items: center;
		padding: 20px 0px;
		border-right-width: 1px;
		border-right-color: black; 
		border-right-style: solid; 
		background-color: white;  
	}
</style>
