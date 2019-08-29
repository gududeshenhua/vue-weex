<template>
	<div class="TestLast">
		<text>{{hello}}</text>
		<list class="list" @loadmore="loadmore"  offset-accuracy=100 show-scrollbar=false>
			<cell class="cell" v-for="num in lists">
			  <div class="panel">
				<text class="text">{{num}}</text>
			  </div>
			</cell>
		</list>
		<scroller class="scroller" @loadmore="loadmore1" loadmoreoffset="10">
			<div class="panel" v-for="row in rows" :key="row.id">
			  <text class="text">{{row.name}}</text>
			</div> 
		</scroller>
	</div>  
</template>

<script>
	 const modal = weex.requireModule('modal'); 
	  const dom = weex.requireModule('dom');
	export default{
		data(){ 
			return{
				hello:'this is the last',
				lists:[1,2,3,4,5,6],
				rows:[]
			} 
		},
		methods:{
			loadmore(){
				modal.toast({
					message: 'load-more',
					duration: 2
				})  
				setTimeout(()=>{
					this.lists.push(...this.lists); 
				},300)
				
			},
			loadmore1(){
				modal.toast({
					message: 'load-more222222',
					duration: 2
				}) 
			}
		},
		created(){
			for (let i = 0; i < 6; i++) {
			this.rows.push({id: i, name: 'row ' + i})
		  }
		}
	}
</script>

<style scoped>
	.list{
		width: 750px;
		height: 300px; 
	}
	.scroller{
		width: 750px;
		height: 300px;  
	}
	 .panel {
    width: 600px;
    height: 300px;
    margin-left: 75px;
    margin-top: 35px;
    margin-bottom: 35px;
    flex-direction: column;
    justify-content: center;
    border-width: 2px;
    border-style: solid;
    border-color: rgb(162, 217, 192);
    background-color: rgba(162, 217, 192, 0.2);
  }
  .text {
    font-size: 88px;
    text-align: center;
    color: #41B883;
  }
</style>
