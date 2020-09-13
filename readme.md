# MindArc FE Assessment
Using a modified version of my Simple Boilerplate (https://github.com/Christopholemon/simple-boilerplate).<br/><br/>
Can fake a delay to see the loading spinner rendering by appending _?delay_ to the url.

## Answer to bonus question:
Concatenating a blank space with a string gives _NaN_. _(Aside: Don't ask me why, I would assume a blank would equal null, but it seems that blank is more like a 0 that is always an Int, so it tries to sum 0 + "string" but doesn't just return a string like normal. Because Javascript, apparently)_. Anyway, then when you mash everything together ( b a NaN a) and convert it _toLowerCase()_, it returns a happy string. 
<br /><br />
So, basically, JS is bananas.

