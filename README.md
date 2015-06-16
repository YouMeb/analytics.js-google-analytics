google-analytics
================

```javascript
var Analytics = require('YouMeb/analytics.js');
var GoogleAnalytics = require('YouMeb/analytics.js-google-analytics');

var analytics = Analytics()
  .use(GoogleAnalytics({ trackingID: 'UA-XXXXXXXX-X' }))
  .init();

analytics.read(function () {
  // ...
});
```
