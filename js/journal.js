
function Entry(title, body) {
  this.title = title;
  this.body = body;
}

Entry.prototype.wordCount = function() {
  var word_count = this.body.split(" ").length;
  return word_count;
};


exports.entryModule = Entry;
