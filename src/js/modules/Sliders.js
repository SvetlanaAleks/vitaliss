const Sliders = (function () {
  const headerSlider = $(".js-slider-header");
  const productsSlider = $(".js-slider-products");

  return {
    initHeaderSlider: function () {
      headerSlider.on("init", function (event, slick, direction) {
        headerSlider.addClass("init");
      });
      headerSlider.slick({
        dots: true,
        infinite: true,
        speed: 500,
        fade: true,
        cssEase: "linear",
        arrows: false,
        autoplay: true,
        autoplaySpeed: 5000,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 480,
            settings: {
              adaptiveHeight: true,
            },
          },
        ],
      });
    },
    initProductSlider: function () {
      $(".js-slider-product-for").not(".slick-initialized").slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: ".js-slider-product-nav",
      });
      $(".js-slider-product-nav").not(".slick-initialized").slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        asNavFor: ".js-slider-product-for",
        dots: false,
        // centerMode: true,
        focusOnSelect: true,
      });
    },
    initProductsSlider: function () {
      productsSlider.not(".slick-initialized").slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        variableWidth: true,
        dots: false,
        prevArrow:
          '<button class="prev"><i class="fico fico-arrowSlider"></i></button>',
        nextArrow:
          '<button class="next"><i class="fico fico-arrowSlider"></i></button>',
      });
    },
    destroyProductsSlider: function () {
      productsSlider.filter(".slick-initialized").slick("unslick");
    },
    init: function () {
      Sliders.initHeaderSlider();
      // Sliders.initProductSlider();
    },
  };
})();

export default Sliders;
