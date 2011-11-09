if (typeof (gigot) == 'undefined') {
	gigot = {}
}

gigot.effects = {
	'translate-l': {
		reverse: 'translate-r'
	},
	'translate-r': {
		reverse: 'translate-l'
	},
	'flip': {
		reverse: 'flip'
	},
	'flip-r': {
		reverse: 'flip-r'
	}
}

gigot.effectLabels = (function() {
	var results = []
	for (var k in gigot.effects) {
		results.push(k)
	}
	return results
})()
	
gigot.switchTo = function(sel, effect) {
	sel = sel.replace('.', '\\.')
	//var revEffect = gigot.effects[effect].reverse
	var visible = '.section.in'
	//var hidden = '.section.'+effect+',.section.'+revEffect
	//var dest = $(sel)
	
	var effects = gigot.effectLabels.join(' ')
		
	$(visible).removeClass(effects + ' in').addClass(effect+' out')
	$(sel).removeClass(effects + ' out').addClass(effect+' in')
	//$(visible).addClass(effect+' in')
	
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