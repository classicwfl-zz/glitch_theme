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