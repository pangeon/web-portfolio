// @ts-ignore
$(function () {

    /* =========================================
     * tooltip
     *  =======================================*/

    // @ts-ignore
    $('.customer img').tooltip();


    /* =========================================
     * counters
     *  =======================================*/

    // @ts-ignore
    $('.counter').counterUp({
        delay: 10,
        time: 1000
    });

    /* =================================================
     * Preventing URL update on navigation link click
     *  ==============================================*/

    // @ts-ignore
    $('.link-scroll').on('click', function (e) {
        // @ts-ignore
        var anchor = $(this);
        // @ts-ignore
        $('html, body').stop().animate({
            // @ts-ignore
            scrollTop: $(anchor.attr('href')).offset().top
        }, 1000);
        e.preventDefault();
    });


    /* =========================================
     *  Scroll Spy
     *  =======================================*/

    // @ts-ignore
    $('body').scrollspy({
        target: '#navbarcollapse',
        offset: 80
    });


    /* =========================================
     * testimonial slider
     *  =======================================*/

    // @ts-ignore
    $(".testimonials").owlCarousel({
        nav: false,
        dots: true,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 3
            },
            1200: {
                items: 4
            }
        }
    });


    /* =========================================
     * Leflet map
     *  =======================================*/
    map();


    /* =========================================
     * parallax
     *  =======================================*/
    // @ts-ignore
    $(window).scroll(function () {

        // @ts-ignore
        var scroll = $(this).scrollTop();

        // @ts-ignore
        if ($(window).width() > 1250) {
            // @ts-ignore
            $('.parallax').css({
                'background-position': 'left -' + scroll / 8 + 'px'
            });
        } else {
            // @ts-ignore
            $('.parallax').css({
                'background-position': 'center center'
            });
        }
    });

    /* =========================================
     * filter
     *  =======================================*/

    // @ts-ignore
    $('#filter a').click(function (e) {
        e.preventDefault();

        // @ts-ignore
        $('#filter li').removeClass('active');
        // @ts-ignore
        $(this).parent('li').addClass('active');

        // @ts-ignore
        var categoryToFilter = $(this).attr('data-filter');

        // @ts-ignore
        $('.reference-item').each(function () {

            // @ts-ignore
            if ($(this).data('category') === categoryToFilter || categoryToFilter === 'all') {
                // @ts-ignore
                $(this).show();
            } else {
                // @ts-ignore
                $(this).hide();
            }
        });

    });


    /* =========================================
     * reference functionality
     *  =======================================*/
    // @ts-ignore
    $('.reference a').on('click', function (e) {

        e.preventDefault();

        // @ts-ignore
        var title = $(this).find('.reference-title').text(),
            // @ts-ignore
            description = $(this).siblings('.reference-description').html();

        // @ts-ignore
        $('#detail-title').text(title);
        // @ts-ignore
        $('#detail-content').html(description);

        // @ts-ignore
        var images = $(this).siblings('.reference-description').data('images').split(',');
        if (images.length > 0) {
            // @ts-ignore
            sliderContent = '';
            for (var i = 0; i < images.length; ++i) {
                // @ts-ignore
                sliderContent = sliderContent + '<div class="item light-frame"><img src=' + images[i] + ' alt="" class="img-fluid"></div>';
            }
        } else {
            // @ts-ignore
            sliderContent = '';
        }

        // @ts-ignore
        openReference(sliderContent);

    });

    function openReference(sliderContent) {
        // @ts-ignore
        $('#detail').slideDown();
        // @ts-ignore
        $('#references-masonry').slideUp();


        if (sliderContent !== '') {

            // @ts-ignore
            var slider = $('#detail-slider');

            if (slider.hasClass('owl-loaded')) {
                slider.trigger('replace.owl.carousel', sliderContent);
            } else {
                slider.html(sliderContent);
                slider.owlCarousel({
                    nav: false,
                    dots: true,
                    items: 1
                });

            }
        }
    }


    function closeReference() {
        // @ts-ignore
        $('#references-masonry').slideDown();
        // @ts-ignore
        $('#detail').slideUp();
    }

    // @ts-ignore
    $('#filter button, #detail .close').on('click', function () {
        closeReference();
    });


    /* =========================================
     *  animations
     *  =======================================*/

    // @ts-ignore
    delayTime = 0;

    // @ts-ignore
    $('[data-animate]').waypoint(function (direction) {
        // @ts-ignore
        delayTime += 250;

        // @ts-ignore
        var element = $(this.element);

        // @ts-ignore
        $(this.element).delay(delayTime).queue(function (next) {
            element.toggleClass('animated');
            element.toggleClass(element.data('animate'));
            // @ts-ignore
            delayTime = 0;
            next();
        });

        this.destroy();

    }, {
        offset: '90%'
    });
    
    // @ts-ignore
    $('[data-animate-hover]').hover(function () {
        // @ts-ignore
        $(this).css({
            opacity: 1
        });
        // @ts-ignore
        $(this).addClass('animated');
        // @ts-ignore
        $(this).removeClass($(this).data('animate'));
        // @ts-ignore
        $(this).addClass($(this).data('animate-hover'));
    }, function () {
        // @ts-ignore
        $(this).removeClass('animated');
        // @ts-ignore
        $(this).removeClass($(this).data('animate-hover'));
    });

    /* =========================================
     * for demo purpose
     *  =======================================*/

    // @ts-ignore
    var stylesheet = $('link#theme-stylesheet');
    // @ts-ignore
    $("<link id='new-stylesheet' rel='stylesheet'>").insertAfter(stylesheet);
    // @ts-ignore
    var alternateColour = $('link#new-stylesheet');

    // @ts-ignore
    if ($.cookie("theme_csspath")) {
        // @ts-ignore
        alternateColour.attr("href", $.cookie("theme_csspath"));
    }

    // @ts-ignore
    $("#colour").change(function () {

        // @ts-ignore
        if ($(this).val() !== '') {

            // @ts-ignore
            var theme_csspath = 'css/style.' + $(this).val() + '.css';

            alternateColour.attr("href", theme_csspath);

            // @ts-ignore
            $.cookie("theme_csspath", theme_csspath, {
                expires: 365,
                path: document.URL.substr(0, document.URL.lastIndexOf('/'))
            });

        }

        return false;
    });

});



/* =========================================
 * styled Leaflet Map
 *  =======================================*/
// ------------------------------------------------------ //
// styled Leaflet  Map
// ------------------------------------------------------ //

function map() {

    var mapId = 'map',
        mapCenter = [51.7681528,19.4483255],
        // 51.65813,19.37656
        mapMarker = true;

    // @ts-ignore
    if ($('#' + mapId).length > 0) {

        // @ts-ignore
        var icon = L.icon({
            iconUrl: 'img/marker.png',
            iconSize: [25, 37.5],
            popupAnchor: [0, -18],
            tooltipAnchor: [0, 19]
        });

        var dragging = false,
            tap = false;

        // @ts-ignore
        if ($(window).width() > 700) {
            dragging = true;
            tap = true;
        }

        // @ts-ignore
        var map = L.map(mapId, {
            center: mapCenter,
            zoom: 13,
            dragging: dragging,
            tap: tap,
            scrollWheelZoom: false
        });

        // @ts-ignore
        var Stamen_TonerLite = L.tileLayer('https://stamen-tiles-{s}.a.ssl.fastly.net/toner-lite/{z}/{x}/{y}{r}.{ext}', {
            attribution: 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
            subdomains: 'abcd',
            minZoom: 0,
            maxZoom: 20,
            ext: 'png'
        });

        Stamen_TonerLite.addTo(map);

        map.once('focus', function () {
            map.scrollWheelZoom.enable();
        });

        if (mapMarker) {
            // @ts-ignore
            var marker = L.marker(mapCenter, {
                icon: icon
            }).addTo(map);

            marker.bindPopup("<div class='p-4'><h5>Info Window Content</h5><p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.</p></div>", {
                minwidth: 200,
                maxWidth: 600,
                className: 'map-custom-popup'
            })

        }
    }

}