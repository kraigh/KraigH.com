// Load existing reviews
var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        // JSON parse the responseText
        var reviews = JSON.parse(this.responseText);
        console.log(reviews);
        // The response returns an array of objects, so loop through them
        for (var i = 0; i < reviews.length; i++) {
            // To keep our code clean, we created a function to turn a
            // review object into HTML and add it to the page
            renderReview(reviews[i]);
        }
    } else if (this.readyState == 4) {
        // this.readyState is 4 but this.status is NOT 200
        // therefore, the server has returned an error
        console.log(this.responseText);
    }
};
xhttp.open("GET", "reviews.php", true);
xhttp.send();


// Add an event listener for submitting the form
document.getElementById("review-form").addEventListener("submit", submitForm);

// Function to handle form submit, use "event" parameter
function submitForm(event) {
    // Stop the default form submit
    event.preventDefault();

    // Create variables with form values
    var name = document.getElementById("review-form").elements.namedItem("name").value;
    var menu = document.getElementById("review-form").elements.namedItem("menu").value;
    var greeted = document.getElementById("review-form").elements.namedItem("greeted[]").value;
    var rating = document.getElementById("review-form").elements.namedItem("rating").value;
    var comments = document.getElementById("review-form").elements.namedItem("comments").value;

    // Initialize AJAX Request
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            // JSON parse the new review object
            var newReview = JSON.parse(this.responseText);
            // Render the new review object (add it to the HTML)
            renderReview(newReview);
            // Clear out the form values
            document.getElementById("review-form").elements.namedItem("name").value = '';
            document.getElementById("review-form").elements.namedItem("menu").value = 'steak';
            document.getElementById("review-form").elements.namedItem("greeted[]").value = '';
            document.getElementById("review-form").elements.namedItem("rating").value = 1;
            document.getElementById("review-form").elements.namedItem("comments").value = '';
            // Show a success message
            document.getElementById("success-message").style.display = "block";
        } else if (this.readyState == 4) {
            // Request was successful but server returned an error
            console.log(this.responseText);
        }
    };
    // POST because we're sending data
    xhttp.open("POST", "reviews.php", true);
    // Required for a POST AJAX
    xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    // Passing along the required parameters.
    xhttp.send("name=" + name + "&menu=" + menu + "&greeted=" + greeted + "&rating=" + rating + "&comments=" + comments);


}

// This is the utility function to take a review object,
// create html elements out of it,
// and add the new html to the page
function renderReview(review) {
    console.log("Rendering review");
    // Create a new li for this review
    var reviewItem = document.createElement("li");
    // Set two classes on the new li itetm
    reviewItem.setAttribute("class", "list-group-item row");

    var starsHtml = '';
    // Loop 5 times, 1 for each possible star
    for (var i = 0; i < 5; i++) {
        // subtract 1 from rating since i starts at 0
        if (i > (parseInt(review.rating, 10) - 1)) {
            // If current loop index is greater than the rating level, use an empty star
            starsHtml += '<span class="glyphicon glyphicon-star-empty" aria-hidden="true"></span>';
        } else {
            // If current loop index is equal to or less than the rating level, use a filled star
            starsHtml += '<span class="glyphicon glyphicon-star" aria-hidden="true"></span>';
        }
    }
    // Create div for name and rating
    var nameDiv = document.createElement("div");
    // Add classes to div
    nameDiv.setAttribute("class", "col-md-3 review-name");
    // Set innerHTML of div to reviewer's name, and HTML for stars rating
    nameDiv.innerHTML = review.name + "</br>" + starsHtml;
    // Add nameDiv to new review li
    reviewItem.appendChild(nameDiv);

    // Create div for reviewer's menu selection
    var menuDiv = document.createElement("div");
    // Add classes to div
    menuDiv.setAttribute("class", "col-md-2 review-menu");
    // Set innerHTML of div to reviewer's menu selection
    menuDiv.innerHTML = review.menu;
    // Add menuDiv to new review li
    reviewItem.appendChild(menuDiv);

    // Create div for greeted upon entry/exit
    var greetedDiv = document.createElement("div");
    // Add classes to div
    greetedDiv.setAttribute("class", "col-md-3 review-greeted");
    // Set innerHTML of div
    greetedDiv.innerHTML = review.greeted;
    // Add greetedDiv to new review li
    reviewItem.appendChild(greetedDiv);

    // Create div for reviewer's comments
    var commentsDiv = document.createElement("div");
    // Add classes to div
    commentsDiv.setAttribute("class", "col-md-4 review-comments");
    // Set innerHTML of div to reviewer's comments
    commentsDiv.innerHTML = review.comments;
    // Add commentsDiv to new review li
    reviewItem.appendChild(commentsDiv);

    // Add review li to reviews list ul
    document.getElementById("reviews-list").appendChild(reviewItem);
}
