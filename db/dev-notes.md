docBrowser Dev Notes
====================

<i class="fa fa-camera-retro"></i> 

Rules  

Create a new rXX folder locally
Copy db.js from libs/db/master to libs/db/rXX
Edit readme-reader.html so it loads db.js from local rXX folder
Play with files in /libs/db/  
Once they are good, and copy new db.js and files into a new Master and a new Boilerplate  
Upload to GitHub


2014-04-29 ~ Theo
Put the early releases into Archive folder.  
Archive a lot of stuff into r8-dev
R10 is up

2014-03-20 ~ Theo

Trying to simplify the development pocess.
Master is the current one. Dev files are clean and nearly ready to go - except for db.js od any file where the action is
The sandbox is the db project read me and its associated files. An 'Eat your own dev dogfood' scnario.
   
All now looking very clean. Tomorrow: final check and roll it out...

Start adding some Markdown tips in the sandbox sample files. 

2014-03-19 ~ Theo

Add hash change event. Seems to be OK. Unless an incorrect URL is added. Then reloads indefinetely.


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
