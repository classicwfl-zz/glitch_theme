(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
jQuery( document ).ready(function() {
    if (jQuery("body").hasClass("home")) { 
        glitchTimer = setInterval(function(){setTimeout(addGlitchHomeArt,genTimer(6000))},2200); 
        glitchRadiusTimer = setInterval(function(){setTimeout(addGlitchRadiusHomeArt,genTimer(4000))},1000);
    }

    //This is for glitching headlines; disabling just because it's not ready yet.
    // if (!jQuery("body").hasClass("page-template-web-art-template-page")) {
    //     addGlitchHeadlineSpan();
    //     document.getElementById("glitch_toggleDarkMode").addEventListener("click", darkModeSwitch, false);
    //     glitchTextTimer = setInterval(function(){setTimeout(glitchHeadline,genTimer(5000))},2000);
    // }
    
    
    

    document.getElementById("glitch_toggleNav").addEventListener("click", glitch_toggleNav, false);

});

function addGlitchHomeArt() {
    var pillarNum = Math.floor(Math.random() * 3) + 1;
    var pillarName = ".glitch_homeArtPillar:nth-child(" + pillarNum + ")";
    var pillar = jQuery(pillarName);
    var glitchDuration = Math.floor(Math.random() * 1000);
    var glitchShadowType = "gl1tch--shadow" + (Math.floor(Math.random() * 4) + 1).toString();

    pillar.addClass("gl1tch").addClass(glitchShadowType);
    setTimeout(function () {      
        pillar.removeClass("gl1tch").removeClass(glitchShadowType);         
    }, glitchDuration);
}

function addGlitchRadiusHomeArt() {
    var pillarNum = Math.floor(Math.random() * 3) + 1;
    var pillarName = ".glitch_homeArtPillar:nth-child(" + pillarNum + ")";
    var pillar = jQuery(pillarName);
    var glitchDuration = Math.floor(Math.random() * 2000);

    pillar.addClass("gl1tch--noRadius");
    setTimeout(function () {      
        pillar.removeClass("gl1tch--noRadius");         
    }, glitchDuration);
}

function addGlitchHeadlineSpan() {
    if (jQuery("h1").length) {
        var headText = jQuery("h1").text();
        var splitText = headText.split("");
        var textLength = splitText.length;
        var textIndex = Math.floor(Math.random() * textLength);
        var glitchChar = splitText[textIndex].toLowerCase();
        var glitchCharSelector = glitchChar;
        
        //This isn't really used at the moment, but we're leaving it in just in case I do decide to use it. See glitch-glitches.less.
        switch (glitchChar) {
            case " ":
                glitchCharSelector = "spacechar";
                break;
            case "&":
                glitchCharSelector = "ampchar";
                break;
            case ";":
                glitchCharSelector = "semicolonchar";
                break;
            case ":":
                glitchCharSelector = "colonchar";
                break;
            case "!":
                glitchCharSelector = "exclaimchar";
                break;
            case ".":
                glitchCharSelector = "periodchar";
                break;
            case '"':
                glitchCharSelector = "dblquotechar";
                break;
            case "\'":
                glitchCharSelector = "quotechar";
                break;
        }

        splitText[textIndex] = '<span class="gl1tch ' + glitchCharSelector + '">' + splitText[textIndex] + "</span>";
        var finalText = splitText.join("");

        jQuery("h1").html(finalText);
    }
}

function glitchHeadline() {
    var glitchCharObj = jQuery("h1 > span.gl1tch");
    var glitchDuration = Math.floor(Math.random() * 1000);

    glitchCharObj.addClass("gl1tch--text");
    setTimeout(function () {
        glitchCharObj.removeClass("gl1tch--text");
    }, glitchDuration);
}

function genTimer(dur) {
    return Math.floor(Math.random() * dur);
}

/* Nav Trigger */
function glitch_toggleNav() {
    glitch_navActive = jQuery(".glitch_navButton").hasClass("glitch_navButton--active");

    if (glitch_navActive) {
        jQuery(".glitch_navButton").removeClass("glitch_navButton--active");
        jQuery(".glitch_navContainer").removeClass("glitch_navContainer--active");
    } else {
        jQuery(".glitch_navButton").addClass("glitch_navButton--active");
        jQuery(".glitch_navContainer").addClass("glitch_navContainer--active");
    }
}

/* Dark Mode Trigger */
function darkModeSwitch() {
    if (jQuery("body").hasClass("d4rkm0d3")) {
        jQuery("body").removeClass("d4rkm0d3");
        document.cookie = "darkmode=0;path=/";
    } else {
        jQuery("body").addClass("d4rkm0d3");
        document.cookie = "darkmode=1;path=/";
    }
}
},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJqcy9nbGl0Y2gtZGV2LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24oKXtmdW5jdGlvbiByKGUsbix0KXtmdW5jdGlvbiBvKGksZil7aWYoIW5baV0pe2lmKCFlW2ldKXt2YXIgYz1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlO2lmKCFmJiZjKXJldHVybiBjKGksITApO2lmKHUpcmV0dXJuIHUoaSwhMCk7dmFyIGE9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitpK1wiJ1wiKTt0aHJvdyBhLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsYX12YXIgcD1uW2ldPXtleHBvcnRzOnt9fTtlW2ldWzBdLmNhbGwocC5leHBvcnRzLGZ1bmN0aW9uKHIpe3ZhciBuPWVbaV1bMV1bcl07cmV0dXJuIG8obnx8cil9LHAscC5leHBvcnRzLHIsZSxuLHQpfXJldHVybiBuW2ldLmV4cG9ydHN9Zm9yKHZhciB1PVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmUsaT0wO2k8dC5sZW5ndGg7aSsrKW8odFtpXSk7cmV0dXJuIG99cmV0dXJuIHJ9KSgpIiwialF1ZXJ5KCBkb2N1bWVudCApLnJlYWR5KGZ1bmN0aW9uKCkge1xuICAgIGlmIChqUXVlcnkoXCJib2R5XCIpLmhhc0NsYXNzKFwiaG9tZVwiKSkgeyBcbiAgICAgICAgZ2xpdGNoVGltZXIgPSBzZXRJbnRlcnZhbChmdW5jdGlvbigpe3NldFRpbWVvdXQoYWRkR2xpdGNoSG9tZUFydCxnZW5UaW1lcig2MDAwKSl9LDIyMDApOyBcbiAgICAgICAgZ2xpdGNoUmFkaXVzVGltZXIgPSBzZXRJbnRlcnZhbChmdW5jdGlvbigpe3NldFRpbWVvdXQoYWRkR2xpdGNoUmFkaXVzSG9tZUFydCxnZW5UaW1lcig0MDAwKSl9LDEwMDApO1xuICAgIH1cblxuICAgIC8vVGhpcyBpcyBmb3IgZ2xpdGNoaW5nIGhlYWRsaW5lczsgZGlzYWJsaW5nIGp1c3QgYmVjYXVzZSBpdCdzIG5vdCByZWFkeSB5ZXQuXG4gICAgLy8gaWYgKCFqUXVlcnkoXCJib2R5XCIpLmhhc0NsYXNzKFwicGFnZS10ZW1wbGF0ZS13ZWItYXJ0LXRlbXBsYXRlLXBhZ2VcIikpIHtcbiAgICAvLyAgICAgYWRkR2xpdGNoSGVhZGxpbmVTcGFuKCk7XG4gICAgLy8gICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZ2xpdGNoX3RvZ2dsZURhcmtNb2RlXCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBkYXJrTW9kZVN3aXRjaCwgZmFsc2UpO1xuICAgIC8vICAgICBnbGl0Y2hUZXh0VGltZXIgPSBzZXRJbnRlcnZhbChmdW5jdGlvbigpe3NldFRpbWVvdXQoZ2xpdGNoSGVhZGxpbmUsZ2VuVGltZXIoNTAwMCkpfSwyMDAwKTtcbiAgICAvLyB9XG4gICAgXG4gICAgXG4gICAgXG5cbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImdsaXRjaF90b2dnbGVOYXZcIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGdsaXRjaF90b2dnbGVOYXYsIGZhbHNlKTtcblxufSk7XG5cbmZ1bmN0aW9uIGFkZEdsaXRjaEhvbWVBcnQoKSB7XG4gICAgdmFyIHBpbGxhck51bSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDMpICsgMTtcbiAgICB2YXIgcGlsbGFyTmFtZSA9IFwiLmdsaXRjaF9ob21lQXJ0UGlsbGFyOm50aC1jaGlsZChcIiArIHBpbGxhck51bSArIFwiKVwiO1xuICAgIHZhciBwaWxsYXIgPSBqUXVlcnkocGlsbGFyTmFtZSk7XG4gICAgdmFyIGdsaXRjaER1cmF0aW9uID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTAwMCk7XG4gICAgdmFyIGdsaXRjaFNoYWRvd1R5cGUgPSBcImdsMXRjaC0tc2hhZG93XCIgKyAoTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogNCkgKyAxKS50b1N0cmluZygpO1xuXG4gICAgcGlsbGFyLmFkZENsYXNzKFwiZ2wxdGNoXCIpLmFkZENsYXNzKGdsaXRjaFNoYWRvd1R5cGUpO1xuICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkgeyAgICAgIFxuICAgICAgICBwaWxsYXIucmVtb3ZlQ2xhc3MoXCJnbDF0Y2hcIikucmVtb3ZlQ2xhc3MoZ2xpdGNoU2hhZG93VHlwZSk7ICAgICAgICAgXG4gICAgfSwgZ2xpdGNoRHVyYXRpb24pO1xufVxuXG5mdW5jdGlvbiBhZGRHbGl0Y2hSYWRpdXNIb21lQXJ0KCkge1xuICAgIHZhciBwaWxsYXJOdW0gPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAzKSArIDE7XG4gICAgdmFyIHBpbGxhck5hbWUgPSBcIi5nbGl0Y2hfaG9tZUFydFBpbGxhcjpudGgtY2hpbGQoXCIgKyBwaWxsYXJOdW0gKyBcIilcIjtcbiAgICB2YXIgcGlsbGFyID0galF1ZXJ5KHBpbGxhck5hbWUpO1xuICAgIHZhciBnbGl0Y2hEdXJhdGlvbiA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDIwMDApO1xuXG4gICAgcGlsbGFyLmFkZENsYXNzKFwiZ2wxdGNoLS1ub1JhZGl1c1wiKTtcbiAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHsgICAgICBcbiAgICAgICAgcGlsbGFyLnJlbW92ZUNsYXNzKFwiZ2wxdGNoLS1ub1JhZGl1c1wiKTsgICAgICAgICBcbiAgICB9LCBnbGl0Y2hEdXJhdGlvbik7XG59XG5cbmZ1bmN0aW9uIGFkZEdsaXRjaEhlYWRsaW5lU3BhbigpIHtcbiAgICBpZiAoalF1ZXJ5KFwiaDFcIikubGVuZ3RoKSB7XG4gICAgICAgIHZhciBoZWFkVGV4dCA9IGpRdWVyeShcImgxXCIpLnRleHQoKTtcbiAgICAgICAgdmFyIHNwbGl0VGV4dCA9IGhlYWRUZXh0LnNwbGl0KFwiXCIpO1xuICAgICAgICB2YXIgdGV4dExlbmd0aCA9IHNwbGl0VGV4dC5sZW5ndGg7XG4gICAgICAgIHZhciB0ZXh0SW5kZXggPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiB0ZXh0TGVuZ3RoKTtcbiAgICAgICAgdmFyIGdsaXRjaENoYXIgPSBzcGxpdFRleHRbdGV4dEluZGV4XS50b0xvd2VyQ2FzZSgpO1xuICAgICAgICB2YXIgZ2xpdGNoQ2hhclNlbGVjdG9yID0gZ2xpdGNoQ2hhcjtcbiAgICAgICAgXG4gICAgICAgIC8vVGhpcyBpc24ndCByZWFsbHkgdXNlZCBhdCB0aGUgbW9tZW50LCBidXQgd2UncmUgbGVhdmluZyBpdCBpbiBqdXN0IGluIGNhc2UgSSBkbyBkZWNpZGUgdG8gdXNlIGl0LiBTZWUgZ2xpdGNoLWdsaXRjaGVzLmxlc3MuXG4gICAgICAgIHN3aXRjaCAoZ2xpdGNoQ2hhcikge1xuICAgICAgICAgICAgY2FzZSBcIiBcIjpcbiAgICAgICAgICAgICAgICBnbGl0Y2hDaGFyU2VsZWN0b3IgPSBcInNwYWNlY2hhclwiO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBcIiZcIjpcbiAgICAgICAgICAgICAgICBnbGl0Y2hDaGFyU2VsZWN0b3IgPSBcImFtcGNoYXJcIjtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCI7XCI6XG4gICAgICAgICAgICAgICAgZ2xpdGNoQ2hhclNlbGVjdG9yID0gXCJzZW1pY29sb25jaGFyXCI7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwiOlwiOlxuICAgICAgICAgICAgICAgIGdsaXRjaENoYXJTZWxlY3RvciA9IFwiY29sb25jaGFyXCI7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwiIVwiOlxuICAgICAgICAgICAgICAgIGdsaXRjaENoYXJTZWxlY3RvciA9IFwiZXhjbGFpbWNoYXJcIjtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCIuXCI6XG4gICAgICAgICAgICAgICAgZ2xpdGNoQ2hhclNlbGVjdG9yID0gXCJwZXJpb2RjaGFyXCI7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdcIic6XG4gICAgICAgICAgICAgICAgZ2xpdGNoQ2hhclNlbGVjdG9yID0gXCJkYmxxdW90ZWNoYXJcIjtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCJcXCdcIjpcbiAgICAgICAgICAgICAgICBnbGl0Y2hDaGFyU2VsZWN0b3IgPSBcInF1b3RlY2hhclwiO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG5cbiAgICAgICAgc3BsaXRUZXh0W3RleHRJbmRleF0gPSAnPHNwYW4gY2xhc3M9XCJnbDF0Y2ggJyArIGdsaXRjaENoYXJTZWxlY3RvciArICdcIj4nICsgc3BsaXRUZXh0W3RleHRJbmRleF0gKyBcIjwvc3Bhbj5cIjtcbiAgICAgICAgdmFyIGZpbmFsVGV4dCA9IHNwbGl0VGV4dC5qb2luKFwiXCIpO1xuXG4gICAgICAgIGpRdWVyeShcImgxXCIpLmh0bWwoZmluYWxUZXh0KTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGdsaXRjaEhlYWRsaW5lKCkge1xuICAgIHZhciBnbGl0Y2hDaGFyT2JqID0galF1ZXJ5KFwiaDEgPiBzcGFuLmdsMXRjaFwiKTtcbiAgICB2YXIgZ2xpdGNoRHVyYXRpb24gPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMDAwKTtcblxuICAgIGdsaXRjaENoYXJPYmouYWRkQ2xhc3MoXCJnbDF0Y2gtLXRleHRcIik7XG4gICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgIGdsaXRjaENoYXJPYmoucmVtb3ZlQ2xhc3MoXCJnbDF0Y2gtLXRleHRcIik7XG4gICAgfSwgZ2xpdGNoRHVyYXRpb24pO1xufVxuXG5mdW5jdGlvbiBnZW5UaW1lcihkdXIpIHtcbiAgICByZXR1cm4gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogZHVyKTtcbn1cblxuLyogTmF2IFRyaWdnZXIgKi9cbmZ1bmN0aW9uIGdsaXRjaF90b2dnbGVOYXYoKSB7XG4gICAgZ2xpdGNoX25hdkFjdGl2ZSA9IGpRdWVyeShcIi5nbGl0Y2hfbmF2QnV0dG9uXCIpLmhhc0NsYXNzKFwiZ2xpdGNoX25hdkJ1dHRvbi0tYWN0aXZlXCIpO1xuXG4gICAgaWYgKGdsaXRjaF9uYXZBY3RpdmUpIHtcbiAgICAgICAgalF1ZXJ5KFwiLmdsaXRjaF9uYXZCdXR0b25cIikucmVtb3ZlQ2xhc3MoXCJnbGl0Y2hfbmF2QnV0dG9uLS1hY3RpdmVcIik7XG4gICAgICAgIGpRdWVyeShcIi5nbGl0Y2hfbmF2Q29udGFpbmVyXCIpLnJlbW92ZUNsYXNzKFwiZ2xpdGNoX25hdkNvbnRhaW5lci0tYWN0aXZlXCIpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGpRdWVyeShcIi5nbGl0Y2hfbmF2QnV0dG9uXCIpLmFkZENsYXNzKFwiZ2xpdGNoX25hdkJ1dHRvbi0tYWN0aXZlXCIpO1xuICAgICAgICBqUXVlcnkoXCIuZ2xpdGNoX25hdkNvbnRhaW5lclwiKS5hZGRDbGFzcyhcImdsaXRjaF9uYXZDb250YWluZXItLWFjdGl2ZVwiKTtcbiAgICB9XG59XG5cbi8qIERhcmsgTW9kZSBUcmlnZ2VyICovXG5mdW5jdGlvbiBkYXJrTW9kZVN3aXRjaCgpIHtcbiAgICBpZiAoalF1ZXJ5KFwiYm9keVwiKS5oYXNDbGFzcyhcImQ0cmttMGQzXCIpKSB7XG4gICAgICAgIGpRdWVyeShcImJvZHlcIikucmVtb3ZlQ2xhc3MoXCJkNHJrbTBkM1wiKTtcbiAgICAgICAgZG9jdW1lbnQuY29va2llID0gXCJkYXJrbW9kZT0wO3BhdGg9L1wiO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGpRdWVyeShcImJvZHlcIikuYWRkQ2xhc3MoXCJkNHJrbTBkM1wiKTtcbiAgICAgICAgZG9jdW1lbnQuY29va2llID0gXCJkYXJrbW9kZT0xO3BhdGg9L1wiO1xuICAgIH1cbn0iXX0=
