$(document).ready(function () {
  $("#js--service-btn").click(function () {
    $("html, body").animate({ scrollTop: $("#service").offset().top }, 1000);
  });
  $("#js--appt-btn").click(function () {
    $("html, body").animate(
      { scrollTop: $("#appointment").offset().top },
      1000
    );
  });
});
