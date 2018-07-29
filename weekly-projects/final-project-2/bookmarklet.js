(function(){
// This part checks for jQuery
var version = "1.10.2";
// Checks for prior inclusion and version
if (window.jQuery === undefined || window.jQuery.fn.jquery < version) {
        // If there isn't an instance of jQuery, create one and append it to the head
        // Else run our bookmarklet!
        var done = false;
        var script = document.createElement("script");
        script.src = "https://ajax.googleapis.com/ajax/libs/jquery/" + version + "/jquery.min.js";
        script.onload = script.onreadystatechange = function(){
                if (!done && (!this.readyState || this.readyState == "loaded" || this.readyState == "complete")) {
                        done = true;
                        initBookmarklet(window.jQuery);
                }
    else {
        console.log('error loading');
    }
        };
        document.getElementsByTagName("head")[0].appendChild(script);
if (window.jQuery === undefined || window.jQuery.fn.jquery < version) {
    console.log(':::');
}
else {
    console.log('jquery loaded');
}
} else {
        initBookmarklet(window.jQuery);
}
function initBookmarklet($) {
        (window.bookmarklet = function() {
                // Replace this section with your own Information Overlay script
                $('body').css('background-color', 'rgb(colorR, colorG, colorB)');
                //'#3766b2'
                $('*').css('font-family', 'Helvetica');
                $('*').css('font-weight', '250');
                $('*').css('color', 'transparent');
                $('p, h1, li, ul').css('border','4px solid #204a8e');

                $('head').append('<link rel="stylesheet" href="practice.css" type="text/css"/>');
                $("body").append('<div class="blend"></div>');
                $("body").append('<p id="width"></p>');
                $("body").append('<p id="height"></p>');

                //target indesign;

                $('video, iframe').css('opacity', '.3');
                $('video, iframe').css('border', '7px solid white', 'opacity');

                // adds the dimensions of the page
                function fontSize() {
                  width = Math.floor(window.innerWidth);
                  height = Math.floor(window.innerHeight);
                  $("#width").html('x' + width);
                  $("#height").html('x' + height);
                  $("#width").css("font-size", width/9 + 'px');
                  $("#height").css("font-size", height/7 + 'px');
                }

                // Trigger a function whenever the window is resized
                $(window).resize(function() {
                  fontSize();
                });

                // Execute a function when the DOM is ready
                fontSize();

        })();
}
})();