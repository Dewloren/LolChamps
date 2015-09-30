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

router.get('/champ/:id', function(req, res, next) {
  riot.Static.getChampionById(req.params.id, { champData : "all" }, function(err, data) {
    res.send(data);
  });
});


module.exports = router;
