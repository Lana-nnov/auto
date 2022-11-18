'use strict';

(function () {
  if (window.$) {
    var $ = window.$;
    var $tabs = $('.tabs__link');

    $tabs.click(function (evt) {
      evt.preventDefault();
      var $this = $(evt.target);
      var $targetSelector = $this.attr('href');
      var $target = $($targetSelector);
      var activePanelClass = 'tabs__panel--active';
      var activeTabClass = 'tabs__link--active';


      if ($this.hasClass('info__section-link') && $this.hasClass('tabs__link--active')) {
        $this.closest('.tabs__panel--active').removeClass(activePanelClass);
        $this.removeClass(activeTabClass);
        return;
      }

      $target.closest('.tabs').find('.' + activePanelClass).removeClass(activePanelClass);
      $target.addClass(activePanelClass);
      $this.closest('.tabs').find('.' + activeTabClass).removeClass(activeTabClass);
      $this.addClass(activeTabClass);

    });
  }
})();
