// Main JS module
// objectFitImages polyfill
import objectFitImages from "object-fit-images";
import Sliders from "./modules/Sliders";
import Controls from "./modules/Controls";
import Popup from "./modules/Popup";
import Menu from "./modules/Menu";
import layout from "./global/layout";

$(function () {
  Sliders.init();
  Controls.init();
  Popup.init();
  Menu.init();

  objectFitImages();

  layout.layoutHandler({
    onInit: (layout) => {
      if (layout.WIN_WIDTH >= 480) {
        Sliders.initProductsSlider();
      } else if (layout.WIN_WIDTH <= 479) {
        Sliders.destroyProductsSlider();
      }
    },

    afterResize: (layout) => {
      if (layout.WIN_WIDTH >= 480) {
        Sliders.initProductsSlider();
      } else if (layout.WIN_WIDTH <= 479) {
        Sliders.destroyProductsSlider();
      }
    },
  });
});
