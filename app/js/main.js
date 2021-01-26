$(function () {

    var containerEl1 = document.querySelector('[data-ref="mix1"]');
    var containerEl2 = document.querySelector('[data-ref="mix2"]');

    var mixer1 = mixitup(containerEl1, {
    selectors: {
      control: '.filter-1'
    }
  });

    var mixer2 = mixitup(containerEl2, {
      selectors: {
        control: '.filter-2'
      }
  });


    $('.top-slider__inner').slick({
        dots: true,
        arrows: false,
        fade: true,
        autoplay: true,
        autoplaySpeed: 3000
    });


});

