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


    document.getElementById("review-form").addEventListener("submit", submitForm);

    function submitForm(event) {
        event.preventDefault();


        var name = document.getElementById("review-form").elements.namedItem("name").value;
        var menu = document.getElementById("review-form").elements.namedItem("menu").value;
        var greeted = document.getElementById("review-form").elements.namedItem("greeted[]").value;
        var rating = document.getElementById("review-form").elements.namedItem("rating").value;
        var comments = document.getElementById("review-form").elements.namedItem("comments").value;

        // console.log(name);
        // console.log(menu);
        // console.log(greeted);
        // console.log(rating);
        // console.log(comments);
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
            console.log(this.readyState);
            if (this.readyState == 4 && this.status == 200) {
               console.log(this.responseText);
            }
        };

        xhttp.open("POST", "reviews.php", true);
        xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        xhttp.send("?name=" + name + "&menu=" + menu + "&greeted=" + greeted + "&rating=" + rating + "&comments=" + comments);


    }











});
