(function ($) {
    $('.userProfile').click(function () {
        $('#profilePop').toggleClass('show');
    })

    $('#search, #cancel').click(function () {
        $('#search').toggleClass('show');
        $('#searchbar').toggleClass('show');
        $('#items h2').toggleClass('show');

        if ($('#items h2').hasClass('show')) {
            $('#items h2').text('Search Items');
        } else {
            $('#items h2').text('Items');
        }
    })

    function adjustLayout() {
        let screenWidth = $(window).width();

        if (screenWidth <= 991) {
            $('#lists,#items,#details').removeAttr('class');

            $('#itemLists li').off('click').on('click', function () {
                $('#items').addClass('active');
            });

            $('#backInbox').off('click').on('click', function () {
                $('#items').removeClass('active');
            });

            $('#productPanel .productCard').off('click').on('click', function () {
                $('#details').addClass('active');
            });

            $('#backItem').off('click').on('click', function () {
                $('#details').removeClass('active');
            });
        }
    }

    $(document).ready(function () {
        adjustLayout();
        dragableSec();
    });

    $(window).resize(function () {
        adjustLayout();
        dragableSec();
    });

    $('.toggler').click(function () {
        $('#lists').toggleClass('hide');
        $('#items').toggleClass('hide');
        $('#details').toggleClass('widthFull');
    });

    function dragableSec() {
        let screenWidth = $(window).width();

        if (screenWidth >= 991) {
            $("#lists, #items").resizable({
                handles: "e",
                resize: function (event, ui) {
                    // console.log("Resized", ui.size.width, ui.size.height);
                }
            });
        }
    }
}(jQuery))
