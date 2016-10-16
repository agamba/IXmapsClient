/* jslint node: true */

'use strict';

var request = require('request');

//var GEO_URI = 'https://www.iprp.ca/application/geoip/mygeoip.php';
var GEO_URI = 'http://www.ixmaps.ca/application/geoip/mygeoip.php';

//var GEO_URI = 'http://159.203.17.176/application/geoip/mygeoip.php';
//var GEO_URI = 'http://trgen.ixmaps.ca/application/geoip/mygeoip.php';

exports.get = function(cb) {
  request(GEO_URI, function(err, res, body) {
    var json;
    if (!err) {
      json = JSON.parse(body);
    }
    cb(err, json);
  });
};
