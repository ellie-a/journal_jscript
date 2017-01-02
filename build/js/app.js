(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){

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

},{}],2:[function(require,module,exports){
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

$(document).ready(function() {

  $('#name-form').submit(function(event) {
      event.preventDefault();
      var name = $('#name').val();

      $('#name-output').append(name);
  });
});

},{"./../js/journal.js":1}]},{},[2]);
