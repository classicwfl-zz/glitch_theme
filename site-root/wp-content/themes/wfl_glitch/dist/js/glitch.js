(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
jQuery( document ).ready(function() {
    if (jQuery("body").hasClass("home")) { 
        glitchTimer = setInterval(function(){setTimeout(addGlitchHomeArt,genTimer(6000))},2200); 
        glitchRadiusTimer = setInterval(function(){setTimeout(addGlitchRadiusHomeArt,genTimer(4000))},1000);
    }

    
    if (!jQuery("body").hasClass("page-template-web-art-template-page")) {
        // addGlitchHeadlineSpan(); //This is for glitching headlines; disabling just because it's not ready yet.
        //glitchTextTimer = setInterval(function(){setTimeout(glitchHeadline,genTimer(5000))},2000);

        document.getElementById("glitch_toggleDarkMode").addEventListener("click", darkModeSwitch, false);
    }
    
    
    

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJqcy9nbGl0Y2gtZGV2LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbigpe2Z1bmN0aW9uIHIoZSxuLHQpe2Z1bmN0aW9uIG8oaSxmKXtpZighbltpXSl7aWYoIWVbaV0pe3ZhciBjPVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmU7aWYoIWYmJmMpcmV0dXJuIGMoaSwhMCk7aWYodSlyZXR1cm4gdShpLCEwKTt2YXIgYT1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK2krXCInXCIpO3Rocm93IGEuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixhfXZhciBwPW5baV09e2V4cG9ydHM6e319O2VbaV1bMF0uY2FsbChwLmV4cG9ydHMsZnVuY3Rpb24ocil7dmFyIG49ZVtpXVsxXVtyXTtyZXR1cm4gbyhufHxyKX0scCxwLmV4cG9ydHMscixlLG4sdCl9cmV0dXJuIG5baV0uZXhwb3J0c31mb3IodmFyIHU9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZSxpPTA7aTx0Lmxlbmd0aDtpKyspbyh0W2ldKTtyZXR1cm4gb31yZXR1cm4gcn0pKCkiLCJqUXVlcnkoIGRvY3VtZW50ICkucmVhZHkoZnVuY3Rpb24oKSB7XG4gICAgaWYgKGpRdWVyeShcImJvZHlcIikuaGFzQ2xhc3MoXCJob21lXCIpKSB7IFxuICAgICAgICBnbGl0Y2hUaW1lciA9IHNldEludGVydmFsKGZ1bmN0aW9uKCl7c2V0VGltZW91dChhZGRHbGl0Y2hIb21lQXJ0LGdlblRpbWVyKDYwMDApKX0sMjIwMCk7IFxuICAgICAgICBnbGl0Y2hSYWRpdXNUaW1lciA9IHNldEludGVydmFsKGZ1bmN0aW9uKCl7c2V0VGltZW91dChhZGRHbGl0Y2hSYWRpdXNIb21lQXJ0LGdlblRpbWVyKDQwMDApKX0sMTAwMCk7XG4gICAgfVxuXG4gICAgXG4gICAgaWYgKCFqUXVlcnkoXCJib2R5XCIpLmhhc0NsYXNzKFwicGFnZS10ZW1wbGF0ZS13ZWItYXJ0LXRlbXBsYXRlLXBhZ2VcIikpIHtcbiAgICAgICAgLy8gYWRkR2xpdGNoSGVhZGxpbmVTcGFuKCk7IC8vVGhpcyBpcyBmb3IgZ2xpdGNoaW5nIGhlYWRsaW5lczsgZGlzYWJsaW5nIGp1c3QgYmVjYXVzZSBpdCdzIG5vdCByZWFkeSB5ZXQuXG4gICAgICAgIC8vZ2xpdGNoVGV4dFRpbWVyID0gc2V0SW50ZXJ2YWwoZnVuY3Rpb24oKXtzZXRUaW1lb3V0KGdsaXRjaEhlYWRsaW5lLGdlblRpbWVyKDUwMDApKX0sMjAwMCk7XG5cbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJnbGl0Y2hfdG9nZ2xlRGFya01vZGVcIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGRhcmtNb2RlU3dpdGNoLCBmYWxzZSk7XG4gICAgfVxuICAgIFxuICAgIFxuICAgIFxuXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJnbGl0Y2hfdG9nZ2xlTmF2XCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBnbGl0Y2hfdG9nZ2xlTmF2LCBmYWxzZSk7XG5cbn0pO1xuXG5mdW5jdGlvbiBhZGRHbGl0Y2hIb21lQXJ0KCkge1xuICAgIHZhciBwaWxsYXJOdW0gPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAzKSArIDE7XG4gICAgdmFyIHBpbGxhck5hbWUgPSBcIi5nbGl0Y2hfaG9tZUFydFBpbGxhcjpudGgtY2hpbGQoXCIgKyBwaWxsYXJOdW0gKyBcIilcIjtcbiAgICB2YXIgcGlsbGFyID0galF1ZXJ5KHBpbGxhck5hbWUpO1xuICAgIHZhciBnbGl0Y2hEdXJhdGlvbiA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwMDApO1xuICAgIHZhciBnbGl0Y2hTaGFkb3dUeXBlID0gXCJnbDF0Y2gtLXNoYWRvd1wiICsgKE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDQpICsgMSkudG9TdHJpbmcoKTtcblxuICAgIHBpbGxhci5hZGRDbGFzcyhcImdsMXRjaFwiKS5hZGRDbGFzcyhnbGl0Y2hTaGFkb3dUeXBlKTtcbiAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHsgICAgICBcbiAgICAgICAgcGlsbGFyLnJlbW92ZUNsYXNzKFwiZ2wxdGNoXCIpLnJlbW92ZUNsYXNzKGdsaXRjaFNoYWRvd1R5cGUpOyAgICAgICAgIFxuICAgIH0sIGdsaXRjaER1cmF0aW9uKTtcbn1cblxuZnVuY3Rpb24gYWRkR2xpdGNoUmFkaXVzSG9tZUFydCgpIHtcbiAgICB2YXIgcGlsbGFyTnVtID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMykgKyAxO1xuICAgIHZhciBwaWxsYXJOYW1lID0gXCIuZ2xpdGNoX2hvbWVBcnRQaWxsYXI6bnRoLWNoaWxkKFwiICsgcGlsbGFyTnVtICsgXCIpXCI7XG4gICAgdmFyIHBpbGxhciA9IGpRdWVyeShwaWxsYXJOYW1lKTtcbiAgICB2YXIgZ2xpdGNoRHVyYXRpb24gPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAyMDAwKTtcblxuICAgIHBpbGxhci5hZGRDbGFzcyhcImdsMXRjaC0tbm9SYWRpdXNcIik7XG4gICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7ICAgICAgXG4gICAgICAgIHBpbGxhci5yZW1vdmVDbGFzcyhcImdsMXRjaC0tbm9SYWRpdXNcIik7ICAgICAgICAgXG4gICAgfSwgZ2xpdGNoRHVyYXRpb24pO1xufVxuXG5mdW5jdGlvbiBhZGRHbGl0Y2hIZWFkbGluZVNwYW4oKSB7XG4gICAgaWYgKGpRdWVyeShcImgxXCIpLmxlbmd0aCkge1xuICAgICAgICB2YXIgaGVhZFRleHQgPSBqUXVlcnkoXCJoMVwiKS50ZXh0KCk7XG4gICAgICAgIHZhciBzcGxpdFRleHQgPSBoZWFkVGV4dC5zcGxpdChcIlwiKTtcbiAgICAgICAgdmFyIHRleHRMZW5ndGggPSBzcGxpdFRleHQubGVuZ3RoO1xuICAgICAgICB2YXIgdGV4dEluZGV4ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogdGV4dExlbmd0aCk7XG4gICAgICAgIHZhciBnbGl0Y2hDaGFyID0gc3BsaXRUZXh0W3RleHRJbmRleF0udG9Mb3dlckNhc2UoKTtcbiAgICAgICAgdmFyIGdsaXRjaENoYXJTZWxlY3RvciA9IGdsaXRjaENoYXI7XG4gICAgICAgIFxuICAgICAgICAvL1RoaXMgaXNuJ3QgcmVhbGx5IHVzZWQgYXQgdGhlIG1vbWVudCwgYnV0IHdlJ3JlIGxlYXZpbmcgaXQgaW4ganVzdCBpbiBjYXNlIEkgZG8gZGVjaWRlIHRvIHVzZSBpdC4gU2VlIGdsaXRjaC1nbGl0Y2hlcy5sZXNzLlxuICAgICAgICBzd2l0Y2ggKGdsaXRjaENoYXIpIHtcbiAgICAgICAgICAgIGNhc2UgXCIgXCI6XG4gICAgICAgICAgICAgICAgZ2xpdGNoQ2hhclNlbGVjdG9yID0gXCJzcGFjZWNoYXJcIjtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCImXCI6XG4gICAgICAgICAgICAgICAgZ2xpdGNoQ2hhclNlbGVjdG9yID0gXCJhbXBjaGFyXCI7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwiO1wiOlxuICAgICAgICAgICAgICAgIGdsaXRjaENoYXJTZWxlY3RvciA9IFwic2VtaWNvbG9uY2hhclwiO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBcIjpcIjpcbiAgICAgICAgICAgICAgICBnbGl0Y2hDaGFyU2VsZWN0b3IgPSBcImNvbG9uY2hhclwiO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBcIiFcIjpcbiAgICAgICAgICAgICAgICBnbGl0Y2hDaGFyU2VsZWN0b3IgPSBcImV4Y2xhaW1jaGFyXCI7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwiLlwiOlxuICAgICAgICAgICAgICAgIGdsaXRjaENoYXJTZWxlY3RvciA9IFwicGVyaW9kY2hhclwiO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnXCInOlxuICAgICAgICAgICAgICAgIGdsaXRjaENoYXJTZWxlY3RvciA9IFwiZGJscXVvdGVjaGFyXCI7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwiXFwnXCI6XG4gICAgICAgICAgICAgICAgZ2xpdGNoQ2hhclNlbGVjdG9yID0gXCJxdW90ZWNoYXJcIjtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuXG4gICAgICAgIHNwbGl0VGV4dFt0ZXh0SW5kZXhdID0gJzxzcGFuIGNsYXNzPVwiZ2wxdGNoICcgKyBnbGl0Y2hDaGFyU2VsZWN0b3IgKyAnXCI+JyArIHNwbGl0VGV4dFt0ZXh0SW5kZXhdICsgXCI8L3NwYW4+XCI7XG4gICAgICAgIHZhciBmaW5hbFRleHQgPSBzcGxpdFRleHQuam9pbihcIlwiKTtcblxuICAgICAgICBqUXVlcnkoXCJoMVwiKS5odG1sKGZpbmFsVGV4dCk7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBnbGl0Y2hIZWFkbGluZSgpIHtcbiAgICB2YXIgZ2xpdGNoQ2hhck9iaiA9IGpRdWVyeShcImgxID4gc3Bhbi5nbDF0Y2hcIik7XG4gICAgdmFyIGdsaXRjaER1cmF0aW9uID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTAwMCk7XG5cbiAgICBnbGl0Y2hDaGFyT2JqLmFkZENsYXNzKFwiZ2wxdGNoLS10ZXh0XCIpO1xuICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICBnbGl0Y2hDaGFyT2JqLnJlbW92ZUNsYXNzKFwiZ2wxdGNoLS10ZXh0XCIpO1xuICAgIH0sIGdsaXRjaER1cmF0aW9uKTtcbn1cblxuZnVuY3Rpb24gZ2VuVGltZXIoZHVyKSB7XG4gICAgcmV0dXJuIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIGR1cik7XG59XG5cbi8qIE5hdiBUcmlnZ2VyICovXG5mdW5jdGlvbiBnbGl0Y2hfdG9nZ2xlTmF2KCkge1xuICAgIGdsaXRjaF9uYXZBY3RpdmUgPSBqUXVlcnkoXCIuZ2xpdGNoX25hdkJ1dHRvblwiKS5oYXNDbGFzcyhcImdsaXRjaF9uYXZCdXR0b24tLWFjdGl2ZVwiKTtcblxuICAgIGlmIChnbGl0Y2hfbmF2QWN0aXZlKSB7XG4gICAgICAgIGpRdWVyeShcIi5nbGl0Y2hfbmF2QnV0dG9uXCIpLnJlbW92ZUNsYXNzKFwiZ2xpdGNoX25hdkJ1dHRvbi0tYWN0aXZlXCIpO1xuICAgICAgICBqUXVlcnkoXCIuZ2xpdGNoX25hdkNvbnRhaW5lclwiKS5yZW1vdmVDbGFzcyhcImdsaXRjaF9uYXZDb250YWluZXItLWFjdGl2ZVwiKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBqUXVlcnkoXCIuZ2xpdGNoX25hdkJ1dHRvblwiKS5hZGRDbGFzcyhcImdsaXRjaF9uYXZCdXR0b24tLWFjdGl2ZVwiKTtcbiAgICAgICAgalF1ZXJ5KFwiLmdsaXRjaF9uYXZDb250YWluZXJcIikuYWRkQ2xhc3MoXCJnbGl0Y2hfbmF2Q29udGFpbmVyLS1hY3RpdmVcIik7XG4gICAgfVxufVxuXG4vKiBEYXJrIE1vZGUgVHJpZ2dlciAqL1xuZnVuY3Rpb24gZGFya01vZGVTd2l0Y2goKSB7XG4gICAgaWYgKGpRdWVyeShcImJvZHlcIikuaGFzQ2xhc3MoXCJkNHJrbTBkM1wiKSkge1xuICAgICAgICBqUXVlcnkoXCJib2R5XCIpLnJlbW92ZUNsYXNzKFwiZDRya20wZDNcIik7XG4gICAgICAgIGRvY3VtZW50LmNvb2tpZSA9IFwiZGFya21vZGU9MDtwYXRoPS9cIjtcbiAgICB9IGVsc2Uge1xuICAgICAgICBqUXVlcnkoXCJib2R5XCIpLmFkZENsYXNzKFwiZDRya20wZDNcIik7XG4gICAgICAgIGRvY3VtZW50LmNvb2tpZSA9IFwiZGFya21vZGU9MTtwYXRoPS9cIjtcbiAgICB9XG59Il19
