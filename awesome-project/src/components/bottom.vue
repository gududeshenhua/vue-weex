<template>
	<div class="bottom">
		<div class="bottom-item" v-for="item in 4"  @click="routerGo(item)">
			<text>{{item}}</text> 
		</div> 
	</div>
</template>

<script>
	export default{
		data(){
			return{
				
			}
		},
		methods:{
			routerGo(val){ 
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
		}
	}
</script>

<style scoped>
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
	.bottom-item{
		flex: 1;
		justify-content: center;
		align-items: center;
		padding: 20px 0px;
		border-right-width: 1px;
		border-right-color: black; 
		border-right-style: solid; 
	}
</style>
