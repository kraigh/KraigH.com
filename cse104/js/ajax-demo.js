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

function submitForm() {
    // Prevent the default form submission
    this.preventDefault();

    // Get form values using "this" as a reference to the form
    var name = this.elements.namedItem("name").value;
    var menu = this.elements.namedItem("menu").value;
    var greeted = this.elements.namedItem("greeted[]").value;
    var rating = this.elements.namedItem("rating").value;
    var comments = this.elements.namedItem("comments").value;

    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        console.log(this.readyState);
        if (this.readyState == 4 && this.status == 200) {
           console.log(this.responseText);
        }
    };
    xhttp.open("POST", "reviews.php", true);
    xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
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
