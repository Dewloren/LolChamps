$(".item.champCard").click(function() {
  var uri = $(this).find("img").attr("src").replace("loading", "splash");
  var title = $(this).find("h3").html();
  
  $("#skinModal").find(".modal-title").html(title);
  $("#skinModal").find("img").attr("src", uri);
  $("#skinModal").modal("show");
});