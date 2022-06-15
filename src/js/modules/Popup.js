import noScroll from "../global/noScroll";
const Popup = (function () {
  "use strict";
  const popUpBlock = $(".js-popup");
  const linkShowPopUp = $(".js-show-popup");
  const ButtonShowFramePopUp = $(".js-show-frame-popup");
  const framePopUpBlock = $(".js-frame-popup");
  const overlay = $(".js-overlay");
  return {
    initFramePopup: function (){
      ButtonShowFramePopUp.click(function (e){
        framePopUpBlock.toggleClass("active");
        overlay.addClass("active");
        framePopUpBlock.removeClass("menu-mobile--active");
        $(".js-burger").removeClass("burger--active");
        noScroll.on();
      })
    },
    closeFramePopup: function () {
      $(".js-frame-close").click(function (e) {
        framePopUpBlock.removeClass("active");
        overlay.removeClass("active");
        noScroll.off();
      });
    },
    initPopUp: function () {
      linkShowPopUp.click(function (e) {
        e.preventDefault();
        const _this = $(this);
        const target = $(_this.data("target"));
        _this.toggleClass("active");
        target.toggleClass("active");
        overlay.addClass("active");
        $(".menu-mobile").removeClass("menu-mobile--active");
        $(".js-burger").removeClass("burger--active");
        noScroll.on();
      });
    },
    closePopup: function () {
      $(".js-close").click(function (e) {
        e.preventDefault();
        popUpBlock.removeClass("active");
        linkShowPopUp.removeClass("active");
        overlay.removeClass("active");
        noScroll.off();
      });
    },
    init: function () {
      Popup.initPopUp();
      Popup.closePopup();
      Popup.initFramePopup();
      Popup.closeFramePopup();
    },
  };
})();

export default Popup;
