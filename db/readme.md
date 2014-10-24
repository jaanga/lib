docBrowser Read Me
===
[Web page view]( http://va3c.github.io/viewer/va3c-viewer-html5/ "View files with docBrowser" )
[Source code view]( https://github.com/va3c/viewer/tree/gh-pages/va3c-viewer-html5 "View files with GitHub")


## Concept

###Mission
docBrowser is a very simple and very small JavaScript library for browsing GitHub Markdown files via GitHub Pages.

### Vision / Objectives / Desired Features
DocBrowser should be as simple and as small as possible without being too simple and too small.

## The Problem
The primary way of understanding what a Gitub repository is about is via its Read Me file.
GitHub Read Me files are displayed as HTML if they are written ib GitHub Markdown format.
GitHub also supports the hosting of static web pages that based on HTML. CSS and JavaScript.
The problem is that if you want data to appear on both the Read Me file and as a web page then you need two copies of the content - ine in Markdown and the other in HTML.

### Two links for each repository
Most people use and think of GitHub as a wonderful repository for computer source code.
GitHub, however, also provides a free and very powerful web site hosting services via their [GitHub Pages]( http://pages.github.com/ "Thank you, GitHub!" ) feature.
This feature only works for static files - such as HTML, CSS, JavaScript, text and image files.
Since these are the only files types I deal with, GitHub hosting is delightful hosting solution.

Thus for almost all the work I do you will see two links. One goes to the web page or app hosted by GitHub.
The other link points you to the source code for the page or app.

### Write once, read many
In order to be as effective and efficient as possible, the goal is to write content once and have it appear as required or as necessary in either app or source code or both.
GitHub source repositories support the display of files in [Markdown]( http://en.wikipedia.org/wiki/Markdown ) format: every Markdown file is displayed as HTML.

A current effort is to use these Markdown files in both the source code repositories and web page hosting.
So, for example, the web pages at theo-armour.github.io are written in HTML but each page calls up a Markdown file
that is used to populate the right-side content panel of each page.

### Intuitiveness needed
Apps are from Venus. Code is from Mars. Much time in producing the above sites and text is being devoted
to the process of developing effective terminology and user experience for bridging the gap between apps and source, between GitHub.io and github.com.

This process will be discussed and dissected in more detail in the fullness of time.

### Fonts
These web pages call for the use of the default monospace font as designated by your browser. In most situations this ends us as the '[Courier]( http://en.wikipedia.org/wiki/Courier_(typeface) )' typeface.
This is not standard practice. Most web pages call for a proportionally spaced font. Why the unusual practice? Most of my work is aimed at coders and programmers who are interested in design.
Programmers and coders work with monospace fonts. So I design my sites to appear in a programmatic or orderly way.



## The Solution 
The docBrowesr library allows you to write the content once - in Markdown format - and has the content appear nicely formatted in both systems.

## Features
* Fast, simple and small
* Happily works with both Markdown and HTML
* Displays an 'Instant Message' from a single designated source, read at run time, and displays it on all instances 
* Two links for every repo - one for app view - one for source view 
* And one for the read me
* HTML files are about using the apps
* Moving around GitHub is about looking at source code
* Needs seamless transitions between running apps, parsing source code and viewing read me files 

_The following are some of the thoughts going on while this app and these web pages are being developed. This text is very much a work in rapid progress._

### Easy to enhance

* Create something that screams: 'tweak me till I twerk.' 'Open up the hood, pick up your wrench and screwdriver, and take me apart.'


### Support Lots of interactive 3D

* If this is 'your 3D happy-place' then the library better be open to luscious interactive 3D


### Support lots of images and videos

Yet:

* Don't forget the handicapped  
* Not everybody has cutting edge technology
<!--
## Project Links

You have two ways of viewing the docBrowser files:

* Web pages hosted on GitHub: [jaanga.github.io/libs/db]( http://jaanga.github.io/libs/db/ "view the files as apps." ) <input value="<< You are now probably here." size=28 style="font:bold 12pt monospace;border-width:0;" >  
* Source code on GitHub: [github.com/jaanga/libs/db]( https://github.com/jaanga/libs/tree/gh-pages/db "View the files as source code." ) <scan style=display:none ><< You are now probably here.</scan>
-->

## Project Links

Jaanga is a GitGub [organization account]( https://help.github.com/articles/what-s-the-difference-between-user-and-organization-accounts ) and has multiple owners and admins. 
All Jaanga scripts are [FOSS]( https://en.wikipedia.org/wiki/Free_and_open-source_software ).
Scripts are hosted on GitHub and are viewable as web pages, as described in the 'Read Me' files and as source code.

## Road Map

* Add web font capability
* Objectify/name space?

## Issues /Bugs

* Move the code of the HTML file and into a JavaScript file
* Add universal IM capability
* Make it easier to carry out global updates


### Copyright and License
copyright &copy; 2014 Jaanga authors ~ All work herein is under the [MIT License](http://jaanga.github.io/libs/jaanga-copyright-and-mit-license.md)

This repository is at an early and volatile stage. Not all licensing requirements may have been fully met let alone identified. It is the intension of the authors to play fair and all such requirements will either be met or the feature in question will turned off.

### Change Log

2014-09-28 ~ Theo

* Update read me

2014-03-21 ~ Theo

* * Menus highlight appropriately when internal links are displayed in content div 

2014-03-20 ~ Theo

* Trying to simplify the dev stream
* Big code clean up and simplification

2014-03-19 ~ Theo

* Internal links/hashes in the content div fully operational

2014-03-17 ~ Theo

* Progress on r6
* Work on internal links in content div
* Add back demo/reference files


2014-03-16 ~ Theo

* Move the code of the HTML file and into a JavaScript file
* Add universal IM capability
* Make it easier to carry out global updates


2014-03-15 ~ Theo

* Add R4
* Update read me and menu


