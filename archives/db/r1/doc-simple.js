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

	DS.horzMnu = 'left: 0; width: 23%;';
	DS.horzIfr = 'left: 30%; margin: auto; right: 15%; width: 55%;' ;
	DS.horzRdm = 'left: 30%; margin: auto; right: 15%; ';
	DS.horzLnk = 'right: 0; width: 18%; ';

	DS.height1 = ' height: ' + (window.innerHeight * 0.45) + 'px;';
	DS.height2 = ' height: ' + (window.innerHeight * 0.40) + 'px;';
	DS.heightFull = ' height: ' + (window.innerHeight * 0.88) + 'px;';

	DS.top1 = ' top: ' + (window.innerHeight * 0.08) + 'px;';
	DS.top2 = ' top: ' + (window.innerHeight * 0.58) + 'px;';
	
	DS.title = document.body.appendChild( document.createElement( 'h1' ) );
	DS.title.style.cssText = 'left: 0; position: absolute; top: 2%;'
	
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
	
	DS.editButton = document.body.appendChild( document.createElement( 'div' ) );
	DS.editButton.style.cssText = 	'color: #fff;background-color: #555;	position: fixed; top: 8%; right: 20%; padding: 8px; opacity: 0.5;} ';

	DS.init = function( folder,fname, id) {
		if ( !location.hash ) {
			displayPage( folder, fname, id );
		} else {
	
			var str = location.hash.split('#');
// console.log( str );				
			if ( str.length < 4 ) {
				displayApp( str[1], str[2], null )  // add id's...
			} else {
				displayApp( str[1], str[2], null )
			}
		}
	};
	
	function displayPage( folder, fname, element ) {

		DS.ifrWatermark.style.cssText = DS.ifr.style.cssText = 'display: none;';

		DS.readme.innerHTML = DS.converter.makeHtml( requestFile( fname ) );
		DS.readme.style.cssText = DS.readmeStyleFull;
			
		DS.runApp.innerHTML = ''; 
		
		DS.editButton.innerHTML = '<a href="https://github.com/jaanga/gestification/blob/gh-pages/' + folder + '/' + fname + 
		'" onmouseover=this.style.opacity=1; style=color:#fff;text-decoration:none;	>' +
		'Edit this page</a>';
		
		clearMenuHighlights( element );

		if ( element === intro ) {
			history.pushState('', document.title, window.location.pathname);
		} else {
			location.hash = fname ;
		}		

		if ( ADO.doodle ) {
			ADO.doodle.style.display = 'block';
			ADO.showDoodle = true;
			ADO.animate();
		}
	}

	function displayApp( folder, fname, element ) {

		DS.ifrWatermark.style.cssText = DS.ifr.style.cssText = 'display: none;';

		DS.readme.innerHTML = DS.converter.makeHtml( requestFile( folder + '/' +  fname ) );
		DS.readme.style.cssText = DS.readmeStyleFull;
		
		DS.editButton.innerHTML = '<a href="https://github.com/jaanga/gestification/blob/gh-pages/' + folder + '/' + fname + 
		'" onmouseover=this.style.opacity=1; style=color:#fff;text-decoration:none;	>' +
		'Edit this page</a>';
		
		clearMenuHighlights( element );
		
		location.hash = folder + '#' + fname;

		if ( ADO.doodle ) {
			ADO.doodle.style.display = 'block';
			ADO.showDoodle = true;
			ADO.animate();
		}
	}
	
	function displayOverview( folder, fname, element) {

		DS.ifr.src = folder + '/' + fname;
		DS.ifr.style.cssText = DS.ifrStyle;
		DS.ifrWatermark.style.cssText  = DS.ifrStyle + DS.watermarkStyle;

		DS.readme.innerHTML = DS.converter.makeHtml( requestFile( folder + '/readme.md' ) );
		DS.readme.style.cssText = DS.readmeStyle;
		
		DS.editButton.innerHTML = '<a href="https://github.com/jaanga/gestification/blob/gh-pages/' + folder + '/' + fname + 
		'" onmouseover=this.style.opacity=1; style=color:#fff;text-decoration:none;	>' +
		'Edit this page</a>';
				
		clearMenuHighlights( element );
		
		var tit =  DS.menu.getElementsByTagName('h1');
// console.log( 'do',  tit );		
		DS.title.innerHTML = tit[0].innerHTML;		

		location.hash = folder + '#' + fname + '#';

		if ( ADO.doodle ) {
			ADO.showDoodle = false;
			ADO.doodle.style.display = 'none';
		}
	}

	function clearMenuHighlights( element ) {
		var tit = DS.menu.getElementsByTagName('h1');
		DS.title.innerHTML = tit[0].innerHTML;
		DS.menu.children[0].style.cssText= 'display:none;'
		
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
