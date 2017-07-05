Starter Files / Basic  (Updated 7/5/2017)

These (along with many of my other github starter files) are put here just for my own memory/usage.  These are not organized or optimized for public consumption - and are just a place for me to start.

I update these often and most likely what is here on github may be out of date or missing something.  Generally, I'll update these a bit with every project I work on.  Usually the updates have to do with my SASS files, but once in a while I'll change something with my grunt workflow.  Lately I have been changing my paths around a bit.

It is assumed you are already running some sort of a webserver on your dev environment.  In my case, it's usually MAMP.

These files are for a specific vanilla project.  

Uses grunt for workflow and the following:

CSS: Sass, Autoprefixr (via postcss) - My css is a bit messy here, and I find myself cleaning this up every time i start a new project.  Lots of good stuff in here though.  Some may only make sense to me, but feel free to ask me any questions.  The css is what gets updated the most in this repo.

JS: jshint for linting and uglifier for minification.  I like having a jslinter because I am just a sloppy javascripter.  (The linter is also cool to use if you have a team and want to force certain formatting.)

html: .kit for --very simple-- templating with little to no overhead.  I know there are much better templating engines out there, but for me I specifically want some as simple as possible. the .kit templating is about as simple as using a server side include.  If I ever decide to use a more complex templating engine, I'll most likely fork these starter files for it.  See examples of how to make includes and pass variables in the a/kit directory.

https://www.npmjs.com/package/grunt-codekit

It's a nice simple engine that allows for includes and variables.

Grunt watch will keep this running and compiling based on the watched files.  ctrl-c to quit.

Livereload is on - snag the livereload chrome plugin for easy working: 
https://chrome.google.com/webstore/detail/livereload/jnihajbhpnppcggbcgedagnkighmdlei


REQUIREMENTS:

Node/NPM
Grunt (Install global)

Make sure you have the grunt cli installed globally:

sudo npm install -g grunt-cli

npm install and you are good to go  (you will prob need to use sudo)



NOTES:

** I have been adjusting myproject paths lately, but it's not reflected in these files.  All of your "working" files are in the "a" directory - but these starters will automatically compile everything into the base directory.  I guess you could always make a source & public directory or do whatever you need. I find that I need to adjust these often based on what/whom I am working with. (If I'm building a wordpress theme, I will follow that structure, etc)

** I do not like automating image minification, feel it's better to do this individually for best results.  That's why you don't see anything in here to do that manually.

** I always use svgomg to optimize my svg's https://jakearchibald.github.io/svgomg/

** postcss - only using this for autoprefixr right now, and prob can make more use of the other items - but just haven't looked into it anymore.  Like I said, these starter files do pretty much everything I need right now.

** autoprefixr defaults to "last two versions" but, if you need to adjust based on your requirements:
https://github.com/ai/browserslist#queries

** Things I should add to this include:

- better automating of moving files
- better checking of removing files from kit if I delete them


