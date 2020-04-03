$(document).ready(function() {
    var cast = [];

    //limit 10 results with animate and still attributes
    function displayOfficeCast() {
        var x = $(this).data("search");
        console.log(x);

        //api
        // var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + x + "&api_key=BK7Mc3I93bFbs2sQCX7xQVfK2JcEAQRQ";
        var queryURL = "https://api.giphy.com/v1/gifs/search?" + x + "api_key=BK7Mc3I93bFbs2sQCX7xQVfK2JcEAQRQ&q=&limit=10&offset=0&rating=PG&lang=en";

        $.ajax({
            url: queryURL,
            method: "GET"
        }).done(function(response) {
            var results = response.data;
            for (var i = 0; i < results.length; i++) {


            }
        })
    }


})