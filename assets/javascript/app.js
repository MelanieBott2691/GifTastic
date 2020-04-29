$(document).ready(function() {
    console.log("page loaded");



    //array of cast of the office
    var office = ["Jim Halpert", "Michael Scott", "Dwight Schrute", "Pam Beesly", "Stanley Hudson",
        "Kevin Malone", "Creed Bratton", "Oscar Martinez", "Holly Flax", "Charles Miner", "Deangelo Vickers"
    ];
    // console.log("officeCast");
    //function to display data

    //call function and load page

    function populateButtons(arrayToUse, classToAdd, areaToAddTo) {
        $(areaToAddTo).empty();

        for (var i = 0; i < arrayToUse.length; i++) {
            var a = $("<button>");
            a.addClass(classToAdd);
            a.attr("data-type", arrayToUse[i]);
            a.text(arrayToUse[i]);
            $(areaToAddTo).append(a);
        }
    }

    $(document).on("click", ".office-button", function() {
        $("#office").empty();
        $("#office-button").removeClass("active");
        $(this).addClass("active");

        var type = $(this).attr("data-type");
        var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + type + "&api_key=BK7Mc3I93bFbs2sQCX7xQVfK2JcEAQRQ&limit=10";

        $.ajax({
                url: queryURL,
                method: "GET"
            })
            .then(function(response) {
                var results = response.data;

                for (var i = 0; i < results.length; i++) {
                    var officeDiv = $("<div class=\"cast-item\">");

                    var rating = results[i].rating;

                    var p = $("<p>").text("Rating: " + rating);

                    var animated = results[i].images.fixed_height.url;
                    var still = results[i].images.fixed_height_still.url;

                    var officeImage = $("<img>");
                    officeImage.attr("src", still);
                    officeImage.attr("data-still", still);
                    officeImage.attr("data-animate", animated);
                    officeImage.attr("data-state", "still");
                    officeImage.addClass("office-image");

                    officeDiv.append(p);
                    officeDiv.append(officeImage);

                    $("#office").append(officeDiv);
                }
            });
    });

    $(document).on("click", ".office-image", function() {

        var state = $(this).attr("data-state");

        if (state === "still") {
            $(this).attr("src", $(this).attr("data-animate"));
            $(this).attr("data-state", "animate");
        } else {
            $(this).attr("src", $(this).attr("data-still"));
            $(this).attr("data-state", "still");
        }
    });

    $("#add-cast").on("click", function(event) {
        event.preventDefault();
        var newOffice = $("input").eq(0).val();

        if (newOffice.length > 2) {
            office.push(newOffice);
        }

        populateButtons(office, "office-button", "#office-buttons");

    });

    populateButtons(office, "office-button", "#office-buttons");
});