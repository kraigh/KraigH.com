jQuery(document).ready(function ($) {
    $.getJSON("http://kraigh.com/cse104/reviews.php", function(data) {
        $.each(data, function(index, val) {
            console.log(val);
            var starsHtml = '';
            for (var i = 0; i < 5; i++) {
                if (i > parseInt(val.rating, 10)) {
                    starsHtml += '<span class="glyphicon glyphicon-star-empty" aria-hidden="true"></span>';
                } else {
                    starsHtml += '<span class="glyphicon glyphicon-star" aria-hidden="true"></span>';
                }
            }
            $('#reviews-list').append('<li id="review-'+index+'" class="list-group-item row"></li>');
            $('#review-'+index).append('<div class="col-md-3 review-name">'+val.name+'<br />'+starsHtml+'</div>');
            $('#review-'+index).append('<div class="col-md-2 review-menu">'+val.menu+'</div>');
            $('#review-'+index).append('<div class="col-md-3 review-greeted"><b>Was greeted when:</b> '+val.greeted+'</div>');
            $('#review-'+index).append('<div class="col-md-4 review-comments"><b>Comments:</b> '+val.greeted+'</div>');
        });
    });
});
