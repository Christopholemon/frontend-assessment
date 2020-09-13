# MindArc FE Assessment
## Intro
To whomever has to read this: Hello.<br/><br/>
I am using a modified version of my Simple Boilerplate (https://github.com/Christopholemon/simple-boilerplate). There is some notes and stuff in that about the structure and set up. Not all the CSS is done from scratch, but I have reworked a fair bit of it during this assessment.<br/><br/>
Can fake a delay to see the loading spinner rendering by appending _?delay_ to the url.<br/><br/>
Sorry I didn't get it finished sooner, I've been stood down from work for almost 5 months and everything is rusty as heck. I am sure there are things I missed that are redundant and bloaty, and I'm not sure if Babel is implemented properly. So, if there is any feedback on any of this (eg. file/folder/project structure, css structure, React is evil, why didn't you use jQuery, etc), please let me know. 

## Checking things out
Do the usual _npm i_, then _npm start_. It is using webpack-dev-server so it should just load up :sparkles: _magically_ :sparkles:

## Answer to bonus question
Concatenating a blank space with a string gives _NaN_. _(Aside: Don't ask me why, I would assume a blank would equal null, but it seems that blank is more like a 0 that is always an Int, so it tries to sum 0 + "string" but doesn't just return a string like normal. Because Javascript, apparently)_. Anyway, then when you mash everything together ( b a NaN a) and convert it _toLowerCase()_, it returns a happy string. 
<br /><br />
TLDR: JS is bananas

