$("[data-type='sprites']").hover(function() {
  $(this).find("#name").html($(this).attr("data-name"));
}, function() {
  $(this).find("#name").empty();
});