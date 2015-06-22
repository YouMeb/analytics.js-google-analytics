'use strict';

module.exports = function (event) {
  return pageview(event)
    || defaultValue(event);
};

function pageview(event) {
  if (event.fulltype === 'pageview') {
    return {
      hitType: 'pageview',
      page: location.pathname + location.search,
      title: document.title
    };
  }
}

function defaultValue(event) {
  return {
    hitType: 'urad',
    eventCategory: event.getCategory() || 'urad',
    eventAction: event.getType(),
    eventValue: event.value
  };
}
