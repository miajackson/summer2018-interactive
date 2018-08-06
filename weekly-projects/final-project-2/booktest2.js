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
                var colorR = Math.floor(Math.random() * 248);
                var colorG = Math.floor(Math.random() * 248);
                var colorB = Math.floor((Math.random() * 153) + 102);
                $('*').css('color', 'transparent');
                $('*').css('border','1px solid #bacff2');
                //#bacff2
                $('h1').css('border','9px solid #bacff2');
                $('h2, h3, h4, h5').css('border','6px solid #bacff2');
                $('li, ul').css('border','3px solid #bacff2');
                $('hr').css('border','1.5px solid #bacff2');

                $('head').append('<link rel="stylesheet" href="https://miajackson.github.io/summer2018-interactive/weekly-projects/final-project-2/practice2-27.css" type="text/css"/>');
                $("body").append('<div class="blend"></div>');
                $('.blend').css('background-color','#a6badb');
                console.log(colorR);
                //$('body').append(style="background-color:' + colorR + ',' + colorG + ',' + colorB'"></div>'));
                $("body").append('<p id="dimension"></p>');

                $('video, iframe').css('opacity', '.1');
                $('video, iframe').css('border', '7px solid white', 'opacity');
                // adds the dimensions of the page
                function fontSize() {
                  width = Math.floor(window.innerWidth);
                  height = Math.floor(window.innerHeight);
                  $("#dimension").html(height + 'x' + width);

                  $("#dimension").css('font-color','black' )
                  //$("#dimension").css('font-size','20px' )
                  $("#dimension").css('z-index','999999999999' )
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
