var logoHeight = $("#img img").height();
if (logoHeight < 600) {
  var margintop = (600 - logoHeight) / 2;
  $("#img img").css("margin-top", margintop);
}
