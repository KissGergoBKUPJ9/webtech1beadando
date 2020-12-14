$(document).ready(function() {

    $("#content").load("content.html");

    $.each($(".menuButton"), function(mbIndex, mbValue) {
        $(mbValue).click(function(event) {
            event.preventDefault();
            if ($(this).find('a').attr("href") == "index.html") {
                open("index.html", "_self");

            } else {

                $("#content").load($(this).find('a').attr("href"));
            }
            topFunction();

        })

    })

    function topFunction() {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
      }

});