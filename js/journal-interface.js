var Entry = require('./../js/journal.js').entryModule;

$(document).ready(function() {

  $('#journal-entry').submit(function(event) {
      event.preventDefault();
      var title = $('#title').val();
      var body = $('#body').val();
      var new_entry = new Entry(title, body);
      console.log(new_entry);
      var wordcount = new_entry.wordCount();
      var lettercount = new_entry.letterCount();

      $('#journal-output').append(title + "<br>" + body);
      $('#wordcount').append(wordcount);
      $('#lettercount').append(lettercount);
  });
});
