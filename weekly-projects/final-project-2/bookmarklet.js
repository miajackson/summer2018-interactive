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

      // how to do randomized color
      var colorR = Math.floor(Math.random() * 248);
      var colorG = Math.floor(Math.random() * 248);
      var colorB = Math.floor((Math.random() * 153) + 102);
        (window.bookmarklet = function() {
                //$('body').css('background-color', colorR + ',' + colorG + ',' + colorB +')');
                $('*').css('font-family', 'Helvetica');
                $('*').css('font-weight', '250');
                $('*').css('color', 'transparent');
                $('*').css('border','3px solid #204a8e');
                $('h1').css('border','8px solid #204a8e');
                $('h2, h3, h4, h5').css('border','5px solid #204a8e');
                //$("body").css('background-color', '#a6badb');
                $('head').append('<link rel="stylesheet" href="https://miajackson.github.io/summer2018-interactive/weekly-projects/final-project-2/practice.css" type="text/css"/>');
                $("body").append('<div class="blend" style="background-color:'+ colorR + ',' + colorG + ',' + colorB'"></div>');
                //$('body').append('background-color', colorR + ',' + colorG + ',' + colorB +')');
                $("body").append('<p id="width"></p>');
                $("body").append('<p id="height"></p>');

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
