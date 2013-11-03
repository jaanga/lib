	var DS = DS || {};
	var ADO = ADO || {};  // so airDoodle comapitble

	DS.css = document.body.appendChild( document.createElement('style') );
	DS.css.innerHTML = 'body { font: bold 12pt monospace; margin: 0; overflow: hidden; }' +
		'h1, h2, h3, p { margin: 10px 0px; padding: 0px 20px;  }' +
		'p {padding: 5px 20px 5px 20px; }' +
	'';	

	DS.converter = new Showdown.converter();	
	
	DS.basic = 'border: 3px double #eee; overflow-x: hidden; overflow-y: auto; position: absolute; ';
	DS.position = 'position: absolute;';

	DS.horzMnu = 'left: 0; width: 20%;';
	DS.horzIfr = 'left: 25%; margin: auto; right: 20%; width: 55%;' ;
	DS.horzRdm = 'left: 25%; margin: auto; right: 20%; ';
	DS.horzLnk = 'right: 0; width: 18%; ';

	DS.height1 = ' height: ' + (window.innerHeight * 0.45) + 'px;';
	DS.height2 = ' height: ' + (window.innerHeight * 0.40) + 'px;';
	DS.heightFull = ' height: ' + (window.innerHeight * 0.90) + 'px;';

	DS.top1 = ' top: ' + (window.innerHeight * 0.05) + 'px;';
	DS.top2 = ' top: ' + (window.innerHeight * 0.55) + 'px;';

	DS.menu = document.body.appendChild( document.createElement( 'div' ) );
	DS.menu.style.cssText = DS.basic + DS.heightFull + DS.horzMnu + DS.top1;

	DS.ifrWatermark = document.body.appendChild( document.createElement( 'div' ) );
	DS.watermarkStyle = 'font-size:120pt;opacity:0.08; text-align:center;transform:rotate(7deg);-webkit-transform:rotate(-10deg);';
	DS.ifrWatermark.innerHTML = 'Working<br>Sample';		
	
	DS.ifr = document.body.appendChild( document.createElement( 'iframe' ) ); // puur after watermark - so appears in front of watarmerk
	DS.ifrStyle = DS.basic + DS.height1 + DS.top1 + DS.horzIfr;

	DS.readme = document.body.appendChild( document.createElement( 'div' ) );
	DS.readmeStyleFull = DS.basic + DS.heightFull + DS.top1 + DS.horzRdm;
	DS.readmeStyle = DS.basic + DS.height2 + DS.top2 + DS.horzRdm;

	DS.runApp = document.body.appendChild( document.createElement( 'div' ) );
	DS.runApp.style.cssText = DS.position + DS.top1 + DS.horzLnk;

	DS.viewSource = document.body.appendChild( document.createElement( 'div' ) );
	DS.viewSource.style.cssText = DS.position + DS.top2 + DS.horzLnk;

	DS.init = function( fname, id) {
		if ( !location.hash ) {
			displayPage( fname, id );
		} else {
			var str = location.hash.split('#');
			if ( str.length < 4 ) {
				displayPage( str[1], null )  // add id's...
			} else {
				displayOverview( str[1], str[2], null )
			}
		}
	};
	
	function displayPage( fname, element ) {
		DS.ifrWatermark.style.cssText = DS.ifr.style.cssText = 'display: none;';

		DS.readme.innerHTML = DS.converter.makeHtml( requestFile( fname ) );
		DS.readme.style.cssText = DS.readmeStyleFull;

		//DS.runApp.innerHTML = '<h2><a href="https://github.com/jaanga/gestification/tree/gh-pages/cookbook" target="_blank">' +
		//	'View<br>Cookbook<br>source code<br> on GitHub<br>in <br> new tab</a></h2>';
			
		DS.runApp.innerHTML = '<h2>&#x261A;<br><a href="https://github.com/jaanga/gestification/" target="_blank">' +
		'View<br><i>' + fname + '</i><br>source code<br> on GitHub<br>in <br> new tab</a></h2>';
		
		DS.viewSource.innerHTML = '';

		clearMenuHighlights( element );

		location.hash = fname + '#';

		if ( ADO.doodle ) {
			ADO.doodle.style.display = 'block';
			ADO.showDoodle = true;
			ADO.animate();
		}
	}
	
	function displayOverview( folder, fname, element) {
		DS.ifr.src = folder + fname;
		DS.ifr.style.cssText = DS.ifrStyle;
		DS.ifrWatermark.style.cssText  = DS.ifrStyle + DS.watermarkStyle;

		DS.readme.innerHTML = DS.converter.makeHtml( requestFile( folder + '/readme.md' ) );
		DS.readme.style.cssText = DS.readmeStyle;

		// DS.runApp.innerHTML = '<h2><a href="' + folder + fname + '" target="_blank">Run<br>HTML app<br>in<br>new tab</a></h2>';
		
		DS.runApp.innerHTML = '<h2>&#x261A;<br><a href="' + folder + '/index.html" >Open<br><i>'  + folder.substr(0, 1).toUpperCase() + folder.substr(1) + 
			'</i><br>viewer/browser<br>HTML app</a></h2>';
			
		// DS.viewSource.innerHTML = '<h2><a href="https://github.com/jaanga/gestification/tree/gh-pages/cookbook/' + folder + '" target="_blank">' +
		//	'View<br> source code<br> on GitHub<br>in <br> new tab</a></h2>';
			
		DS.viewSource.innerHTML = '<h2>&#x261A;<br><a href="https://github.com/jaanga/gestification/tree/gh-pages/' + folder +
			'/" target="_blank">View<br><i>' + folder.substr(0, 1).toUpperCase() + folder.substr(1) +  '</i><br>source code<br> on GitHub<br>in <br> new tab</a></h2>';
			
		clearMenuHighlights( element );

		location.hash = folder + '#' + fname + '#';

		if ( ADO.doodle ) {
			ADO.showDoodle = false;
			ADO.doodle.style.display = 'none';
		}
	}

	function clearMenuHighlights( element ) {
		var paragraphs = document.getElementsByTagName('p');
		for (var i = 0, len = paragraphs.length; i < len; i++) {
			paragraphs[i].style.backgroundColor='';
		}
		if ( !!element ) element.style.backgroundColor='#edd';
	}

	function requestFile( fname ) {
		var xmlHttp = null;
		xmlHttp = new XMLHttpRequest();
		xmlHttp.open( 'GET', fname, false );
		xmlHttp.send( null );
		return xmlHttp.responseText;
	}
