'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Prismic = require('./Prismic');

var _Prismic2 = _interopRequireDefault(_Prismic);

var _Router = require('../Router');

var _Router2 = _interopRequireDefault(_Router);

var _Error = require('../utils/Error');

var _Error2 = _interopRequireDefault(_Error);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  index: function index(req, res) {
    _Prismic2.default.api(req, res).then(function (api) {
      api.getByUID("documentation", "documentation").then(function (doc) {
        var scenes = doc.examples.slices.reduce(function (acc, s) {
          return s.sliceType === 'example' ? '' + (acc ? acc + ',' : '') + s.value.docs[0].animation : '';
        }, null);
        var scenario = '[' + scenes + ']';
        res.render('index', { 'doc': doc, scenario: scenario });
      }).catch(function (err) {
        return res.redirect(_Router2.default.notFound);
      });
    }).catch(function (err) {
      return _Error2.default.handle(err, req, res);
    });
  },
  page: function page(req, res) {
    _Prismic2.default.api(req, res).then(function (api) {
      api.getByUID("demo", req.params.uid).then(function (doc) {
        return res.render('page', { 'doc': doc });
      }).catch(function (err) {
        return res.redirect(_Router2.default.notFound);
      });
    }).catch(function (err) {
      return _Error2.default.handle(err, req, res);
    });
  },
  notFound: function notFound(req, res) {
    res.render('notFound');
  }
};