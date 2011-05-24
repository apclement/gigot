if (typeof (gigot) == 'undefined') {
	gigot = {}
}
	

  
dojo.addOnLoad(function(){
  dojo.query(".checkbox input[type='checkbox']").connect('onclick', function(evt){    	 
	  evt.stopPropagation()    	
  })
  
  //fix iphone checkbox in label problem  
  dojo.query('.checkbox').connect('onclick', function(evt){      
	dojo.query("input[type='checkbox']", evt.currentTarget).forEach(function(node){
	  node.checked = !node.checked          
	})     
	evt.preventDefault()             
  })
  
  dojo.query('.gigot ul.nav > li').connect('click', function(e){
	
		
	  
  })
  
   
  
  
})