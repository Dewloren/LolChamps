var express = require('express');
var router = express.Router();
var riot = require('leagueapi');
var _ = require('lodash');

riot.init('733d89e4-e317-4f31-a176-cc802b262d70', 'na');


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* RAW */
router.get('/free', function(req, res, next) {
  riot.getChampions(true, function(err, data) {
    res.send(data);
  });
});

router.get('/champs', function(req, res, next) {
  riot.Static.getChampionList({ champData : "all,image", dataById : true }, function(err, data) {
    res.send(data);
  });
}); 

router.get('/champions', function(req, res, next) {
  riot.Static.getChampionList({ champData : "image", dataById : true }, function(err, data) {
    var champs = _.values(data["data"]);
    res.render('champions', { version: data.version, champs : champs });
  });
});

router.get('/champ/:id', function(req, res, next) {
  riot.Static.getChampionById(req.params.id, { champData : "all" }, function(err, data) {
    res.send(data);
  });
});

router.get('/pages/champ/:name', function(req, res, next) {
  riot.Static.getChampionList({ champData : "all", dataById : false}, function(err, data) {
    var name = req.params.name.replace(/\W/g, '');
    name = (name.length == 0) ? "" : name.substr(0,1).toUpperCase() + (req.params.name.indexOf('\'') != -1 ? name.substr(1).toLowerCase() : name.substr(1));
    var partials = data["data"][name];
    partials.ver = data["version"];
    res.render('championPage', partials);
  });
});

module.exports = router;
