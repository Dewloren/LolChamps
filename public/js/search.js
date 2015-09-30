$
  .get("/champs")
  .done(function(data) {
    var champs = data["data"];
    var champList = _.values(champs);
    var nameList = _.map(champList, function(element) {
      return element.name;
    });
    
    var champions = new Bloodhound({
      datumTokenizer: Bloodhound.tokenizers.whitespace,
      queryTokenizer: Bloodhound.tokenizers.whitespace,
      local: _.sortBy(nameList)
    });
    $("#champ-search").typeahead({
      hint: true,
      highlight: true,
      minLength: 1
    },
    {
      name: 'champions',
      source: champions
    });
  }).fail(function(err) {
    alert("Failed loading champion data");
  }).always(function(p) {
            
  });

