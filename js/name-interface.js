$(document).ready(function() {

  $('#name-form').submit(function(event) {
      event.preventDefault();
      var name = $('#name').val();

      $('#name-output').append(name);
  });
});
