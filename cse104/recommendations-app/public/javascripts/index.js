// this is the id of the form
$("#api-form").submit(function(e) {

    var url = "/users"; // the script where you handle the form input.

    $.ajax({
           type: "POST",
           url: url,
           data: $("#api-form").serialize(), // serializes the form's elements.
           success: function(data)
           {
               $("#api-key").html(data);
               $("#api-key-container").show();
           }
         });

    e.preventDefault(); // avoid executing the actual submit of the form.
});
