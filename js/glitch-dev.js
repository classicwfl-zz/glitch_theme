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