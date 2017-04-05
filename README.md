Starter Files / Basic  (Updated 4/5/2017)

These (along with many of my other github starter files) are put here just for my own memory/usage.  These are not organized or optimized for public consumption - and are just a place for me to start.

I update these often and most likely what is here on github may be out of date or missing something.  Generally, I'll update these a bit with every project I work on.  Usually the updates have to do with my SASS files, but once in a while I'll change something with my grunt workflow.  Lately I have been changing my paths around a bit.

These files are for a specific vanilla project.  

Uses grunt for workflow and the following:

CSS: Sass, Autoprefixr (via postcss)

JS: jshint for linting and uglifier for minification.

html: .kit for --very simple-- templating with little to no overhead.  I know there are much better templating engines out there, but for me I specifically want some as simple as possible. the .kit templating is about as simple as using a server side include.  If I ever decide to use a more complex templating engine, I'll most likely fork these starter files for it.

https://www.npmjs.com/package/grunt-codekit

It's a nice simple engine that allows for includes and variables.



Notes:

I do not like automating image minification, feel it's better to do this individually for best results.  That's why you don't see anything in here to do that manually.

Requirements:

Node/NPM
Grunt (Install global)

npm install and you are good to go

