!function( window, document, undefined ) {
	
	'use strict'
	
	var 
		video	 = 'http://youtu.be/6YMPAH67f4o'
	  , keycodes = [38,38,40,40,37,39,37,39,66,65]
	  , position = 0
	  , done = false
	  , timer
	  , delay = 500;	
	
	function yeeeaaaaahhhhhhhhhh( elem ) {
		var elements = elem.getElementsByTagName('a');
		
		for( var i = 0, max = elements.length; i< max; i+=1 ) {
			elements[i].href = video;
			elements[i].target= '_blank';
		}
	}
	
	document.addEventListener( 'keydown' , function(event) {
		if(keycodes[position] === event.keyCode) {
			if( position+1 < keycodes.length ) {
				position += 1;	
			} else {
				if(!done) {
					done = true;
					yeeeaaaaahhhhhhhhhh( document.body );
					body.addEventListener("DOMNodeInserted", function (event) {
				        var target = event.target;
				        if ( target.tagName ) {
				            yeeeaaaaahhhhhhhhhh(target);
				        }
				    }, false);
				}
			}
		} else {
			position = 0;
		}
	}, true);
	
}( window, window.document );