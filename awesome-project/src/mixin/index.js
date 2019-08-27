
 const stream = weex.requireModule('stream'); 
 const modal = weex.requireModule('modal'); 
/* console.log(modal); 
console.log(weex);  
console.log(stream); */ 
module.exports = { 
	methods:{
	   http(api,callback){
		   return stream.fetch({
			   method:'GET',
			   type:'json',
			   url: 'http://cdn.zwwill.com/yanxuan/' + api
		   },callback)
	   }
	}
} 