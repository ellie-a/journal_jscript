
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

Entry.prototype.getTeaser = function(body) {
  var bodyArray = this.body.split(" ");
  var newArray = [];
  for (var i= 0; i < 8; i++) {
    newArray.push(bodyArray[i]);
  }
  return newArray;
};

exports.entryModule = Entry;
