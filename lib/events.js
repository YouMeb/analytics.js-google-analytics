'use strict';

module.exports = function (event, data) {
  return pageview(event, data)
    || defaultValue(event, data);
};

function pageview(event, data) {
  if (event === 'pageview') {
    return {
      hitType: 'pageview',
      page: location.pathname + location.search,
      title: document.title
    };
  }
}

function defaultValue(event, data) {
  return {
    hitType: 'urad',
    eventCategory: 'urad',
    eventAction: event
  };
}
