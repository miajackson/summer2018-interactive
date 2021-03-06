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
          } else {
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
                $('*').css('border','3px solid #204a8e');
                $('*').css('border','1px solid white');
                $('h1').css('border','10px solid #204a8e');
                $('h2, h3, h4, h5').css('border','5px solid #204a8e');
                $('li, ul, a').css('border','2px solid white');
                $('hr').css('border','1px solid white');
                $("body").css('background-color', '#a6badb');
                $('head').append('<link rel="stylesheet" href="https://miajackson.github.io/summer2018-interactive/weekly-projects/final-project-2/practice2-27.css" type="text/css"/>');
                //$("body").append('<div class="blend"></div>');
                $('.blend').css('background-color','#a6badb');
                $('body').append('style="background-color:#a6badb"></div>'));
                //$("body").append('<p id="width"></p>');
                //$("body").append('<p id="height"></p>');

                $('video, iframe').css('border', '7px solid white', 'opacity');
                $('video, iframe').css('visibility', 'none');

                $("body").append('<p id="dimension"></p>');

                // adds the dimensions of the page
                function fontSize() {
                  width = Math.floor(window.innerWidth);
                  height = Math.floor(window.innerHeight);

                  $("#dimension").html(height + 'x' + width);
                  $("#dimension").css('z-index','99999999999' )
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
          /*function initBookmarklet($) {
            (window.bookmarklet = function() {
                /*var colorB = Math.floor((Math.random() * 255));
                $('*').css('color', 'transparent');
                $('*').css('border','1px solid white');
                $('h1').css('border','10px solid white');
                //$('body').css('background-color', 'rgb(0, 0,' + colorB +')');
                $('h2, h3, h4, h5').css('border','5px solid white');
                $('li, ul, a').css('border','2px solid white');
                $('hr').css('border','1px solid white');

                //$("body").css('background-color', '#a6badb');
                $('head').append('<link rel="stylesheet" href="https://miajackson.github.io/summer2018-interactive/weekly-projects/final-project-2/practice2-27.css" type="text/css"/>');
                $("body").append('<div class="blend"></div>');
                $('.blend').css('background-color','rgb(0, 0,' + colorB +')');
                //$('body').append(style="background-color:0, 0," + colorB +""></div>')');
                $("body").append('<p id="width"></p>');
                $("body").append('<p id="height"></p>');

                $('video, iframe, img').css('visibility', 'none');
                $('video, iframe, img').css('border', '7px solid white');

                var colorB = Math.floor((Math.random() * 255));
                $('*').css('color', 'transparent');
                $('*').css('border','3px solid #204a8e');
                $('h1').css('border','9px solid #204a8e');
                $('h2, h3, h4, h5').css('border','6px solid #204a8e');
                $('hr').css('border','1px solid white');
                //$("body").css('background-color', '#a6badb');
                $('head').append('<link rel="stylesheet" href="https://miajackson.github.io/summer2018-interactive/weekly-projects/final-project-2/practice2-27.css" type="text/css"/>');
                $("body").append('<div class="blend"></div>');
                $('.blend').css('background-color','rgb(0, 0,' + colorB +')');
                //$('body').append(style="background-color:' + colorR + ',' + colorG + ',' + colorB'"></div>'));
                $('video, iframe').css('opacity', '0');
                $('video, iframe').css('border', '7px solid white');

              function fontSize() {
                  var width = Math.floor(window.innerWidth);
                  var height = Math.floor(window.innerHeight);
                  //$("#width").html('x' + width);
                  //$("#height").html('x' + height);
                  $("#dimension").html(height + 'x' + width);
                  $("#dimension").css('font-color','black' )
                  $("#dimension").css('font-size','3em' )
                  //$("#width").css("font-size", width/9 + 'px');
                }
                // Trigger a function whenever the window is resized
                $(window).resize(function() {
                  fontSize();
                });

                // Execute a function when the DOM is ready
                fontSize();
            })();
}
})();*/
