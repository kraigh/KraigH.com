jQuery(document).ready(function ($) {
    $.getJSON("http://kraigh.com/cse104/reviews.php", function(data) {
        data.each(function(index, el) {
            $('#reviews-list').add('<li>'+el.name+'</li>');
        });
    });
});
