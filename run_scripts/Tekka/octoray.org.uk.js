var http = require("http"); module.exports = {
  'Tekka Dummy Test Content Direct Page 1' : function (client) {
    client
      .url('http://vod.69vidbox.com/')
      .waitForElementVisible('body', 5000)
      //.verify.attributeContains("div[data-pfi-button-id]", "data-pfi-button-id", "hidebutton")
      //.verify.attributeContains("div[data-pfi-content-url]", "data-pfi-content-url", "/staging/landing.php")
      //.verify.attributeContains("div[data-pfi-service-id]", "data-pfi-service-id", "19")
      //.verify.attributeContains("div.merchant-button.btn2", "data-pfi-service-id", "17")
      //.verify.containsText("div[data-pfi-button-id]", "Subscribee")
      //.verify.visible("div.merchant-button.btn1")
      //.verify.cssProperty("div.merchant-button.btn1", "font-size", "15px")
      //.verify.cssProperty("div.merchant-button.btn1", "font-family", "Courier New")
      //.verify.cssProperty("div.merchant-button.btn1", "color", "rgba(0, 0, 0, 1)")
      //.verify.cssProperty("div.merchant-button.btn1", "background-color", "rgb(0, 140, 255)")
      //.verify.cssProperty("div.merchant-button.btn1", "opacity", "0.4")
      //.verify.cssProperty("div.merchant-button.btn1", "text-decoration", "none")
      .verify.cssProperty("#prelander-v2-container #step1", "font-family", "Eurostile,Helvetica Neue,Arial,Helvetica,Geneva,sans-serif")
      .verify.cssProperty("#prelander-v2-container #step1 .prelander-v2-info", "font-size", "2px")
      .verify.cssProperty("#prelander-v2-container #step1 .prelander-v2-button-confirm-select", "color", "rgba(255, 255, 255, 1)")
      //.verify.cssProperty("#prelander-v2-container #step1 .prelander-v2-button-confirm-select", "background", "linear-gradient(#43b257, #1c9933)")
      .verify.cssProperty("#prelander-v2-container #step1 .prelander-v2-button-confirm-select", "font-size", "13px")
      .verify.containsText(".prelander-v2-button-confirm-select", "Select now & continue for step #2")
      .verify.containsText(".prelander-v2-info", "Select your 69VidBox")
      .pause(2000) .end();
  },
  
 // 'Tekka Dummy Test Content Direct Page 2' : function (client) {
  // '   client
   // '    .url('http://octoraypfi.co.uk/staging/wine.php')
       // '.waitForElementVisible('body', 5000)
       // '.verify.attributeContains("div[data-pfi-button-id]", "data-pfi-button-id", "a1")
       // '.verify.attributeContains("div[data-pfi-content-url]", "data-pfi-content-url", "/staging/landing.php")
       // '.verify.attributeContains("div[data-pfi-service-id]", "data-pfi-service-id", "357")
       // '.verify.containsText("div[data-pfi-button-id]", "September 15, 2015")
       // '.verify.cssProperty("div.btn1c", "font-size", "20px")
       // '.verify.cssProperty("div.btn1c", "font-family", "Courier New")
       // '.verify.cssProperty("div.btn1c", "color", "rgba(255, 255, 255, 1)")
       // '.verify.cssProperty("div.btn1c", "background-color", "rgba(0, 124, 255, 1)")
      // ' .verify.cssProperty("div.btn1c", "opacity", "0.4")
       // '.verify.cssProperty("div.btn1c", "text-decoration", "none")
       // '.pause(2000) .end();
  // ' },
 // ''Tekka Dummy Test Proxy Pass' : function (client) {
    // ' client
     // '  .url('http://octoray.org.uk/staging/test2.php')
      // ' .waitForElementVisible('body', 5000)
      // ' .verify.attributeContains("div[data-pfi-button-id]", "data-pfi-button-id", "hidebutton")
      // ' .verify.attributeContains("div[data-pfi-content-url]", "data-pfi-content-url", "/staging/landing.php")
      // ' .verify.attributeContains("div[data-pfi-service-id]", "data-pfi-service-id", "19")
      // ' .verify.attributeContains("div.merchant-button.btn2", "data-pfi-service-id", "17")
      // ' .verify.containsText("div[data-pfi-button-id]", "Subscribee")
      // ' .verify.cssProperty("div.merchant-button.btn1", "font-size", "15px")
      // ' .verify.cssProperty("div.merchant-button.btn1", "font-family", "Courier New")
       // '.verify.cssProperty("div.merchant-button.btn1", "color", "rgba(0, 0, 0, 1)")
       // '.verify.cssProperty("div.merchant-button.btn1", "background-color", "(0, 125, 227, 1)")
      // ' .verify.cssProperty("div.merchant-button.btn1", "opacity", "0.4")
      // ' .verify.cssProperty("div.merchant-button.btn1", "text-decoration", "none")
      // ' .click('div.merchant-button.btn1')
     // '  .pause(2000)
      // ' .end();
  // ' },
  
  "Size Check1" : function (client) {
    var request = http.request({
        host: "vod.69vidbox.com",
        port: 80,
        path: "/assets/vod-content/v2/js/script.js",
        method: "HEAD"
    }, function (response) {
      client
        .verify.equal(response.headers["content-length"], 2908, '/assets/vod-content/v2/js/script.js Same file size');
      client.end();
    }).on("error", function (err) {
      console.log(err);
      client.end();
    }).end();
  },
  "Size Check2" : function (client) {
    var request = http.request({
        host: "vod.69vidbox.com",
        port: 80,
        path: "/assets/vod-content/v2/js/ewankApp.js",
        method: "HEAD"
    }, function (response) {
      client
        .verify.equal(response.headers["content-length"], 71391, '/assets/vod-content/v2/js/ewankApp.js Same file size');
      client.end();
    }).on("error", function (err) {
      console.log(err);
      client.end();
    }).end();
  },
  "Size Check3" : function (client) {
    var request = http.request({
        host: "vod.69vidbox.com",
        port: 80,
        path: "/assets/vod-content/v2/css/style.css",
        method: "HEAD"
    }, function (response) {
      client
        .verify.equal(response.headers["content-length"], 179222, '/assets/vod-content/v2/css/style.css Same file size');
      client.end();
    }).on("error", function (err) {
      console.log(err);
      client.end();
    }).end();
  }
};
