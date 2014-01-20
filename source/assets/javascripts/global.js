jQuery(document).ready(function($) {
  $('.toggle-competencies').on('click', function (event) {
    $(this).parent().prev().slideToggle(250);
    if ($(this).find('.toggle-name').text() == 'Show') {
      $(this).find('.toggle-name').text('Hide');
    } else {
      $(this).find('.toggle-name').text('Show');
    }

    event.preventDefault();
  });

  $('#search-control').on('click', function (event) {
    $('#search').toggle();
    event.preventDefault();
  });
});
