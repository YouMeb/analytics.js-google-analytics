'use strict';

var proto = GoogleAnalytics.prototype;
var scriptURL = '//www.google-analytics.com/analytics.js';

module.exports = GoogleAnalytics;

function GoogleAnalytics(options) {
  if (!(this instanceof GoogleAnalytics)) {
    return new GoogleAnalytics(options);
  }
  this.options = options || {};
}

proto.trackingID = function () {
  return this.options.trackingID;
};

proto.init = function (analytics, cb) {
  // 安裝全域 ga 變數
  require('./ga');

  ga('create', this.trackingID(), {
    userId: analytics.user.trackingUID()
  });

  // 紀錄 pageview  
  analytics.on('pageview', function () {
    ga('send', 'pageview');
  });

  cb();
};
