$(function(){

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

