$(document).ready(function () {
  $('[data-toggle=offcanvas]').click(function () {
    $('#sidebar').toggleClass('active');
    $('#page-wrapper').toggleClass('sidebar-active');
  });
  $('[data-toggle=topsearch]').click(function () {
    $('.top-search').toggleClass('active');
  });
});
