jQuery(document).ready(function ($) {
    $.getJSON("reviews.php", function(data) {
        console.log(data);
    });
});
