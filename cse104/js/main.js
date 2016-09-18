jQuery(document).ready(function ($) {
    $.getJSON("http://kraigh.com/cse104/reviews.php", function(data) {
        $.$.each(data, function(index, val) {
            $('#reviews-list').append('<li>'+val.name+'</li>');
        });
    });
});
