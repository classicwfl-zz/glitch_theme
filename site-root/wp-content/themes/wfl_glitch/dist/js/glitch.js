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
    if (jQuery("h1").length) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJqcy9nbGl0Y2gtZGV2LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uKCl7ZnVuY3Rpb24gcihlLG4sdCl7ZnVuY3Rpb24gbyhpLGYpe2lmKCFuW2ldKXtpZighZVtpXSl7dmFyIGM9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZTtpZighZiYmYylyZXR1cm4gYyhpLCEwKTtpZih1KXJldHVybiB1KGksITApO3ZhciBhPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIraStcIidcIik7dGhyb3cgYS5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGF9dmFyIHA9bltpXT17ZXhwb3J0czp7fX07ZVtpXVswXS5jYWxsKHAuZXhwb3J0cyxmdW5jdGlvbihyKXt2YXIgbj1lW2ldWzFdW3JdO3JldHVybiBvKG58fHIpfSxwLHAuZXhwb3J0cyxyLGUsbix0KX1yZXR1cm4gbltpXS5leHBvcnRzfWZvcih2YXIgdT1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlLGk9MDtpPHQubGVuZ3RoO2krKylvKHRbaV0pO3JldHVybiBvfXJldHVybiByfSkoKSIsImpRdWVyeSggZG9jdW1lbnQgKS5yZWFkeShmdW5jdGlvbigpIHtcbiAgICBpZiAoalF1ZXJ5KFwiYm9keVwiKS5oYXNDbGFzcyhcImhvbWVcIikpIHsgXG4gICAgICAgIGdsaXRjaFRpbWVyID0gc2V0SW50ZXJ2YWwoZnVuY3Rpb24oKXtzZXRUaW1lb3V0KGFkZEdsaXRjaEhvbWVBcnQsZ2VuVGltZXIoNjAwMCkpfSwyMjAwKTsgXG4gICAgICAgIGdsaXRjaFJhZGl1c1RpbWVyID0gc2V0SW50ZXJ2YWwoZnVuY3Rpb24oKXtzZXRUaW1lb3V0KGFkZEdsaXRjaFJhZGl1c0hvbWVBcnQsZ2VuVGltZXIoNDAwMCkpfSwxMDAwKTtcbiAgICB9XG5cbiAgICBhZGRHbGl0Y2hIZWFkbGluZVNwYW4oKTtcbiAgICBnbGl0Y2hUZXh0VGltZXIgPSBzZXRJbnRlcnZhbChmdW5jdGlvbigpe3NldFRpbWVvdXQoZ2xpdGNoSGVhZGxpbmUsZ2VuVGltZXIoNTAwMCkpfSwyMDAwKTtcblxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZ2xpdGNoX3RvZ2dsZU5hdlwiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZ2xpdGNoX3RvZ2dsZU5hdiwgZmFsc2UpO1xuXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJnbGl0Y2hfdG9nZ2xlRGFya01vZGVcIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGRhcmtNb2RlU3dpdGNoLCBmYWxzZSk7XG59KTtcblxuZnVuY3Rpb24gYWRkR2xpdGNoSG9tZUFydCgpIHtcbiAgICB2YXIgcGlsbGFyTnVtID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMykgKyAxO1xuICAgIHZhciBwaWxsYXJOYW1lID0gXCIuZ2xpdGNoX2hvbWVBcnRQaWxsYXI6bnRoLWNoaWxkKFwiICsgcGlsbGFyTnVtICsgXCIpXCI7XG4gICAgdmFyIHBpbGxhciA9IGpRdWVyeShwaWxsYXJOYW1lKTtcbiAgICB2YXIgZ2xpdGNoRHVyYXRpb24gPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMDAwKTtcbiAgICB2YXIgZ2xpdGNoU2hhZG93VHlwZSA9IFwiZ2wxdGNoLS1zaGFkb3dcIiArIChNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiA0KSArIDEpLnRvU3RyaW5nKCk7XG5cbiAgICBwaWxsYXIuYWRkQ2xhc3MoXCJnbDF0Y2hcIikuYWRkQ2xhc3MoZ2xpdGNoU2hhZG93VHlwZSk7XG4gICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7ICAgICAgXG4gICAgICAgIHBpbGxhci5yZW1vdmVDbGFzcyhcImdsMXRjaFwiKS5yZW1vdmVDbGFzcyhnbGl0Y2hTaGFkb3dUeXBlKTsgICAgICAgICBcbiAgICB9LCBnbGl0Y2hEdXJhdGlvbik7XG59XG5cbmZ1bmN0aW9uIGFkZEdsaXRjaFJhZGl1c0hvbWVBcnQoKSB7XG4gICAgdmFyIHBpbGxhck51bSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDMpICsgMTtcbiAgICB2YXIgcGlsbGFyTmFtZSA9IFwiLmdsaXRjaF9ob21lQXJ0UGlsbGFyOm50aC1jaGlsZChcIiArIHBpbGxhck51bSArIFwiKVwiO1xuICAgIHZhciBwaWxsYXIgPSBqUXVlcnkocGlsbGFyTmFtZSk7XG4gICAgdmFyIGdsaXRjaER1cmF0aW9uID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMjAwMCk7XG5cbiAgICBwaWxsYXIuYWRkQ2xhc3MoXCJnbDF0Y2gtLW5vUmFkaXVzXCIpO1xuICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkgeyAgICAgIFxuICAgICAgICBwaWxsYXIucmVtb3ZlQ2xhc3MoXCJnbDF0Y2gtLW5vUmFkaXVzXCIpOyAgICAgICAgIFxuICAgIH0sIGdsaXRjaER1cmF0aW9uKTtcbn1cblxuZnVuY3Rpb24gYWRkR2xpdGNoSGVhZGxpbmVTcGFuKCkge1xuICAgIGlmIChqUXVlcnkoXCJoMVwiKS5sZW5ndGgpIHtcbiAgICAgICAgdmFyIGhlYWRUZXh0ID0galF1ZXJ5KFwiaDFcIikudGV4dCgpO1xuICAgICAgICB2YXIgc3BsaXRUZXh0ID0gaGVhZFRleHQuc3BsaXQoXCJcIik7XG4gICAgICAgIHZhciB0ZXh0TGVuZ3RoID0gc3BsaXRUZXh0Lmxlbmd0aDtcbiAgICAgICAgdmFyIHRleHRJbmRleCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIHRleHRMZW5ndGgpO1xuICAgICAgICB2YXIgZ2xpdGNoQ2hhciA9IHNwbGl0VGV4dFt0ZXh0SW5kZXhdLnRvTG93ZXJDYXNlKCk7XG4gICAgICAgIHZhciBnbGl0Y2hDaGFyU2VsZWN0b3IgPSBnbGl0Y2hDaGFyO1xuICAgICAgICBcbiAgICAgICAgc3dpdGNoIChnbGl0Y2hDaGFyKSB7XG4gICAgICAgICAgICBjYXNlIFwiIFwiOlxuICAgICAgICAgICAgICAgIGdsaXRjaENoYXJTZWxlY3RvciA9IFwic3BhY2VjaGFyXCI7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwiJlwiOlxuICAgICAgICAgICAgICAgIGdsaXRjaENoYXJTZWxlY3RvciA9IFwiYW1wY2hhclwiO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBcIjtcIjpcbiAgICAgICAgICAgICAgICBnbGl0Y2hDaGFyU2VsZWN0b3IgPSBcInNlbWljb2xvbmNoYXJcIjtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCI6XCI6XG4gICAgICAgICAgICAgICAgZ2xpdGNoQ2hhclNlbGVjdG9yID0gXCJjb2xvbmNoYXJcIjtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCIhXCI6XG4gICAgICAgICAgICAgICAgZ2xpdGNoQ2hhclNlbGVjdG9yID0gXCJleGNsYWltY2hhclwiO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBcIi5cIjpcbiAgICAgICAgICAgICAgICBnbGl0Y2hDaGFyU2VsZWN0b3IgPSBcInBlcmlvZGNoYXJcIjtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ1wiJzpcbiAgICAgICAgICAgICAgICBnbGl0Y2hDaGFyU2VsZWN0b3IgPSBcImRibHF1b3RlY2hhclwiO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBcIlxcJ1wiOlxuICAgICAgICAgICAgICAgIGdsaXRjaENoYXJTZWxlY3RvciA9IFwicXVvdGVjaGFyXCI7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cblxuICAgICAgICBzcGxpdFRleHRbdGV4dEluZGV4XSA9ICc8c3BhbiBjbGFzcz1cImdsMXRjaCAnICsgZ2xpdGNoQ2hhclNlbGVjdG9yICsgJ1wiPicgKyBzcGxpdFRleHRbdGV4dEluZGV4XSArIFwiPC9zcGFuPlwiO1xuICAgICAgICB2YXIgZmluYWxUZXh0ID0gc3BsaXRUZXh0LmpvaW4oXCJcIik7XG5cbiAgICAgICAgalF1ZXJ5KFwiaDFcIikuaHRtbChmaW5hbFRleHQpO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gZ2xpdGNoSGVhZGxpbmUoKSB7XG4gICAgdmFyIGdsaXRjaENoYXJPYmogPSBqUXVlcnkoXCJoMSA+IHNwYW4uZ2wxdGNoXCIpO1xuICAgIHZhciBnbGl0Y2hEdXJhdGlvbiA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwMDApO1xuXG4gICAgZ2xpdGNoQ2hhck9iai5hZGRDbGFzcyhcImdsMXRjaC0tdGV4dFwiKTtcbiAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgZ2xpdGNoQ2hhck9iai5yZW1vdmVDbGFzcyhcImdsMXRjaC0tdGV4dFwiKTtcbiAgICB9LCBnbGl0Y2hEdXJhdGlvbik7XG59XG5cbmZ1bmN0aW9uIGdlblRpbWVyKGR1cikge1xuICAgIHJldHVybiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBkdXIpO1xufVxuXG4vKiBOYXYgVHJpZ2dlciAqL1xuZnVuY3Rpb24gZ2xpdGNoX3RvZ2dsZU5hdigpIHtcbiAgICBnbGl0Y2hfbmF2QWN0aXZlID0galF1ZXJ5KFwiLmdsaXRjaF9uYXZCdXR0b25cIikuaGFzQ2xhc3MoXCJnbGl0Y2hfbmF2QnV0dG9uLS1hY3RpdmVcIik7XG5cbiAgICBpZiAoZ2xpdGNoX25hdkFjdGl2ZSkge1xuICAgICAgICBqUXVlcnkoXCIuZ2xpdGNoX25hdkJ1dHRvblwiKS5yZW1vdmVDbGFzcyhcImdsaXRjaF9uYXZCdXR0b24tLWFjdGl2ZVwiKTtcbiAgICAgICAgalF1ZXJ5KFwiLmdsaXRjaF9uYXZDb250YWluZXJcIikucmVtb3ZlQ2xhc3MoXCJnbGl0Y2hfbmF2Q29udGFpbmVyLS1hY3RpdmVcIik7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgalF1ZXJ5KFwiLmdsaXRjaF9uYXZCdXR0b25cIikuYWRkQ2xhc3MoXCJnbGl0Y2hfbmF2QnV0dG9uLS1hY3RpdmVcIik7XG4gICAgICAgIGpRdWVyeShcIi5nbGl0Y2hfbmF2Q29udGFpbmVyXCIpLmFkZENsYXNzKFwiZ2xpdGNoX25hdkNvbnRhaW5lci0tYWN0aXZlXCIpO1xuICAgIH1cbn1cblxuLyogRGFyayBNb2RlIFRyaWdnZXIgKi9cbmZ1bmN0aW9uIGRhcmtNb2RlU3dpdGNoKCkge1xuICAgIGlmIChqUXVlcnkoXCJib2R5XCIpLmhhc0NsYXNzKFwiZDRya20wZDNcIikpIHtcbiAgICAgICAgalF1ZXJ5KFwiYm9keVwiKS5yZW1vdmVDbGFzcyhcImQ0cmttMGQzXCIpO1xuICAgICAgICBkb2N1bWVudC5jb29raWUgPSBcImRhcmttb2RlPTA7cGF0aD0vXCI7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgalF1ZXJ5KFwiYm9keVwiKS5hZGRDbGFzcyhcImQ0cmttMGQzXCIpO1xuICAgICAgICBkb2N1bWVudC5jb29raWUgPSBcImRhcmttb2RlPTE7cGF0aD0vXCI7XG4gICAgfVxufSJdfQ==
