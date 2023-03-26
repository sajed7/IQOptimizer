/*!-----------------------------------------------------------------
    Name: MonsterPlay - eSports and Gaming HTML Template
    Version: 1.2.0
    Author: nK
    Website: https://nkdev.info/
    Purchase: https://themeforest.net/user/_nk/portfolio
    Support: https://nk.ticksy.com/
    License: You must have a valid license purchased only from ThemeForest (the above link) in order to legally use the theme for your project.
    Copyright 2022.
-------------------------------------------------------------------*/
    /******/ (function() { // webpackBootstrap
var __webpack_exports__ = {};
const $ = window.jQuery;
const $doc = $(document);
const perfData = window.performance.timing; // The PerformanceTiming interface represents timing-related performance information for the given page.

const EstimatedTime = -(perfData.loadEventEnd - perfData.navigationStart);
const time = Math.max(500, Math.min(1000, parseInt(EstimatedTime / 1000 % 60, 10) * 100)); // Preloader Animation

$doc.on('DOMContentLoaded', () => {
  const $preloader = $('.mpl-preloader');
  const $preloaderProgress = $preloader.find('.mpl-preloader-progress'); // No preloader available.

  if (!$preloader.length || !$preloaderProgress.length) {
    $doc.trigger('mpl.preloader.hide');
    return;
  }

  $preloaderProgress.children('div').css({
    'transition-duration': "".concat(time, "ms"),
    width: '100%'
  });
  let preloaderTimer;

  function closePreloader() {
    clearTimeout(preloaderTimer);
    $preloader.addClass('mpl-preloader-hide');
    $doc.trigger('mpl.preloader.hide');
  }

  if ($preloader.length) {
    preloaderTimer = setTimeout(closePreloader, time);
  }
});
/******/ })()
;