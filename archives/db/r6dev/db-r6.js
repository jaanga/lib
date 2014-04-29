// Theo Armour ~ 2014-03-16

	var content;
	var converter;

	function init() {
		converter = new Showdown.converter();

// Styles for the doc
		var css = document.body.appendChild( document.createElement('style') );
		css.innerHTML = 'body { font: normal 12pt sans-serif; margin: 0; overflow: hidden; }';

//Styles for menu and content
		var basics = 'border: 3px double #eee; overflow-x: hidden; overflow-y: auto; padding: 10px; position: absolute; ';
		var horizontalsMenu = 'left: 10%; width: 15%; ';
		var horizontalsContent = 'left: 30%; width: 60%; ';
		var verticals = 'height: ' + ( window.innerHeight * 0.88 ) + 'px; top: 60px; ';

// Menu panel
		var menu = document.body.appendChild( document.createElement( 'div' ) );
		menu.style.cssText = basics + horizontalsMenu + verticals ;
		menu.innerHTML = converter.makeHtml( requestFile( 'readme-menu.md' ) );
// Messages panel
		var messages = menu.appendChild( document.createElement( 'div' ) );
//		menu.style.cssText = basics + horizontalsMenu + verticals ;
		messages.innerHTML = msg;

// Content panel
		content = document.body.appendChild( document.createElement( 'div' ) );
		content.style.cssText = basics + horizontalsContent + verticals ;

// file to display if no hash or with hash
		var index = window.location.pathname.lastIndexOf( '/' ) + 1;
		var filename = window.location.pathname.substr( index ).replace( '.html','.md' );

		if ( !location.hash ) {
			displayPage( 'readme.md', rm );
		} else {
			displayPage( location.hash.substr(1), null );
		}

		window.addEventListener('hashchange', blip, false);
	}

	function blip() {
		console.log( this );
	}

	function displayPage( fname, element ) {

// Fetch and show the content file
		content.innerHTML = converter.makeHtml( requestFile( fname ) );

// Update window title to match H1 of content file
		document.title = content.innerHTML.match( /<h1(.*?)>(.*?)<\/h1>/ )[2];

// Reset background color to all paragraphs = automatcally catching all the menu items
		var paragraphs = document.getElementsByTagName('p');

		for (var i = 0, len = paragraphs.length; i < len; i++) {
			paragraphs[i].style.backgroundColor = '';
		}

// Highlight current menu item
		if ( !!element ) {
			element.style.backgroundColor = '#edd';

// Update URL hash
			if ( element === rm ) {
// if at home page, delete any hash and clean up the history
				history.pushState( '', document.title, window.location.pathname );
			} else {
				location.hash = fname ;
			}
		}
	}

// Fetch a file
	function requestFile( fname ) {
		var xmlHttp = new XMLHttpRequest();
		xmlHttp.open( 'GET', fname, false );
		xmlHttp.send( null );
		return xmlHttp.responseText;
	}
