(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
jQuery( document ).ready(function() {
    if (jQuery("body").hasClass("home")) { 
        glitchTimer = setInterval(function(){setTimeout(addGlitchHomeArt,genTimer(8000))},1000); 
        glitchRadiusTimer = setInterval(function(){setTimeout(addGlitchRadiusHomeArt,genTimer(4000))},1000);
    }

    addGlitchHeadlineSpan();
    glitchTextTimer = setInterval(function(){setTimeout(glitchHeadline,genTimer(5000))},1000);
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
            glitchCharSelector = "space";
            break;
        case "&":
            glitchCharSelector = "amp";
            break;
        case ";":
            glitchCharSelector = "semicolon";
            break;
        case ":":
            glitchCharSelector = "colon";
            break;
        case "!":
            glitchCharSelector = "exclaim";
            break;
        case ".":
            glitchCharSelector = "period";
            break;
        case '"':
            glitchCharSelector = "dblquote";
            break;
        case "\'":
            glitchCharSelector = "quote";
            break;
    }

    console.log(glitchCharSelector);

    splitText[textIndex] = '<span class="gl1tch ' + glitchCharSelector + '">' + splitText[textIndex] + "</span>";
    var finalText = splitText.join("");

    jQuery("h1").html(finalText);
}

function glitchHeadline() {
    var glitchChar = jQuery("h1 > span.gl1tch");
    var glitchDuration = Math.floor(Math.random() * 1000);

    glitchChar.addClass("gl1tch--text");
    setTimeout(function () {
        glitchChar.removeClass("gl1tch--text");
    }, glitchDuration);
}

function genTimer(dur) {
    return Math.floor(Math.random() * dur);
}
},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJqcy9nbGl0Y2gtZGV2LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uKCl7ZnVuY3Rpb24gcihlLG4sdCl7ZnVuY3Rpb24gbyhpLGYpe2lmKCFuW2ldKXtpZighZVtpXSl7dmFyIGM9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZTtpZighZiYmYylyZXR1cm4gYyhpLCEwKTtpZih1KXJldHVybiB1KGksITApO3ZhciBhPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIraStcIidcIik7dGhyb3cgYS5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGF9dmFyIHA9bltpXT17ZXhwb3J0czp7fX07ZVtpXVswXS5jYWxsKHAuZXhwb3J0cyxmdW5jdGlvbihyKXt2YXIgbj1lW2ldWzFdW3JdO3JldHVybiBvKG58fHIpfSxwLHAuZXhwb3J0cyxyLGUsbix0KX1yZXR1cm4gbltpXS5leHBvcnRzfWZvcih2YXIgdT1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlLGk9MDtpPHQubGVuZ3RoO2krKylvKHRbaV0pO3JldHVybiBvfXJldHVybiByfSkoKSIsImpRdWVyeSggZG9jdW1lbnQgKS5yZWFkeShmdW5jdGlvbigpIHtcbiAgICBpZiAoalF1ZXJ5KFwiYm9keVwiKS5oYXNDbGFzcyhcImhvbWVcIikpIHsgXG4gICAgICAgIGdsaXRjaFRpbWVyID0gc2V0SW50ZXJ2YWwoZnVuY3Rpb24oKXtzZXRUaW1lb3V0KGFkZEdsaXRjaEhvbWVBcnQsZ2VuVGltZXIoODAwMCkpfSwxMDAwKTsgXG4gICAgICAgIGdsaXRjaFJhZGl1c1RpbWVyID0gc2V0SW50ZXJ2YWwoZnVuY3Rpb24oKXtzZXRUaW1lb3V0KGFkZEdsaXRjaFJhZGl1c0hvbWVBcnQsZ2VuVGltZXIoNDAwMCkpfSwxMDAwKTtcbiAgICB9XG5cbiAgICBhZGRHbGl0Y2hIZWFkbGluZVNwYW4oKTtcbiAgICBnbGl0Y2hUZXh0VGltZXIgPSBzZXRJbnRlcnZhbChmdW5jdGlvbigpe3NldFRpbWVvdXQoZ2xpdGNoSGVhZGxpbmUsZ2VuVGltZXIoNTAwMCkpfSwxMDAwKTtcbn0pO1xuXG5mdW5jdGlvbiBhZGRHbGl0Y2hIb21lQXJ0KCkge1xuICAgIHZhciBwaWxsYXJOdW0gPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAzKSArIDE7XG4gICAgdmFyIHBpbGxhck5hbWUgPSBcIi5nbGl0Y2hfaG9tZUFydFBpbGxhcjpudGgtY2hpbGQoXCIgKyBwaWxsYXJOdW0gKyBcIilcIjtcbiAgICB2YXIgcGlsbGFyID0galF1ZXJ5KHBpbGxhck5hbWUpO1xuICAgIHZhciBnbGl0Y2hEdXJhdGlvbiA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwMDApO1xuICAgIHZhciBnbGl0Y2hTaGFkb3dUeXBlID0gXCJnbDF0Y2gtLXNoYWRvd1wiICsgKE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDQpICsgMSkudG9TdHJpbmcoKTtcblxuICAgIHBpbGxhci5hZGRDbGFzcyhcImdsMXRjaFwiKS5hZGRDbGFzcyhnbGl0Y2hTaGFkb3dUeXBlKTtcbiAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHsgICAgICBcbiAgICAgICAgcGlsbGFyLnJlbW92ZUNsYXNzKFwiZ2wxdGNoXCIpLnJlbW92ZUNsYXNzKGdsaXRjaFNoYWRvd1R5cGUpOyAgICAgICAgIFxuICAgIH0sIGdsaXRjaER1cmF0aW9uKTtcbn1cblxuZnVuY3Rpb24gYWRkR2xpdGNoUmFkaXVzSG9tZUFydCgpIHtcbiAgICB2YXIgcGlsbGFyTnVtID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMykgKyAxO1xuICAgIHZhciBwaWxsYXJOYW1lID0gXCIuZ2xpdGNoX2hvbWVBcnRQaWxsYXI6bnRoLWNoaWxkKFwiICsgcGlsbGFyTnVtICsgXCIpXCI7XG4gICAgdmFyIHBpbGxhciA9IGpRdWVyeShwaWxsYXJOYW1lKTtcbiAgICB2YXIgZ2xpdGNoRHVyYXRpb24gPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAyMDAwKTtcblxuICAgIHBpbGxhci5hZGRDbGFzcyhcImdsMXRjaC0tbm9SYWRpdXNcIik7XG4gICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7ICAgICAgXG4gICAgICAgIHBpbGxhci5yZW1vdmVDbGFzcyhcImdsMXRjaC0tbm9SYWRpdXNcIik7ICAgICAgICAgXG4gICAgfSwgZ2xpdGNoRHVyYXRpb24pO1xufVxuXG5mdW5jdGlvbiBhZGRHbGl0Y2hIZWFkbGluZVNwYW4oKSB7XG4gICAgdmFyIGhlYWRUZXh0ID0galF1ZXJ5KFwiaDFcIikudGV4dCgpO1xuICAgIHZhciBzcGxpdFRleHQgPSBoZWFkVGV4dC5zcGxpdChcIlwiKTtcbiAgICB2YXIgdGV4dExlbmd0aCA9IHNwbGl0VGV4dC5sZW5ndGg7XG4gICAgdmFyIHRleHRJbmRleCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIHRleHRMZW5ndGgpO1xuICAgIHZhciBnbGl0Y2hDaGFyID0gc3BsaXRUZXh0W3RleHRJbmRleF0udG9Mb3dlckNhc2UoKTtcbiAgICBjb25zb2xlLmxvZyhnbGl0Y2hDaGFyKTtcbiAgICB2YXIgZ2xpdGNoQ2hhclNlbGVjdG9yID0gZ2xpdGNoQ2hhcjtcbiAgICBcbiAgICBzd2l0Y2ggKGdsaXRjaENoYXIpIHtcbiAgICAgICAgY2FzZSBcIiBcIjpcbiAgICAgICAgICAgIGdsaXRjaENoYXJTZWxlY3RvciA9IFwic3BhY2VcIjtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIFwiJlwiOlxuICAgICAgICAgICAgZ2xpdGNoQ2hhclNlbGVjdG9yID0gXCJhbXBcIjtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIFwiO1wiOlxuICAgICAgICAgICAgZ2xpdGNoQ2hhclNlbGVjdG9yID0gXCJzZW1pY29sb25cIjtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIFwiOlwiOlxuICAgICAgICAgICAgZ2xpdGNoQ2hhclNlbGVjdG9yID0gXCJjb2xvblwiO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgXCIhXCI6XG4gICAgICAgICAgICBnbGl0Y2hDaGFyU2VsZWN0b3IgPSBcImV4Y2xhaW1cIjtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIFwiLlwiOlxuICAgICAgICAgICAgZ2xpdGNoQ2hhclNlbGVjdG9yID0gXCJwZXJpb2RcIjtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdcIic6XG4gICAgICAgICAgICBnbGl0Y2hDaGFyU2VsZWN0b3IgPSBcImRibHF1b3RlXCI7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBcIlxcJ1wiOlxuICAgICAgICAgICAgZ2xpdGNoQ2hhclNlbGVjdG9yID0gXCJxdW90ZVwiO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgfVxuXG4gICAgY29uc29sZS5sb2coZ2xpdGNoQ2hhclNlbGVjdG9yKTtcblxuICAgIHNwbGl0VGV4dFt0ZXh0SW5kZXhdID0gJzxzcGFuIGNsYXNzPVwiZ2wxdGNoICcgKyBnbGl0Y2hDaGFyU2VsZWN0b3IgKyAnXCI+JyArIHNwbGl0VGV4dFt0ZXh0SW5kZXhdICsgXCI8L3NwYW4+XCI7XG4gICAgdmFyIGZpbmFsVGV4dCA9IHNwbGl0VGV4dC5qb2luKFwiXCIpO1xuXG4gICAgalF1ZXJ5KFwiaDFcIikuaHRtbChmaW5hbFRleHQpO1xufVxuXG5mdW5jdGlvbiBnbGl0Y2hIZWFkbGluZSgpIHtcbiAgICB2YXIgZ2xpdGNoQ2hhciA9IGpRdWVyeShcImgxID4gc3Bhbi5nbDF0Y2hcIik7XG4gICAgdmFyIGdsaXRjaER1cmF0aW9uID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTAwMCk7XG5cbiAgICBnbGl0Y2hDaGFyLmFkZENsYXNzKFwiZ2wxdGNoLS10ZXh0XCIpO1xuICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICBnbGl0Y2hDaGFyLnJlbW92ZUNsYXNzKFwiZ2wxdGNoLS10ZXh0XCIpO1xuICAgIH0sIGdsaXRjaER1cmF0aW9uKTtcbn1cblxuZnVuY3Rpb24gZ2VuVGltZXIoZHVyKSB7XG4gICAgcmV0dXJuIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIGR1cik7XG59Il19
