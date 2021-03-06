$(function(){

  $('.shop__filter-btn').on('click', function (){
    $('.shop__filters').slideToggle();
  });

  $('.menu-btn').on('click', function (){
    $('.menu__list').toggleClass('menu__list--active');
  });

  $('.product-tab__box-item').on('click', function(e){
    e.preventDefault();
    $('.product-tab__box-item').removeClass('product-tab__box-item--active');
    $(this).addClass('product-tab__box-item--active');

    $('.product-tab__content-item').removeClass('product-tab__content-item--active');
    $($(this).attr('href')).addClass('product-tab__content-item--active');
  });

  $('.porduct-item__num').styler();

  $('.product-slide__thumb').slick({
    asNavFor: '.product-slide__big',
    focusOnSelect: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    vertical: true,
    draggable: false
  });
  $('.product-slide__big').slick({
    asNavFor: '.product-slide__thumb',
    draggable: false,
    arrows: false,
    fade: true
  });

  $(".filter-price__input").ionRangeSlider({
    type: "double",
    prefix: "$",
    onStart: function (data) {
      $('.filter-price__from').text(data.from);
      $('.filter-price__to').text(data.to);
    },
    onChange: function (data) {
      $('.filter-price__from').text(data.from);
      $('.filter-price__to').text(data.to);
  },
  });

    $('.product-slider__items').slick({
      infinite: true,
      slidesToShow: 4,
      slidesToScroll: 4,
      arrows: false,
      responsive: [
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3
          }
        },
        {
          breakpoint: 900,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    });

    $('.next').on('click', function() {
      $('.product-slider__items').slick('slickNext');
    });

    $('.prev').on('click', function() {
      $('.product-slider__items').slick('slickPrev');
    });

    $('.top-slider__inner').slick({
        dots: true,
        arrows: false,
        fade: true,
        autoplay: true,
        autoplaySpeed: 3000
    });
    

    $('.star-rate').rateYo({
      starWidth: "17px",
      normalFill: "#ccccce",
      ratedFill: "#ffc35b",
      readOnly: true,
    });

    $('.filter-products__star-rate').rateYo({
      starWidth: "11px",
      normalFill: "#d6d6d6",
      ratedFill: "#ffcc00",
      spacing: "5px",
      readOnly: true,
    });

    $('.shop__product__star-rate').rateYo({
      starWidth: "17px",
      normalFill: "#ccccce",
      ratedFill: "#ffc35b",
      spacing: "7px",
      readOnly: true,
    });

    $('.product-item__star').rateYo({
      starWidth: "17px",
      normalFill: "#ccccce",
      ratedFill: "#ffc35b",
      spacing: "7px",
      readOnly: true,
    });

    if(document.querySelector('[data-ref="mix1"]')){
      var containerEl1 = document.querySelector('[data-ref="mix1"]');
  
      var mixer1 = mixitup(containerEl1, {
        selectors: {
          control: '.filter-1'
        }
      });
    }
  
    if(document.querySelector('[data-ref="mix2"]')) {
      var containerEl2 = document.querySelector('[data-ref="mix2"]');
  
      var mixer2 = mixitup(containerEl2, {
        selectors: {
          control: '.filter-2'
      }
    });
    }
 
    
});

