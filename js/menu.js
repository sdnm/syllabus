(function ($) {
  Drupal.behaviors.syllabus = {
    attach: function (context, settings) {
      $('#open_secondary-menu').click(function() {
        if ($('#secondary-menu').attr('data-state') == 'unselected') {
          $('#secondary-menu').attr('data-state', 'selected');
        } else {
          $('#secondary-menu').attr('data-state', 'unselected');
        }
      }); 
    }
  };
}(jQuery));
