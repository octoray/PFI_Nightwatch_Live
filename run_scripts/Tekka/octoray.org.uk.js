var http = require("http"); module.exports = {
  'Tekka Dummy Test Content Direct Page 1' : function (client) {
    client
      .url('http://octoraypfi.co.uk/staging/test2.php')
      .waitForElementVisible('body', 5000)
      .verify.attributeContains("div[data-pfi-button-id]", "data-pfi-button-id", "hidebutton")
      .verify.attributeContains("div[data-pfi-content-url]", "data-pfi-content-url", "/staging/landing.php")
      .verify.attributeContains("div[data-pfi-service-id]", "data-pfi-service-id", "19")
      .verify.attributeContains("div.merchant-button.btn2", "data-pfi-service-id", "17")
      .verify.containsText("div[data-pfi-button-id]", "Subscribee")
      .verify.visible("div.merchant-button.btn1")
      .verify.cssProperty("div.merchant-button.btn1", "font-size", "15px")
      .verify.cssProperty("div.merchant-button.btn1", "font-family", "Courier New")
      .verify.cssProperty("div.merchant-button.btn1", "color", "rgba(0, 0, 0, 1)")
      .verify.cssProperty("div.merchant-button.btn1", "background-color", "rgb(0, 140, 255)")
      .verify.cssProperty("div.merchant-button.btn1", "opacity", "0.4")
      .verify.cssProperty("div.merchant-button.btn1", "text-decoration", "none")
      .pause(2000) .end();
  },
  
  'Tekka Dummy Test Content Direct Page 2' : function (client) {
    client
      .url('http://octoraypfi.co.uk/staging/wine.php')
      .waitForElementVisible('body', 5000)
      .verify.attributeContains("div[data-pfi-button-id]", "data-pfi-button-id", "a1")
      .verify.attributeContains("div[data-pfi-content-url]", "data-pfi-content-url", "/staging/landing.php")
      .verify.attributeContains("div[data-pfi-service-id]", "data-pfi-service-id", "357")
      .verify.containsText("div[data-pfi-button-id]", "September 15, 2015")
      .verify.cssProperty("div.btn1c", "font-size", "20px")
      .verify.cssProperty("div.btn1c", "font-family", "Courier New")
      .verify.cssProperty("div.btn1c", "color", "rgba(255, 255, 255, 1)")
      .verify.cssProperty("div.btn1c", "background-color", "rgba(0, 124, 255, 1)")
      .verify.cssProperty("div.btn1c", "opacity", "0.4")
      .verify.cssProperty("div.btn1c", "text-decoration", "none")
      .pause(2000) .end();
  },
'Tekka Dummy Test Proxy Pass' : function (client) {
    client
      .url('http://octoray.org.uk/staging/test2.php')
      .waitForElementVisible('body', 5000)
      .verify.attributeContains("div[data-pfi-button-id]", "data-pfi-button-id", "hidebutton")
      .verify.attributeContains("div[data-pfi-content-url]", "data-pfi-content-url", "/staging/landing.php")
      .verify.attributeContains("div[data-pfi-service-id]", "data-pfi-service-id", "19")
      .verify.attributeContains("div.merchant-button.btn2", "data-pfi-service-id", "17")
      .verify.containsText("div[data-pfi-button-id]", "Subscribee")
      .verify.cssProperty("div.merchant-button.btn1", "font-size", "15px")
      .verify.cssProperty("div.merchant-button.btn1", "font-family", "Courier New")
      .verify.cssProperty("div.merchant-button.btn1", "color", "rgba(0, 0, 0, 1)")
      .verify.cssProperty("div.merchant-button.btn1", "background-color", "(0, 125, 227, 1)")
      .verify.cssProperty("div.merchant-button.btn1", "opacity", "0.4")
      .verify.cssProperty("div.merchant-button.btn1", "text-decoration", "none")
      .click('div.merchant-button.btn1')
      .pause(2000)
      .end();
  },
  
  "Size Check1" : function (client) {
    var request = http.request({
        host: "octoraypfi.co.uk",
        port: 80,
        path: "/staging/slicknav/dist/slicknav.css",
        method: "HEAD"
    }, function (response) {
      client
        .verify.equal(response.headers["content-length"], 3580, '/staging/slicknav/dist/slicknav.css Same file size');
      client.end();
    }).on("error", function (err) {
      console.log(err);
      client.end();
    }).end();
  },
  "Size Check2" : function (client) {
    var request = http.request({
        host: "octoraypfi.co.uk",
        port: 80,
        path: "/staging/jquery-2.1.4.min.js",
        method: "HEAD"
    }, function (response) {
      client
        .verify.equal(response.headers["content-length"], 84345, '/staging/jquery-2.1.4.min.js Same file size');
      client.end();
    }).on("error", function (err) {
      console.log(err);
      client.end();
    }).end();
  },
  "Size Check3" : function (client) {
    var request = http.request({
        host: "octoraypfi.co.uk",
        port: 80,
        path: "/staging/css/body.css",
        method: "HEAD"
    }, function (response) {
      client
        .verify.equal(response.headers["content-length"], 9766, '/staging/css/body.css Same file size');
      client.end();
    }).on("error", function (err) {
      console.log(err);
      client.end();
    }).end();
  }
};
