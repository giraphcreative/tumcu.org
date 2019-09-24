

// onload responsive footer and menu stuff
jQuery(document).ready(function($){

	var url_loan = 'https://secure.creditunion.org/Centryx/servlet/com.sos.webteller.WebTellForms?Page=loanapp';
	var url_join = 'https://secure.creditunion.org/Centryx/servlet/com.sos.webteller.WebTellForms?Page=newmem';

	var cunifyLink = function( link ) {
	    var f = document.createElement("form");
	    f.method = 'post';
	    f.action = link;
	    document.body.appendChild(f);
	    f.submit();
	}

	$('a.cunify-loan').click(function(e){
		e.preventDefault();
		cunifyLink(url_loan);
	})

	$('a.cunify-join').click(function(e){
		e.preventDefault();
		cunifyLink(url_join);
	})

});

