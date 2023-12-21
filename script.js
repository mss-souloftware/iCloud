(function ($) {
    $('.userProfile').click(function () {
        $('#profilePop').toggleClass('show');
    })

    let screenWidth = $(window).width();

    if (screenWidth <= 991) {
        $('#itemLists li').click(function () {
            $('#items').addClass('active');
        })

        $('#backInbox').click(function () {
            $('#items').removeClass('active');
        });

        $('#productPanel .productCard').click(function () {
            $('#details').addClass('active');
        })

        $('#backItem').click(function () {
            $('#details').removeClass('active');
        });
    }


    $('.toggler').click(function () {
        $('#lists').toggleClass('hide');
        $('#items').toggleClass('hide');
        $('#details').toggleClass('widthFull');
    })

    if (screenWidth >= 991) {
        $("#lists, #items").resizable({
            handles: "e",
            resize: function (event, ui) {
                console.log("Resized", ui.size.width, ui.size.height);
            }
        });
    }
}(jQuery))