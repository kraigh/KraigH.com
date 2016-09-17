jQuery(document).ready(function ($) {
    $.getJSON("http://kraigh.com/cse104/reviews.php", function(data) {
        console.log(data);
    });
});
