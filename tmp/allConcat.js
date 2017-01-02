var Entry = require('./../js/journal.js').entryModule;

$(document).ready(function() {

  $('#journal-entry').submit(function(event) {
      event.preventDefault();
      var title = $('#title').val();
      var body = $('#body').val();
      var new_entry = new Entry(title, body);


      $('#journal-output').append(title + "<br>" + body);
      $('#wordcount').append(new_entry.wordCount);
  });
});

$(document).ready(function() {

  $('#name-form').submit(function(event) {
      event.preventDefault();
      var name = $('#name').val();

      $('#name-output').append(name);
  });
});
