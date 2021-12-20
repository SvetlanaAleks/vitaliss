// Main JS module
// objectFitImages polyfill
import objectFitImages from "object-fit-images";
import Sliders from "./modules/Sliders";
import PerfectScrollbar from "perfect-scrollbar";
import Controls from "./modules/Controls";
import Popup from "./modules/Popup";

$(function () {
  Sliders.init();
  Controls.init();
  Popup.init();

  objectFitImages();

  // scroll;
  // const ps = new PerfectScrollbar("#js-scroll-hits", {
  //   wheelSpeed: 2,
  //   maxScrollbarLength: 100,
  // });
});
