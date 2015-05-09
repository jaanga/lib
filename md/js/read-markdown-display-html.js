
	var script = document.body.appendChild( document.createElement( 'script' ) );
	script.onload = init;
	script.src = 'http://cdnjs.cloudflare.com/ajax/libs/showdown/0.3.1/showdown.min.js'; 

	function init() {

		document.body.style.cssText = ' font: bold 12pt monospace; left: 0; margin: 0 auto; max-width:900px; position: absolute; right: 0; ';

		var info = document.body.appendChild( document.createElement( 'div' ) );

		var fileName = location.hash ? location.hash.split( '#' )[1] : 'readme.md';
		document.title = document.title ? document.title : fileName;

		var xmlHttp = new XMLHttpRequest();
		xmlHttp.open( 'GET', fileName, true );
		xmlHttp.onreadystatechange = function() {

			info.innerHTML = xmlHttp.readyState === 4  ? new Showdown.converter().makeHtml( xmlHttp.responseText ) : '';

		};

		xmlHttp.send( null );

	}

/*

View only on GitHub
<span style=display:none; >[View as web page]( http://wikihouse.github.io/viewer-experiments/ "view the file as a web page." ) </span>  


View the following only on the web page
<input type=button value='Source code on GitHub' onclick=window.location.href='http://github.com/wikihouse/viewer-experiments/tree/gh-pages/'; />


*/