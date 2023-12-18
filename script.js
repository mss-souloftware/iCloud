(function ($) {
    $('.userProfile').click(function () {
        $('#profilePop').toggleClass('show');
    })

    $('.toggler').click(function () {
        $('#lists').toggleClass('hide');
        $('#items').toggleClass('hide');
        $('#details').toggleClass('widthFull');
    })

    $("#lists, #items").resizable({
        handles: "e",
        resize: function (event, ui) {
            console.log("Resized", ui.size.width, ui.size.height);
        }
    });

}(jQuery))