docBrowser.js Read Me
=====================
docBrowser.js is a very simple and very small library for browsing Markdown files on GitHub

* Compatible with airDoodle 

### Live Demo

[docBrowser R2](http://jaanga.github.io/libs/db/doc-browser-prototype.html)

### Notes

The ideas or concept for code used to display this document is sourced from the code used to display the documentation for Three.js - a JavaScript library for 3D visualizations such as the demo included in this document.

The code - which appears not to have a name - enables a multi-page document to be generated from files stored on GitHub.

The Three.js documentation app has the following features:

* Allows the two frames to scroll independently.
* Allows frames to be loaded without reloading the entire web page
* Overcomes the inability of the GitHub server to update IFRAMES using HTML by providing a JavaScript routine to do this.
* Provides a simple folder and file structure for creating documents of any length or complexity
* Provides a simple wiki-like method for creating internal and external links 

This code used here has evolved away from the original. It has the title of docBrowser.

It has the following features

* All data designated to appear in the content frames is assumed to be in Markdown format - which is interpreted at run-time and displayed as HTML.
* Tha app loads data via an `XMLhttpRequest` and display that data in a `div`. Thus the app is constricted (or enhanced) by the usual CORS issues.
* The Markdown files may contain imgages, iframes and many other cool things - and full HTML if wanted


The title of the app follows a commonly used JavaScript notation standard that use camel case except that the first letter is lower case,

Thus the title of the library is docBrowser. Of course if used in a title or at the beginning of a sentence the initial letter may be uppercase. 

## Help Files

<http://jaanga.github.io/libs/md/showdown-test.html>

### Copyright, License and Credits
Copyright &copy; 2013 Jaanga authors

All work herein is available under the MIT License.  

For details see [Jaanga Copyright and License](http://jaanga.github.io/libs/jaanga-copyright-and-mit-license.md)


### Change Log

2013-11-06 ~ Theo

* Changed name from docSimple to docBrowser - more specific
* Greatly simplified the functionality


2013-11-04 ~ Theo

* Update copyright notice

2013-11-03 ~ Theo

* Readme updates

2013-11-02 ~ Theo

* File and folder set up 
