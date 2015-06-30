'use strict';

var events = require('./events');
var proto = GoogleAnalytics.prototype;
var scriptURL = '//www.google-analytics.com/analytics.js';

module.exports = GoogleAnalytics;

function GoogleAnalytics(options) {
  if (!(this instanceof GoogleAnalytics)) {
    return new GoogleAnalytics(options);
  }
  this.options = options || {};
}

proto.name = 'GoogleAnalytics';

proto.trackingID = function () {
  return this.options.trackingID;
};

proto.init = function (analytics, cb) {
  // 安裝全域 ga 變數
  require('./ga');

  ga('create', this.trackingID(), {
    userId: analytics.user.getTrackingUID()
  });

  // 把所有追蹤資料導向 ga
  analytics.on('track', function (event) {
    ga('send', events(event));
  });

  cb();
};
