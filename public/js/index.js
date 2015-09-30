$
  .get('/free')
  .done(function(data) {
    var free = [];
    data.forEach(function(element) {
      $.ajax({
        url : '/champ/' + element.id,
        success : function(data) {
          free.push(data);
        },
        async : false
      });
    });
    free.forEach(function(element) {
      $("#rotationGallery").append(
        $("<div>").append(
          $("<h5>").html(element.name).addClass("center-align")
        ).append(
          $("<img>")
            .attr("src", "//ddragon.leagueoflegends.com/cdn/img/champion/loading/" + element.key + "_0.jpg")
            .css("width", "50%")
            .css("display", "block")
            .css("margin", "auto")
            .addClass("center-align")
        ).append(
          $("<h6>").html(element.title).addClass("center-align")
        )
      );
    });
  })
  .fail(function(err) {
    alert("Loading Free Champions failed");
  })
  .always(function(p) {
    $("#rotationGallery").slick({
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 3,
    });
    $(".slick-arrow").css("background-color", "#1a237e").css("border-radius", "100%");
  });