(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
jQuery( document ).ready(function() {
    if (jQuery("body").hasClass("home")) { 
        glitchTimer = setInterval(function(){setTimeout(addGlitchHomeArt,genTimer(6000))},2200); 
        glitchRadiusTimer = setInterval(function(){setTimeout(addGlitchRadiusHomeArt,genTimer(4000))},1000);
    }

    addGlitchHeadlineSpan();
    glitchTextTimer = setInterval(function(){setTimeout(glitchHeadline,genTimer(5000))},2000);

    document.getElementById("glitch_toggleNav").addEventListener("click", glitch_toggleNav, false);

    document.getElementById("glitch_toggleDarkMode").addEventListener("click", darkModeSwitch, false);
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
    var headText = jQuery("h1").text();
    var splitText = headText.split("");
    var textLength = splitText.length;
    var textIndex = Math.floor(Math.random() * textLength);
    var glitchChar = splitText[textIndex].toLowerCase();
    var glitchCharSelector = glitchChar;
    
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
        document.cookie = "darkmode=0";
    } else {
        jQuery("body").addClass("d4rkm0d3");
        document.cookie = "darkmode=1";
    }
}
},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJqcy9nbGl0Y2gtZGV2LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24oKXtmdW5jdGlvbiByKGUsbix0KXtmdW5jdGlvbiBvKGksZil7aWYoIW5baV0pe2lmKCFlW2ldKXt2YXIgYz1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlO2lmKCFmJiZjKXJldHVybiBjKGksITApO2lmKHUpcmV0dXJuIHUoaSwhMCk7dmFyIGE9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitpK1wiJ1wiKTt0aHJvdyBhLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsYX12YXIgcD1uW2ldPXtleHBvcnRzOnt9fTtlW2ldWzBdLmNhbGwocC5leHBvcnRzLGZ1bmN0aW9uKHIpe3ZhciBuPWVbaV1bMV1bcl07cmV0dXJuIG8obnx8cil9LHAscC5leHBvcnRzLHIsZSxuLHQpfXJldHVybiBuW2ldLmV4cG9ydHN9Zm9yKHZhciB1PVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmUsaT0wO2k8dC5sZW5ndGg7aSsrKW8odFtpXSk7cmV0dXJuIG99cmV0dXJuIHJ9KSgpIiwialF1ZXJ5KCBkb2N1bWVudCApLnJlYWR5KGZ1bmN0aW9uKCkge1xuICAgIGlmIChqUXVlcnkoXCJib2R5XCIpLmhhc0NsYXNzKFwiaG9tZVwiKSkgeyBcbiAgICAgICAgZ2xpdGNoVGltZXIgPSBzZXRJbnRlcnZhbChmdW5jdGlvbigpe3NldFRpbWVvdXQoYWRkR2xpdGNoSG9tZUFydCxnZW5UaW1lcig2MDAwKSl9LDIyMDApOyBcbiAgICAgICAgZ2xpdGNoUmFkaXVzVGltZXIgPSBzZXRJbnRlcnZhbChmdW5jdGlvbigpe3NldFRpbWVvdXQoYWRkR2xpdGNoUmFkaXVzSG9tZUFydCxnZW5UaW1lcig0MDAwKSl9LDEwMDApO1xuICAgIH1cblxuICAgIGFkZEdsaXRjaEhlYWRsaW5lU3BhbigpO1xuICAgIGdsaXRjaFRleHRUaW1lciA9IHNldEludGVydmFsKGZ1bmN0aW9uKCl7c2V0VGltZW91dChnbGl0Y2hIZWFkbGluZSxnZW5UaW1lcig1MDAwKSl9LDIwMDApO1xuXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJnbGl0Y2hfdG9nZ2xlTmF2XCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBnbGl0Y2hfdG9nZ2xlTmF2LCBmYWxzZSk7XG5cbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImdsaXRjaF90b2dnbGVEYXJrTW9kZVwiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZGFya01vZGVTd2l0Y2gsIGZhbHNlKTtcbn0pO1xuXG5mdW5jdGlvbiBhZGRHbGl0Y2hIb21lQXJ0KCkge1xuICAgIHZhciBwaWxsYXJOdW0gPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAzKSArIDE7XG4gICAgdmFyIHBpbGxhck5hbWUgPSBcIi5nbGl0Y2hfaG9tZUFydFBpbGxhcjpudGgtY2hpbGQoXCIgKyBwaWxsYXJOdW0gKyBcIilcIjtcbiAgICB2YXIgcGlsbGFyID0galF1ZXJ5KHBpbGxhck5hbWUpO1xuICAgIHZhciBnbGl0Y2hEdXJhdGlvbiA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwMDApO1xuICAgIHZhciBnbGl0Y2hTaGFkb3dUeXBlID0gXCJnbDF0Y2gtLXNoYWRvd1wiICsgKE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDQpICsgMSkudG9TdHJpbmcoKTtcblxuICAgIHBpbGxhci5hZGRDbGFzcyhcImdsMXRjaFwiKS5hZGRDbGFzcyhnbGl0Y2hTaGFkb3dUeXBlKTtcbiAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHsgICAgICBcbiAgICAgICAgcGlsbGFyLnJlbW92ZUNsYXNzKFwiZ2wxdGNoXCIpLnJlbW92ZUNsYXNzKGdsaXRjaFNoYWRvd1R5cGUpOyAgICAgICAgIFxuICAgIH0sIGdsaXRjaER1cmF0aW9uKTtcbn1cblxuZnVuY3Rpb24gYWRkR2xpdGNoUmFkaXVzSG9tZUFydCgpIHtcbiAgICB2YXIgcGlsbGFyTnVtID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMykgKyAxO1xuICAgIHZhciBwaWxsYXJOYW1lID0gXCIuZ2xpdGNoX2hvbWVBcnRQaWxsYXI6bnRoLWNoaWxkKFwiICsgcGlsbGFyTnVtICsgXCIpXCI7XG4gICAgdmFyIHBpbGxhciA9IGpRdWVyeShwaWxsYXJOYW1lKTtcbiAgICB2YXIgZ2xpdGNoRHVyYXRpb24gPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAyMDAwKTtcblxuICAgIHBpbGxhci5hZGRDbGFzcyhcImdsMXRjaC0tbm9SYWRpdXNcIik7XG4gICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7ICAgICAgXG4gICAgICAgIHBpbGxhci5yZW1vdmVDbGFzcyhcImdsMXRjaC0tbm9SYWRpdXNcIik7ICAgICAgICAgXG4gICAgfSwgZ2xpdGNoRHVyYXRpb24pO1xufVxuXG5mdW5jdGlvbiBhZGRHbGl0Y2hIZWFkbGluZVNwYW4oKSB7XG4gICAgdmFyIGhlYWRUZXh0ID0galF1ZXJ5KFwiaDFcIikudGV4dCgpO1xuICAgIHZhciBzcGxpdFRleHQgPSBoZWFkVGV4dC5zcGxpdChcIlwiKTtcbiAgICB2YXIgdGV4dExlbmd0aCA9IHNwbGl0VGV4dC5sZW5ndGg7XG4gICAgdmFyIHRleHRJbmRleCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIHRleHRMZW5ndGgpO1xuICAgIHZhciBnbGl0Y2hDaGFyID0gc3BsaXRUZXh0W3RleHRJbmRleF0udG9Mb3dlckNhc2UoKTtcbiAgICB2YXIgZ2xpdGNoQ2hhclNlbGVjdG9yID0gZ2xpdGNoQ2hhcjtcbiAgICBcbiAgICBzd2l0Y2ggKGdsaXRjaENoYXIpIHtcbiAgICAgICAgY2FzZSBcIiBcIjpcbiAgICAgICAgICAgIGdsaXRjaENoYXJTZWxlY3RvciA9IFwic3BhY2VjaGFyXCI7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBcIiZcIjpcbiAgICAgICAgICAgIGdsaXRjaENoYXJTZWxlY3RvciA9IFwiYW1wY2hhclwiO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgXCI7XCI6XG4gICAgICAgICAgICBnbGl0Y2hDaGFyU2VsZWN0b3IgPSBcInNlbWljb2xvbmNoYXJcIjtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIFwiOlwiOlxuICAgICAgICAgICAgZ2xpdGNoQ2hhclNlbGVjdG9yID0gXCJjb2xvbmNoYXJcIjtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIFwiIVwiOlxuICAgICAgICAgICAgZ2xpdGNoQ2hhclNlbGVjdG9yID0gXCJleGNsYWltY2hhclwiO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgXCIuXCI6XG4gICAgICAgICAgICBnbGl0Y2hDaGFyU2VsZWN0b3IgPSBcInBlcmlvZGNoYXJcIjtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdcIic6XG4gICAgICAgICAgICBnbGl0Y2hDaGFyU2VsZWN0b3IgPSBcImRibHF1b3RlY2hhclwiO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgXCJcXCdcIjpcbiAgICAgICAgICAgIGdsaXRjaENoYXJTZWxlY3RvciA9IFwicXVvdGVjaGFyXCI7XG4gICAgICAgICAgICBicmVhaztcbiAgICB9XG5cbiAgICBzcGxpdFRleHRbdGV4dEluZGV4XSA9ICc8c3BhbiBjbGFzcz1cImdsMXRjaCAnICsgZ2xpdGNoQ2hhclNlbGVjdG9yICsgJ1wiPicgKyBzcGxpdFRleHRbdGV4dEluZGV4XSArIFwiPC9zcGFuPlwiO1xuICAgIHZhciBmaW5hbFRleHQgPSBzcGxpdFRleHQuam9pbihcIlwiKTtcblxuICAgIGpRdWVyeShcImgxXCIpLmh0bWwoZmluYWxUZXh0KTtcbn1cblxuZnVuY3Rpb24gZ2xpdGNoSGVhZGxpbmUoKSB7XG4gICAgdmFyIGdsaXRjaENoYXJPYmogPSBqUXVlcnkoXCJoMSA+IHNwYW4uZ2wxdGNoXCIpO1xuICAgIHZhciBnbGl0Y2hEdXJhdGlvbiA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwMDApO1xuXG4gICAgZ2xpdGNoQ2hhck9iai5hZGRDbGFzcyhcImdsMXRjaC0tdGV4dFwiKTtcbiAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgZ2xpdGNoQ2hhck9iai5yZW1vdmVDbGFzcyhcImdsMXRjaC0tdGV4dFwiKTtcbiAgICB9LCBnbGl0Y2hEdXJhdGlvbik7XG59XG5cbmZ1bmN0aW9uIGdlblRpbWVyKGR1cikge1xuICAgIHJldHVybiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBkdXIpO1xufVxuXG4vKiBOYXYgVHJpZ2dlciAqL1xuZnVuY3Rpb24gZ2xpdGNoX3RvZ2dsZU5hdigpIHtcbiAgICBnbGl0Y2hfbmF2QWN0aXZlID0galF1ZXJ5KFwiLmdsaXRjaF9uYXZCdXR0b25cIikuaGFzQ2xhc3MoXCJnbGl0Y2hfbmF2QnV0dG9uLS1hY3RpdmVcIik7XG5cbiAgICBpZiAoZ2xpdGNoX25hdkFjdGl2ZSkge1xuICAgICAgICBqUXVlcnkoXCIuZ2xpdGNoX25hdkJ1dHRvblwiKS5yZW1vdmVDbGFzcyhcImdsaXRjaF9uYXZCdXR0b24tLWFjdGl2ZVwiKTtcbiAgICAgICAgalF1ZXJ5KFwiLmdsaXRjaF9uYXZDb250YWluZXJcIikucmVtb3ZlQ2xhc3MoXCJnbGl0Y2hfbmF2Q29udGFpbmVyLS1hY3RpdmVcIik7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgalF1ZXJ5KFwiLmdsaXRjaF9uYXZCdXR0b25cIikuYWRkQ2xhc3MoXCJnbGl0Y2hfbmF2QnV0dG9uLS1hY3RpdmVcIik7XG4gICAgICAgIGpRdWVyeShcIi5nbGl0Y2hfbmF2Q29udGFpbmVyXCIpLmFkZENsYXNzKFwiZ2xpdGNoX25hdkNvbnRhaW5lci0tYWN0aXZlXCIpO1xuICAgIH1cbn1cblxuLyogRGFyayBNb2RlIFRyaWdnZXIgKi9cbmZ1bmN0aW9uIGRhcmtNb2RlU3dpdGNoKCkge1xuICAgIGlmIChqUXVlcnkoXCJib2R5XCIpLmhhc0NsYXNzKFwiZDRya20wZDNcIikpIHtcbiAgICAgICAgalF1ZXJ5KFwiYm9keVwiKS5yZW1vdmVDbGFzcyhcImQ0cmttMGQzXCIpO1xuICAgICAgICBkb2N1bWVudC5jb29raWUgPSBcImRhcmttb2RlPTBcIjtcbiAgICB9IGVsc2Uge1xuICAgICAgICBqUXVlcnkoXCJib2R5XCIpLmFkZENsYXNzKFwiZDRya20wZDNcIik7XG4gICAgICAgIGRvY3VtZW50LmNvb2tpZSA9IFwiZGFya21vZGU9MVwiO1xuICAgIH1cbn0iXX0=
