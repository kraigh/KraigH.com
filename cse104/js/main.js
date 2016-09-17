jQuery(document).ready(function ($) {
    $.getJSON("http://kraigh.com/reviews.php", function(data) {
        console.log(data);
    });
});
