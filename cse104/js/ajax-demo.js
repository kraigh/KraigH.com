var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        var reviews = JSON.parse(this.responseText);
        console.log(reviews);
    } else if (this.readyState == 4) {
        // this.readyState is 4 but this.status is NOT 200
        // therefore, the server has returned an error
        console.log(this.responseText);
    }
};
xhttp.open("GET", "reviews.php", true);
xhttp.send();

    // document.getElementById("review-form").addEventListener("submit", submitForm);

    // function submitForm(event) {
    //     event.preventDefault();


    //     var name = document.getElementById("review-form").elements.namedItem("name").value;
    //     var menu = document.getElementById("review-form").elements.namedItem("menu").value;
    //     var greeted = document.getElementById("review-form").elements.namedItem("greeted[]").value;
    //     var rating = document.getElementById("review-form").elements.namedItem("rating").value;
    //     var comments = document.getElementById("review-form").elements.namedItem("comments").value;

    //     // console.log(name);
    //     // console.log(menu);
    //     // console.log(greeted);
    //     // console.log(rating);
    //     // console.log(comments);
    //     var xhttp = new XMLHttpRequest();
    //     xhttp.onreadystatechange = function() {
    //         console.log(this.readyState);
    //         if (this.readyState == 4 && this.status == 200) {
    //            console.log(this.responseText);
    //         }
    //     };

    //     xhttp.open("POST", "reviews.php", true);
    //     xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    //     xhttp.send("?name=" + name + "&menu=" + menu + "&greeted=" + greeted + "&rating=" + rating + "&comments=" + comments);


    // }
