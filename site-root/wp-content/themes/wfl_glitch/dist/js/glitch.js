(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
jQuery( document ).ready(function() {
    if (jQuery("body").hasClass("home")) { 
        glitchTimer = setInterval(function(){setTimeout(addGlitchHomeArt,genTimer(6000))},2200); 
        glitchRadiusTimer = setInterval(function(){setTimeout(addGlitchRadiusHomeArt,genTimer(4000))},1000);
    }

    addGlitchHeadlineSpan();
    glitchTextTimer = setInterval(function(){setTimeout(glitchHeadline,genTimer(5000))},2000);

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
    var headText = jQuery("h1").text();
    var splitText = headText.split("");
    var textLength = splitText.length;
    var textIndex = Math.floor(Math.random() * textLength);
    var glitchChar = splitText[textIndex].toLowerCase();
    console.log(glitchChar);
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

    console.log(glitchCharSelector);

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
    } else {
        jQuery(".glitch_navButton").addClass("glitch_navButton--active");
    }
}
},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJqcy9nbGl0Y2gtZGV2LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uKCl7ZnVuY3Rpb24gcihlLG4sdCl7ZnVuY3Rpb24gbyhpLGYpe2lmKCFuW2ldKXtpZighZVtpXSl7dmFyIGM9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZTtpZighZiYmYylyZXR1cm4gYyhpLCEwKTtpZih1KXJldHVybiB1KGksITApO3ZhciBhPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIraStcIidcIik7dGhyb3cgYS5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGF9dmFyIHA9bltpXT17ZXhwb3J0czp7fX07ZVtpXVswXS5jYWxsKHAuZXhwb3J0cyxmdW5jdGlvbihyKXt2YXIgbj1lW2ldWzFdW3JdO3JldHVybiBvKG58fHIpfSxwLHAuZXhwb3J0cyxyLGUsbix0KX1yZXR1cm4gbltpXS5leHBvcnRzfWZvcih2YXIgdT1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlLGk9MDtpPHQubGVuZ3RoO2krKylvKHRbaV0pO3JldHVybiBvfXJldHVybiByfSkoKSIsImpRdWVyeSggZG9jdW1lbnQgKS5yZWFkeShmdW5jdGlvbigpIHtcbiAgICBpZiAoalF1ZXJ5KFwiYm9keVwiKS5oYXNDbGFzcyhcImhvbWVcIikpIHsgXG4gICAgICAgIGdsaXRjaFRpbWVyID0gc2V0SW50ZXJ2YWwoZnVuY3Rpb24oKXtzZXRUaW1lb3V0KGFkZEdsaXRjaEhvbWVBcnQsZ2VuVGltZXIoNjAwMCkpfSwyMjAwKTsgXG4gICAgICAgIGdsaXRjaFJhZGl1c1RpbWVyID0gc2V0SW50ZXJ2YWwoZnVuY3Rpb24oKXtzZXRUaW1lb3V0KGFkZEdsaXRjaFJhZGl1c0hvbWVBcnQsZ2VuVGltZXIoNDAwMCkpfSwxMDAwKTtcbiAgICB9XG5cbiAgICBhZGRHbGl0Y2hIZWFkbGluZVNwYW4oKTtcbiAgICBnbGl0Y2hUZXh0VGltZXIgPSBzZXRJbnRlcnZhbChmdW5jdGlvbigpe3NldFRpbWVvdXQoZ2xpdGNoSGVhZGxpbmUsZ2VuVGltZXIoNTAwMCkpfSwyMDAwKTtcblxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZ2xpdGNoX3RvZ2dsZU5hdlwiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZ2xpdGNoX3RvZ2dsZU5hdiwgZmFsc2UpO1xufSk7XG5cbmZ1bmN0aW9uIGFkZEdsaXRjaEhvbWVBcnQoKSB7XG4gICAgdmFyIHBpbGxhck51bSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDMpICsgMTtcbiAgICB2YXIgcGlsbGFyTmFtZSA9IFwiLmdsaXRjaF9ob21lQXJ0UGlsbGFyOm50aC1jaGlsZChcIiArIHBpbGxhck51bSArIFwiKVwiO1xuICAgIHZhciBwaWxsYXIgPSBqUXVlcnkocGlsbGFyTmFtZSk7XG4gICAgdmFyIGdsaXRjaER1cmF0aW9uID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTAwMCk7XG4gICAgdmFyIGdsaXRjaFNoYWRvd1R5cGUgPSBcImdsMXRjaC0tc2hhZG93XCIgKyAoTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogNCkgKyAxKS50b1N0cmluZygpO1xuXG4gICAgcGlsbGFyLmFkZENsYXNzKFwiZ2wxdGNoXCIpLmFkZENsYXNzKGdsaXRjaFNoYWRvd1R5cGUpO1xuICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkgeyAgICAgIFxuICAgICAgICBwaWxsYXIucmVtb3ZlQ2xhc3MoXCJnbDF0Y2hcIikucmVtb3ZlQ2xhc3MoZ2xpdGNoU2hhZG93VHlwZSk7ICAgICAgICAgXG4gICAgfSwgZ2xpdGNoRHVyYXRpb24pO1xufVxuXG5mdW5jdGlvbiBhZGRHbGl0Y2hSYWRpdXNIb21lQXJ0KCkge1xuICAgIHZhciBwaWxsYXJOdW0gPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAzKSArIDE7XG4gICAgdmFyIHBpbGxhck5hbWUgPSBcIi5nbGl0Y2hfaG9tZUFydFBpbGxhcjpudGgtY2hpbGQoXCIgKyBwaWxsYXJOdW0gKyBcIilcIjtcbiAgICB2YXIgcGlsbGFyID0galF1ZXJ5KHBpbGxhck5hbWUpO1xuICAgIHZhciBnbGl0Y2hEdXJhdGlvbiA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDIwMDApO1xuXG4gICAgcGlsbGFyLmFkZENsYXNzKFwiZ2wxdGNoLS1ub1JhZGl1c1wiKTtcbiAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHsgICAgICBcbiAgICAgICAgcGlsbGFyLnJlbW92ZUNsYXNzKFwiZ2wxdGNoLS1ub1JhZGl1c1wiKTsgICAgICAgICBcbiAgICB9LCBnbGl0Y2hEdXJhdGlvbik7XG59XG5cbmZ1bmN0aW9uIGFkZEdsaXRjaEhlYWRsaW5lU3BhbigpIHtcbiAgICB2YXIgaGVhZFRleHQgPSBqUXVlcnkoXCJoMVwiKS50ZXh0KCk7XG4gICAgdmFyIHNwbGl0VGV4dCA9IGhlYWRUZXh0LnNwbGl0KFwiXCIpO1xuICAgIHZhciB0ZXh0TGVuZ3RoID0gc3BsaXRUZXh0Lmxlbmd0aDtcbiAgICB2YXIgdGV4dEluZGV4ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogdGV4dExlbmd0aCk7XG4gICAgdmFyIGdsaXRjaENoYXIgPSBzcGxpdFRleHRbdGV4dEluZGV4XS50b0xvd2VyQ2FzZSgpO1xuICAgIGNvbnNvbGUubG9nKGdsaXRjaENoYXIpO1xuICAgIHZhciBnbGl0Y2hDaGFyU2VsZWN0b3IgPSBnbGl0Y2hDaGFyO1xuICAgIFxuICAgIHN3aXRjaCAoZ2xpdGNoQ2hhcikge1xuICAgICAgICBjYXNlIFwiIFwiOlxuICAgICAgICAgICAgZ2xpdGNoQ2hhclNlbGVjdG9yID0gXCJzcGFjZWNoYXJcIjtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIFwiJlwiOlxuICAgICAgICAgICAgZ2xpdGNoQ2hhclNlbGVjdG9yID0gXCJhbXBjaGFyXCI7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBcIjtcIjpcbiAgICAgICAgICAgIGdsaXRjaENoYXJTZWxlY3RvciA9IFwic2VtaWNvbG9uY2hhclwiO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgXCI6XCI6XG4gICAgICAgICAgICBnbGl0Y2hDaGFyU2VsZWN0b3IgPSBcImNvbG9uY2hhclwiO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgXCIhXCI6XG4gICAgICAgICAgICBnbGl0Y2hDaGFyU2VsZWN0b3IgPSBcImV4Y2xhaW1jaGFyXCI7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBcIi5cIjpcbiAgICAgICAgICAgIGdsaXRjaENoYXJTZWxlY3RvciA9IFwicGVyaW9kY2hhclwiO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ1wiJzpcbiAgICAgICAgICAgIGdsaXRjaENoYXJTZWxlY3RvciA9IFwiZGJscXVvdGVjaGFyXCI7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBcIlxcJ1wiOlxuICAgICAgICAgICAgZ2xpdGNoQ2hhclNlbGVjdG9yID0gXCJxdW90ZWNoYXJcIjtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgIH1cblxuICAgIGNvbnNvbGUubG9nKGdsaXRjaENoYXJTZWxlY3Rvcik7XG5cbiAgICBzcGxpdFRleHRbdGV4dEluZGV4XSA9ICc8c3BhbiBjbGFzcz1cImdsMXRjaCAnICsgZ2xpdGNoQ2hhclNlbGVjdG9yICsgJ1wiPicgKyBzcGxpdFRleHRbdGV4dEluZGV4XSArIFwiPC9zcGFuPlwiO1xuICAgIHZhciBmaW5hbFRleHQgPSBzcGxpdFRleHQuam9pbihcIlwiKTtcblxuICAgIGpRdWVyeShcImgxXCIpLmh0bWwoZmluYWxUZXh0KTtcbn1cblxuZnVuY3Rpb24gZ2xpdGNoSGVhZGxpbmUoKSB7XG4gICAgdmFyIGdsaXRjaENoYXJPYmogPSBqUXVlcnkoXCJoMSA+IHNwYW4uZ2wxdGNoXCIpO1xuICAgIHZhciBnbGl0Y2hEdXJhdGlvbiA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwMDApO1xuXG4gICAgZ2xpdGNoQ2hhck9iai5hZGRDbGFzcyhcImdsMXRjaC0tdGV4dFwiKTtcbiAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgZ2xpdGNoQ2hhck9iai5yZW1vdmVDbGFzcyhcImdsMXRjaC0tdGV4dFwiKTtcbiAgICB9LCBnbGl0Y2hEdXJhdGlvbik7XG59XG5cbmZ1bmN0aW9uIGdlblRpbWVyKGR1cikge1xuICAgIHJldHVybiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBkdXIpO1xufVxuXG4vKiBOYXYgVHJpZ2dlciAqL1xuXG5cbmZ1bmN0aW9uIGdsaXRjaF90b2dnbGVOYXYoKSB7XG4gICAgZ2xpdGNoX25hdkFjdGl2ZSA9IGpRdWVyeShcIi5nbGl0Y2hfbmF2QnV0dG9uXCIpLmhhc0NsYXNzKFwiZ2xpdGNoX25hdkJ1dHRvbi0tYWN0aXZlXCIpO1xuXG4gICAgaWYgKGdsaXRjaF9uYXZBY3RpdmUpIHtcbiAgICAgICAgalF1ZXJ5KFwiLmdsaXRjaF9uYXZCdXR0b25cIikucmVtb3ZlQ2xhc3MoXCJnbGl0Y2hfbmF2QnV0dG9uLS1hY3RpdmVcIik7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgalF1ZXJ5KFwiLmdsaXRjaF9uYXZCdXR0b25cIikuYWRkQ2xhc3MoXCJnbGl0Y2hfbmF2QnV0dG9uLS1hY3RpdmVcIik7XG4gICAgfVxufSJdfQ==
