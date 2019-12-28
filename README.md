# This is the Glitch WordPress theme.

Glitch isn't what you might consider a "traditional" WordPress theme; it was coded by myself (Will Leffert) to be used on my personal site, classicwfl.com. It's open source not so you can have a website that looks exactly like mine, but so you can take the ideas I've had and use them in your own work. You're welcome to go ahead and use it as-is, but just fair warning: I redesign every 6 months approximately, and once I redesign, I will no longer be maintaining the Glitch theme, making it very risky to use itself.

## What is Glitch?

Glitch is part of my "Art on the Web" ideal; Every 6 months I redesign my website with a new thought in mind at its core. A frequent topic I touch on is perception; Glitch is an extension of that topic, focusing on perception of identity. While the delivery may be (more than) a little obtuse, I feel it works. I never claimed to be a great artist; just that I am one.

Glitch is also an experiment in Brutalist style. Utilizing the BASH terminal theme throughout, I opted to craft a design that, for some, may not be eminently usable. Most of my audience is full of geeks like myself, however, so I feel its a worthwhile trade-off, and if worse comes to worse, I'll be redesigning in June/July anyway (no later than January 2021, at least).

## What is Glitch built on?

Glitch is based on BlankSlate (https://github.com/tidythemes/blankslate). I didn't want to think about every little thing when crafting this, including building out a full functions.php, so BlankSlate was a great choice in that regard. Otherwise, I didn't touch any frameworks.

Glitch is designed to work (mostly) with Gutenberg at its core; Page layouts for non-special pages are all handled through Gutenberg now, since I've almost always kept the same overall layout for those in the past few years. Now I don't have to re-code all that crap anymore.

You'll need a .less compiler at the very least to work with Glitch; I use .less on a daily basis, so that's what I used here.

## Understanding the file structure

Really, I'm not too worried about explaining this, but I might as well in case it isn't readily apparent.

I keep my dev source for js & less files outside of the site's rendering. I use site-root as the root folder for the site on my dev machine. /js contains Javascript. /less contains LESS files. JS is compiled to site-root/wp-content/themes/wfl_glitch/dist in appropriate locations there. Assets are in the site-root/wp-content/themes/wfl_glitch/assets folder and are primarily for my site (because why in the hell would you have pictures of me on your homepage?)

**Also, I suck at git.** Hopefully I finally got the plugins folder cleaned out of my commits, but you may end up finding stray crap that doesn't belong. If all else fails, just remember: /js and /less, plus the wfl_glitch folder in the theme directory are the important bits.

# Final Notes

This is basically provided "as-is". It won't be maintained for long, so if you're using it in a production environment, you're on your own if you end up accidentally summoning Donald Trump and end up being molested by him because you thought it'd be cool to blame Hillary/Pelosi/AOC/Bernie for all your problems.

Offended?

OK Boomer/Snowflake. You've probably discovered this code by looking at my site, which is a bastion of liberal ideals. You'll have to deal with a little dark liberal humor.

## I'm not accepting pull requests.

You're welcome to do what you like with this source, but this is my project. Feel free to reach out and share examples of how you've use Glitch, however (hopefully just ripping out code like you're browsing Stack Overflow, but whatever). If you  notice a major bug, let me know, but otherwise, this is my artwork here, and isn't designed to be collaborative.

## Licensing info
This is the standard MIT license, or the "do whatever the hell you like" license. I don't care, but I will probably be annoyed if you just repackage this theme and sell it. If I find out, I'll probably put you on blast and try to undercut you by promoting the fact that this is open source. If you do decide to sell a modification of this, no problem. Just credit me for it if you're feeling magnanimous. 

Also, because if you're the type of person who steals code and sells it, you probably didn't look too closely at the source. 