Dev Notes
=========

2014-03-19 ~ Theo

Add hash change event. Seems to be OK. Unless an correct URL is added. Then reloads indefinetely.


2014-03-18 ~ Theo


Links in the content dev should be absolute
Why?
Because the `blob/gh-pages` parts mean that relative links go to the wrong place depepenig on github.io and .com
May need three links

- show source code
- display read me
- run app 

Note to self: Would hiding links on the .com-side read me files help?

Main thing:
Links update nicly when files are local, because link to remote fires an update event.
But on GitHub, URL has not changed. So no event fired.
Therefore must add event listener for hash change...

2014-03-17 ~ Theo

Getting links in the content `DIV` to work appropriately is turning out to be a bit of a fun issue. 
Will teach me more about attaching events and dynamic languages.
