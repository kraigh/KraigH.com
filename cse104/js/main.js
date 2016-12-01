jQuery(document).ready(function ($) {
    // get JSON data from server
    $.getJSON("http://kraigh.com/cse104/reviews.php", function(data) {
        // Loop through each JSON item
        $.each(data, function(index, val) {
            console.log(val);
            var starsHtml = '';
            // Loop 5 times, 1 for each possible star
            for (var i = 0; i < 5; i++) {
                // subtract 1 from rating since i starts at 0
                if (i > (parseInt(val.rating, 10) - 1)) {
                    // If current loop index is greater than the rating level, use an empty star
                    starsHtml += '<span class="glyphicon glyphicon-star-empty" aria-hidden="true"></span>';
                } else {
                    // If current loop index is equal to or less than the rating level, use a filled star
                    starsHtml += '<span class="glyphicon glyphicon-star" aria-hidden="true"></span>';
                }
            }
            // Add review item <li>
            $('#reviews-list').append('<li id="review-'+index+'" class="list-group-item row"></li>');
            // Add user name and stars
            $('#review-'+index).append('<div class="col-md-3 review-name">'+val.name+'<br />'+starsHtml+'</div>');
            // Add user menu choice
            $('#review-'+index).append('<div class="col-md-2 review-menu">'+val.menu+'</div>');
            // Add user greeted entry
            $('#review-'+index).append('<div class="col-md-3 review-greeted"><b>Was greeted when:</b> '+val.greeted+'</div>');
            // Add user comments
            $('#review-'+index).append('<div class="col-md-4 review-comments"><b>Comments:</b> '+val.comments+'</div>');
        });
    });






});
