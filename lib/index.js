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
  require('./ga');
  ga('create', this.trackingID(), {
    userId: analytics.user.trackingID()
  });
  cb();
};
