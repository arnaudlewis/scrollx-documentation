'use strict';

var _config = require('./conf/config');

var _config2 = _interopRequireDefault(_config);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var PORT = _config2.default.get('port');

_config2.default.listen(PORT, function () {
  console.log('Express server listening on port ' + _config2.default.get('port'));
});

var linksPerItem = 4;
var links = ['link1', 'link2', 'link3', 'link4', 'link5', 'link6', 'link7', 'link8', 'link9', 'link10'];
var itemsCount = links / linksPerItem + 1; //because it's an Euclide division so the two last links will be in the + 1 item

for (var i = 0; i < itemsCount; i++) {
  var firstLinkIndex = i * linksPerItem;
  var lastLinkIndex = firstLinkIndex + linksPerItem;
  var linksCurrentItem = links.slice(firstLinkIndex, lastLinkIndex);

  linksCurrentItem.map(function (link) {
    return '<a href="' + link + '"></a>';
  });
}