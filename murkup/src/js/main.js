$(document).ready(function () {
    openingText();
    mobileMenu();
    hoverDropdownMenu();
    //modalRight();
    writeUsForm (); //popup send resume and client page
    filterBox();
    priceSlider();
    toggleFilter();
    toggleMap();
    addNewAddress (); //persnal page add new address
    initCountdown();
    accordeon ();
    initModal();

    $('.promo-slider').not('.slick-initialized').slick({
        dots: true,
        arrows: true,
        customPaging: function (slider, i) {
            return '<span>' +
                   '<svg class="circle-chart" viewbox="0 0 20 20" width="18" height="18" xmlns="http://www.w3.org/2000/svg">' +
                   '<circle class="circle-chart__circle" fill="none" stroke-width="2" stroke-dasharray="100 100" stroke-linecap="square" cx="9.9127" cy="9.9127" r="8.9127" transform="rotate(-90 9.9127 9.9127)"/>' +
                   '</svg>' +
                   '</span>'
        },
        slidesToShow: 1,
        fade: true,

        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        cssEase: 'linear',
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    arrows: false
                }
            },{
                breakpoint: 768,
                settings: {
                    arrows: false,
                    dots: true
                }
            }
        ]
    });

    $('.h_customScrollbar, .brands-slider').mCustomScrollbar({
        theme: 'minimal-dark',
        axis: 'x'
    });
    $('.mCustomScroll').mCustomScrollbar({
        theme: 'light-3'
    });

    $('.top-products-slider').not('.slick-initialized').slick({
        vertical: true,
        verticalSwiping: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: false,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    vertical: false,
                    verticalSwiping: false,
                    slidesToShow: 1.5,
                    slidesToScroll: 1
                }
            }
        ]
    });

    $('.images-list').not('.slick-initialized').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        arrows: false
    });
    $('.js-two-item-slider').not('.slick-initialized').slick({
        slidesToShow: 2,
        slidesToScroll: 1,
        dots: false,
        arrows: true,
        infinite: false ,
        responsive: [ 
        {
            breakpoint: 1023,
            settings: {
            slidesToShow: 2,
            infinite: true,
            arrows: false,
            dots: true,
            autoplay: true,
            autoplaySpeed: 5000
            }
        }  ,
        {
            breakpoint: 767,
            settings: {
                slidesToShow: 1,
                dots: true,
                arrows: false
            }
        }   
        ]
    });
    $('.js-one-item-slider').not('.slick-initialized').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: false,
        arrows: true,
        infinite: false,
        responsive: [ 
            {
                breakpoint: 1023,
                settings: {
                infinite: true,
                arrows: false,
                dots: true,
                autoplay: true,
                autoplaySpeed: 8000
                }
            }   
            ]
    });
    $('.product-list-slider').not('.slick-initialized').slick({
        slidesToShow: 6,
        slidesToScroll: 1
    });

    $('.viewed-products-slider').not('.slick-initialized').slick({
        slidesToShow: 2,
        slidesToScroll: 1,
        dots: false,
        arrows: true,
        responsive: [{
            breakpoint: 1366,
            settings: {
                arrows: false,
                dots: true
            }
        },{
            breakpoint: 768,
            settings: {
                slidesToShow:1,
                arrows: false,
                dots: true
            }
        }]
    });

    var $progressBar = $('.progress-bar'),
        $prograssBarLabel = $('.slider__label'),
        $productSlider = $('.products-slider');

    $productSlider.on('beforeChange', function (e, slick, currentSlide, nextSlide) {
        var calc = ((nextSlide)/(slick.slideCount-1)) * 100;
        $progressBar
            .css('background-size', calc + '% 100%')
            .attr('aria-valuenow', calc );
        $prograssBarLabel.text( calc + '% completed');
    });
    $productSlider.not('.slick-initialized').slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        dots: true,
        infinite: true,
        customPaging: function(slider, i) {
            return '<div class="num-slider">' + '<span class="current-num">' + (i + 1) + '</span>' + ' / ' + '<span>' + slider.slideCount + '</span>' + '</div>';
        },
        arrows: true,
        prevArrow: $('.slider-prev'),
        nextArrow: $('.slider-next'),
        responsive: [{
            breakpoint: 1901,
            settings: {
                slidesToShow: 4
            }
        },{
            breakpoint: 1366,
            settings: {
                slidesToShow: 3
            }
        },{
            breakpoint: 1024,
            settings: {
                slidesToShow: 2
            }
        },{
            breakpoint: 768,
            settings: {
                dots: false,
                arrows: false,
                slidesToShow: 2.3,
                infinite: false
            }
        }]
    });


    $(window).on('resize', function () {
        var windowWidth = window.innerWidth
            || document.documentElement.clientWidth
            || document.body.clientWidth;

        if (windowWidth > 1023) {

        }
        if (windowWidth < 768) {
            $('.useful-products-list').not('.slick-initialized').slick({
                dots: true
            });
            $('.blog-list').not('.slick-initialized').slick({
                centerMode: true,
                infinite: false,
                centerPadding: '15px',
                slidesToShow: 1,
                slidesToScroll: 1
            })
        } else if (windowWidth >= 768)  {
            $('.useful-products-list.slick-initialized').slick('unslick');
            $('.blog-list.slick-initialized').slick('unslick');
        }
    }).trigger('resize');

    $('.benefits-section').not('.slick-initialized').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows: false,
        infinite: false,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2.2,
                    slidesToScroll: 1
                }
            },{
                breakpoint: 641,
                settings: {
                    slidesToShow: 2.3,
                    slidesToScroll: 1
                }
            }
        ]

    });

    /* forms */
    $('.validate_phone').mask('+38 (999) 999 99 99');
    // $('.validate_phone').mouseover(function () {
    //     if($(this).val() == '') {
    //         $(this).addClass('has-value');
    //     }
    // });
    // $('.validate_phone').mouseout(function () {
    //     if($(this).val() == '') {
    //         $(this).removeClass('has-value');
    //     }
    // });
    $('.form-control').each(function () {
        $(this).on('blur', function () {
            if($(this).val() != '') {
                $(this).addClass('has-value');
            } else {
                $(this).removeClass('has-value');
            }
        })
    });

    // $(document).load(function () {
    //     $('.form-control').each(function () {
    //         if($(this).val() != '') {
    //             $(this).addClass('has-value');
    //         } else {
    //             $(this).removeClass('has-value');
    //         }
    //     });
    // });


    $('.form_validate').formValidation();
    $('.select').styler();

    $(document).on('click', '.burger-menu', function() {
        if ($(this).parents('#header').hasClass('opened-menu')) {
            $(this).removeClass('opened').parents('#header').removeClass('opened-menu');
            $('.bg').removeClass('active');
        } else {
            $(this).addClass('opened').parents('#header').addClass('opened-menu').removeClass('closed-menu');
            $('.bg').addClass('active');
        }
    });

    // $(document).on('click', '.bg.active', function () {
    //     if($('#header').hasClass('opened-menu')) {
    //         $('#header').removeClass('opened-menu').addClass('closed-menu');
    //         $(this).removeClass('active');
    //         $('.burger-menu').removeClass('opened');
    //     }
    // });

    $(document).on('click', '.header-menu-dropdown .close, .callback-dropdown .close', function () {
        $(this).parents('.item-dropdown').removeClass('opened');
        $('.callback').removeClass('opened');
        $('.callback').removeClass('thx');
        // $('.bg').removeClass('active').css('z-index', '2');
    });

    $(document).mouseup(function (e){
        var div = $('.dropdown-main-container.opened , .header-menu-holder, #header.opened-menu, .search.opened, .filter-section.opened , .personal-menu-holder.opened');
        if (!div.is(e.target) && div.has(e.target).length === 0) {
            div.removeClass('opened');
            $('.bg').removeClass('active');
            $('.callback').removeClass('opened');
            $('#header').removeClass('opened-menu');
            $('.burger-menu').removeClass('opened');
            $('.header-panel').removeClass('search-opened');
        }
    });
    
    $(document).on('click', '.search', function () {
        $(this).addClass('opened');
        $(this).parents('.header-panel').addClass('search-opened');
        if($('#header').hasClass('opened-menu')){
            $('.burger-menu').trigger( "click" );
        }        
    });

    $(document).on('click', '.js-dropdown', function (e) {
        e.preventDefault();
        $(this).parents(".dropdown-main-container").toggleClass('opened');
    });
    $(document).on('click', '.js-close', function (e) {
        e.preventDefault();
        if($(this).parents(".dropdown-main-container").hasClass('opened')){
            $(this).parents(".dropdown-main-container").removeClass('opened');
        }        
    });
    $(document).on('click', '.js-clear-input', function (e) {
        e.preventDefault();
        if($(this).siblings(".search-input-holder").find("input").val() != ''){
            $(this).siblings(".search-input-holder").find("input").val("");
            $(this).parents('.search-input').removeClass("has-val") 
        }        
    });
    $(document).on('input keyup', '.input', function (e) {
        if( $(this).val()){
            $(this).parents('.search-input').addClass("has-val")
        }else{
            $(this).parents('.search-input').removeClass("has-val")
        }      
    });

    $(document).on('click', '.dropdown-title-mob', function () {             
        $(this).parents(".mobile-menu-dropdown-city").removeClass("opened");              
    }); 
    $(document).on('click', '.js-open-city', function (e) {  
        e.preventDefault();           
        $(this).parents(".mobile-menu-dropdown-content").siblings(".mobile-menu-dropdown-city").addClass("opened");              
    }); 

    // callback thx
    $('.callback-dropdown form').formValidation().on('submit', function (e) {
	    e.preventDefault();
	    if (!$(this).find('.input-holder').hasClass('error')) {
            $(this).parents('.callback').addClass('thx');    
            $(this).find('.input').val("").removeClass("has-value");
            $(this).find('.input-holder').removeClass("correct");
	    }
    });

    $('.product-item.helping form').formValidation().on('submit', function (e) {
        e.preventDefault();
        if(!$(this).find('.input-holder').hasClass('error')) {
            // var form_serialized = $(this).serialize();
            // callback_form(form_serialized);
            var callback_form_container = $('.product-item.helping');
            callback_form_container.addClass('thx');
            $(this).find('.input').val("").removeClass("has-value");
            $(this).find('.input-holder').removeClass("correct");
            setTimeout(function () {
                callback_form_container.removeClass('thx');
            }, 5000);
        }
    });
    function callback_form(form_serialized) {
        var callback_form_container = $('.product-item.helping');

        // $.ajax({
        //     url: "",
        //     type: "POST",
        //     beforeSend: function () {
        //     },
        //     data: form_serialized,
        //     success: function (data) {
        //         callback_form_container.addClass('thx');
        //
        //         setTimeout(function () {
        //             $('.product-item.helping').removeClass('thx');
        //         }, 3000);
        //     }
        // })
    }
    
    password_view();
    function password_view(){
        $(document).on("click" , ".pass_icon", function(){
            $(this).toggleClass("active_eye");
            if($(this).hasClass("active_eye")){
                $(this).siblings(".input").prop("type" , "text");
            }
            else{
                $(this).siblings(".input").prop("type" , "password");
            }
        })
    }; 

    $(document).on("click" , ".js-open-map" , function(){
        var gmap = $(this);
        if($(this).parents(".col").hasClass("opened")){
            $(this).parents(".col").removeClass("opened");
        } else {
            $(this).parents(".col").addClass("opened").siblings().removeClass("opened");
        }

        GoogleMap.setCenter({lat: +gmap.data('gmaps_s'), lng: +gmap.data('gmaps_n')});
        GoogleMap.setZoom(18);
        GoogleMarker.setPosition({lat: +gmap.data('gmaps_s'), lng: +gmap.data('gmaps_n')});
    });

    $(document).on('click', '[data-tab] , [data-model] , [data-price]', function (e) {
        e.preventDefault()
        if($(this).attr('data-tab')) {
            $(this).addClass('selected').siblings('[data-tab]').removeClass('selected');
            $(this).parents('.technoexchange-section').find('[data-content=' + $(this).data('tab') + ']').addClass('selected').siblings('[data-content]').removeClass('selected');
            setTimeout(function() {
                $('input, select').trigger('refresh');
              }, 1)
        }
        if($(this).attr('data-model')) {
            $(this).addClass('selected').siblings('[data-model]').removeClass('selected');
            $(this).parents('.technoexchange-section').find('[data-memory=' + $(this).data('model') + ']').addClass('selected').siblings('[data-memory]').removeClass('selected');
        }
        if($(this).attr('data-price')){
            $(this).toggleClass('selected').siblings().removeClass("selected");
        }
     });

     $(document).on('click' , '.js-share' , function(e){
         e.preventDefault();
         console.log("js-share");
         if($(this).find(".article-share").hasClass('active')) {
             $(this).find(".article-share").removeClass("active");
             $(".article-link").addClass("active");
        }
        else {
            $(this).find('.article-link').removeClass("active");
            $(this).find(".article-saved").addClass("active");
            setTimeout(function(){ 
                $(".article-saved").removeClass("active");
                $('.article-share').addClass('active');
            } , 3000);           
        }
     });

    $(document).on('click' , ".js-open-personal-menu , .js-close-pers-menu" , function(e){
        e.preventDefault();
        var  personalMenu =  $(this).parents(".personal-page-holder").find(".personal-menu-holder");
        if( $(personalMenu).hasClass("opened")) {
            $(personalMenu).removeClass("opened");
            $(".bg").removeClass("active");
        } else {
            $(personalMenu).addClass("opened");
            $(".bg").addClass("active");
        } 
        if($(this).hasClass("close")) {
            $(personalMenu).removeClass("opened");
            $(".bg").removeClass("active");
        }  
    });
});

//accordeon
function  accordeon () {
    $('.accordeon_head').click(function(){
        if($(this).parent().hasClass("active")){
            $(this).parent().removeClass("active")
        } else {
            $(this).parent().addClass("active").siblings().removeClass('active');
        }
        $(this).closest(".accordeon_items").find('.accordeon_content').slideUp().find('.accordeon_item').removeClass("active");
        if(!$(this).next().is(":visible")) {
            $(this).next().slideDown();
        }
    });   
}

function filterBox() {
    $('.filter-box__title').on('click', function () {
        if($(this).parent().hasClass('active')) {
            $(this).parent().removeClass('active');
            $(this).next().slideUp();
        } else {
            $(this).parent().addClass('active');
            $(this).next().slideDown();
        }
    })
}

function priceSlider() {
    var rangeMinValue = 0,
        rangeMaxValue = 1000;
    $('.ui-slider-track').slider({
        range: true,
        min: rangeMinValue,
        max: rangeMaxValue,
        values: [rangeMinValue, rangeMaxValue],
        slide: function (event, ui) {
            $('.min-price').val(ui.values[0]);
            $('.max-price').val(ui.values[1]);
        }
    });

    $('.min-price').change(function () {
        var val1 = $('.min-price').val(),
            val2 = $('.max-price').val();

        if (parseInt(val1) > parseInt(val2)) {
            val1 = val2;
            $('.min-price').val(val1);
            $('.handle-min-price').html(val1);
        }
        $('.handle-min-price').html(val1);
        $('.ui-slider-track').slider('values', 0, val1);
    });

    $('.max-price').change(function () {
        var val1 = $('.min-price').val(),
            val2 = $('.max-price').val();

        if (parseInt(val2) > rangeMaxValue) {
            $('.max-price').val(rangeMaxValue);
        }
        if (val1 < 0) {
            $('.min-price').val(val1);
        }
        if (parseInt(val1) > parseInt(val2)) {
            val2 = val1;
            $('.max-price').val(val2);
            $('.handle-max-price').text(val2);
        }
        $('.handle-max-price').html(val2);
        $('.ui-slider-track').slider('values', 1, val2);
    })
}

function toggleFilter() {
    $(document).on('click', '.filter-link', function (e) {
        e.preventDefault();

        $('.filter-section').addClass('opened');
        $('.bg').addClass('active');
    });

    $(document).on('click', '.close-filter', function () {
        $('.filter-section').removeClass('opened');
        $('.bg').removeClass('active');
    })
}
  
function openingText() {
    var text = '';

    $(document).on('click', '.opening-text', function (e) {
        e.preventDefault();

        if($(this).parent().hasClass('opened')) {
            $(this).parent().removeClass('opened');
            // $(this).find('span').text(text);
        } else {
            $(this).parent().addClass('opened');
            // text = $(this).text();
            // $(this).find('span').text('Свернуть');
        }
    })
}

function mobileMenu() {
    $(document).on('click', '.mobile_menu .submenu_section a', function () {
        $(this).siblings('.submenu').addClass('active');
    });
    $(document).on('click', '.mobile_menu .back', function() {
        $(this).closest('.submenu').removeClass('active');
    });
}

$(function() {
    $(".js-autocomplete").autocomplete({
      search: function(event, ui) {
        setTimeout(() => {
          let w = $(this).autocomplete("widget").find("div"),
            re = new RegExp("("+this.value+")", "i");
          w.html((i, html) =>

            html.replace(re, "<span class='active-letter'>$1</span>")
          );
        },100);
      },
      source: [
        "Полтава",
        "Полонное",
        "Полтава1",
        "Полонное1",
        "Полтава2",
        "Полонное2",
        "Полтава3",
        "Полонное3",
        "Луцк",
        "Львов",
        "Киев",
        "Запорожье",
        "Кременчуг",
        "Конев",
        "Харьков",
        "Одесса",
        "Днепр",
        "Черкассы"
      ]
    });
});

function hoverDropdownMenu() {
    /* dropdown menu */
    $('.menu-section .menu > li').hover(function () {
        if($(this).children('.menu-dropdown').length > 0) {
            $(this).stop().addClass('hover');
            $('.bg').stop().addClass('active');
            $('#header').stop().addClass('opened-dropdown');
        }
    }, function () {
        $(this).stop().removeClass('hover');
        $('.bg').stop().removeClass('active');
        $('#header').stop().removeClass('opened-dropdown');
    });
}

function initMap() { 
    var image = 'img/map-marker.svg';
    if(document.querySelector('.map')!==null){
        window.GoogleMap = new google.maps.Map(document.querySelector('.map'), {disableDefaultUI: true});
        window.GoogleMarker = new google.maps.Marker({map: GoogleMap, icon: image });
    }

    //for shops page many maps
    var maps = [];
    var markers = [];
    var $maps = $('.shop_map');
    $.each($maps, function (i, value) {        
        var uluru = { lat: parseFloat($(value).attr('lat')), lng: parseFloat($(value).attr('lng')) };
        var mapDivId = $(value).attr('id');
        maps[mapDivId] = new google.maps.Map(document.getElementById(mapDivId), {
            zoom: 17,
            center: uluru,
            disableDefaultUI: true
        });
        markers[mapDivId] = new google.maps.Marker({
            position: uluru,
            icon: image,
            map: maps[mapDivId]
        });
    })
}

function toggleMap (){
    $(document).on("click" , ".js-toggle-map" , function(){
        $(this).parents(".conteiner-map-holder").toggleClass('map-opened').find(".col_map").slideToggle();
    });
}

//form on client page and popup send resume 
function writeUsForm (){
    $('.js-write_form').formValidation().on('submit', function (e) {
        e.preventDefault();      
        if (!$(this).find('.input-holder').hasClass('error')) {
            $(this).parent().addClass("thx");    
        }
    });
}

function addNewAddress (){
    $(document).on("click" , ".js-addr-add" , function(e){
        e.preventDefault();
        if( $(this).parents(".addr-conteiner").hasClass("empty-address")) {
            $(this).parents(".addr-conteiner").removeClass("empty-address");
            $(this).parents(".addr-add").addClass("active");
        }  
    });
}
function serviceSlider (){
    $('.service-slider').not('.slick-initialized').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        dots: false,
        arrows: true,
        responsive: [{
            breakpoint: 1365,
            settings: {
                arrows: false,
                slidesToShow: 1,
                dots: true
            }
        }]
    });   

}

function initCountdown() {
    $('.countdown').each(function () {
        $(this).countdown($(this).data('date'), function (event) {
            $(this).html(event.strftime(''
                + '<div class="time days flip"><span class="count">%D</span></div>'
                + '<div class="time hours flip"><span class="count">%H</span></div>'
                + '<div class="time minutes flip"><span class="count">%M</span></div>'
                + '<div class="time seconds flip"><span class="count">%S</span></div>'
            ));
        });
    });
}

/* modals */
function initModal() {
    var main_modal = $('#modal-main');

    
	// при закриванні модалі
	main_modal.on('hidden.bs.modal', function () {});

	// при показуванні модалі
	main_modal.on('show.bs.modal', function () {});

	// клік по підкладці модалі
	$(document).on('click', '.modal-backdrop', function () {});

	$(document).on('click', '[data-openmodal]', function(e) {
        e.preventDefault();
        
		var link = $(this).data('openmodal');
		main_modal.find('.modal-dialog').load(link, function() {
			main_modal.modal('show');
			$('.form_validate').formValidation();
            $('.validate_phone').mask('+38 (999) 999 99 99');
            $('.form_validate').formValidation();
            $('.customScrollbar-modal').mCustomScrollbar({theme: 'light-3'});                
            accordeon (); //for popup basket
            serviceSlider (); //service slider popup basket
            writeUsForm (); //for popup send resume

            $('.js-input').each(function () {
                $(this).on('blur', function () {
             		if($(this).val() != '') {$(this).addClass('has-value');} 
             		else {$(this).removeClass('has-value');}
                    })                    
            });
            $(".upload-btn-wrapper input[type=file]").change(function(){
                var filename = $(this).val().replace(/.*\\/, "");
                $("#file-name").html(filename);																				
            }); 
            $('#login_form').formValidation().on('submit', function (e) {
                e.preventDefault();
                if (!$(this).find('.input-holder').hasClass('error')) {
                        var form_serialized = $(this).serialize();                       
                        $(this).parents('.first-step').addClass('close-step').siblings('.second-step').addClass("open-step");                        		       
                }
            });
            function pass_success(form_serialized , val_email) {
                $.ajax({
                    url: "",
                    beforeSend: function () {
                        $(".email").text(val_email);
                    },
                    data: form_serialized,
                    success: function (data) {
                        $('.forgot-pass-form ').addClass('thx-info');                       
                    }
                });
            }
            $('#forgot-pass_form').formValidation().on('submit', function (e) {
                e.preventDefault();
                if (!$(this).find('.input-holder').hasClass('error')) {
                    var form_serialized = $(this).serialize();
                    var val_email = $(this).find('.email_f').val()
                    pass_success(form_serialized , val_email);
                }
            }); 

		})
	})
}



