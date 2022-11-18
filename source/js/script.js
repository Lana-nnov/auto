$('.notice__slider').slick({
  dots: true,
  arrows: true,
  // adaptiveHeight: true,
  // infinite: false, слайдер не бесконечен
  // autoplay: true,
  // autoplaySpeed: 500,
  // waitForAnimate: false,
  // asNavFor: '.sliderBig', связать с другим слайдером 43:00
  //appendArrows: $('.content')
  //appendDots: $('.content')
  fade: true,
  rows: 0, ///!!!!!! помогает убрать обертку - лишний div вокруг каждого слайда
  responsive: [{
    breakpoint: 768,
    settings: {
      arrows: false
    }
  }]
});

$('.notice__action').slick({
  dots: true,
  arrows: true,
  // adaptiveHeight: true,
  // infinite: false, слайдер не бесконечен
  // autoplay: true,
  // autoplaySpeed: 500,
  // waitForAnimate: false,
  // asNavFor: '.sliderBig', связать с другим слайдером 43:00
  //appendArrows: $('.content')
  //appendDots: $('.content')
  fade: true,
  rows: 0, ///!!!!!! помогает убрать обертку - лишний div вокруг каждого слайда
  responsive: [{
    breakpoint: 768,
    settings: {
      arrows: false
    }
  }]
});

$('.slider2').slick({
  dots: true,
  arrows: true,
  // adaptiveHeight: true,
  // infinite: false, слайдер не бесконечен
  // autoplay: true,
  // autoplaySpeed: 500,
  // waitForAnimate: false,
  // asNavFor: '.sliderBig', связать с другим слайдером 43:00
  //appendArrows: $('.content')
  //appendDots: $('.content')
  fade: true,
  variableWidth: true, /// ПОМОГАЕТ ЗАДАТЬ КОНКРЕТНО ШИРИНУ СЛАЙДА!!
  rows: 0, ///!!!!!! помогает убрать обертку - лишний div вокруг каждого слайда, это не работает(
  responsive: [{
    breakpoint: 768,
    settings: {
      arrows: false
    }
  }]
});

console.log(33);

var waresPopularSlider = $('.wares--popular .wares__list');

console.log(waresPopularSlider);

$('.wares__list').slick({
      slidesToShow: 4,
      slidesToScroll: 4,
      dots: false,
      arrows: true,
      rows: 0, // убирает лишний div обертку у каждого слайда
      // variableWidth: true,
      responsive: [{
        breakpoint: 1232,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3
        }
      },
      {
        breakpoint: 1024,
        settings: {
          arrows: false,
          dots: true,
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          dots: true,
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }]
    });



console.log(33);
