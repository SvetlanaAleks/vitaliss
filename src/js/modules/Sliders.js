const Sliders = (function () {
  const headerSlider = $(".js-slider-header");
  const productSlider = $(".js-slider-product");
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
      });
    },
    initProductSlider: function () {
      $(".js-slider-product-for").slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: ".js-slider-product-nav",
      });
      $(".js-slider-product-nav").slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        asNavFor: ".js-slider-product-for",
        dots: false,
        // centerMode: true,
        focusOnSelect: true,
      });
    },
    initProductsSlider: function () {
      productsSlider.slick({
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
    init: function () {
      Sliders.initHeaderSlider();
      Sliders.initProductSlider();
      Sliders.initProductsSlider();
    },
  };
})();

export default Sliders;
