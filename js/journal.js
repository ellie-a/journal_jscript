
function Entry(title, body) {
  this.title = title;
  this.body = body;
}

Entry.prototype.wordCount = function() {
  var word_count = this.body.split(" ").length;
  return word_count;
};

Entry.prototype.letterCount = function() {
  var letterQuantity = this.body.replace(/[^a-z]/gmi, "").split("").length;
  return letterQuantity;
};

exports.entryModule = Entry;
