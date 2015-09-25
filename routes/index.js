var express = require('express');
var router = express.Router();
var riot = require('leagueapi');
riot.init('733d89e4-e317-4f31-a176-cc802b262d70', 'na');
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/free', function(req, res, next) {
  riot.getChampions(true, function(err, data) {
    res.render(data);
  });
});

router.get('/champs', function(req, res, next) {
  riot.Static.getChampionList({ champData : "all,image", dataById : true }, function(err, data) {
    res.send(data);
  });
}); 
module.exports = router;
