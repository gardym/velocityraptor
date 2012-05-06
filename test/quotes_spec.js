var should = require("chai").should();
var requirejs = require("requirejs");

var jsdom = require("jsdom");
document = jsdom.jsdom("<html><head></head><body></body></html>");
window = document.createWindow();

var $ = require("jquery");//.create(window);

requirejs.config({
  baseUrl: __dirname + '/../app/public',
  nodeRequire: require
});

var $find = function(sel) { return $(document).find(sel); }; 

var fixture = "<div class='container' style='display: none'><div><img src='raptor.jpg' id='raptor' /></div></div><div class='container'><div class='quote'></div></div><div class='container'><div class='quote'></div></div>"; 

var quotes = requirejs("quotes");

describe("quotes.js", function() {

  beforeEach(function() {
    $find("body").empty().append(fixture);
    quotes.init();
  });

  describe("when the page is displayed", function() {

    it("should only show the first quote", function() {
      $find(".container:visible").length.should.equal(1);
    });
    
    it("should be make the first quote clickable", function() {
      $find(".quote:first")[0]._listeners.click.should.not.equal(undefined);
    });

    it("should not be showing the raptor", function() {
      $find("#raptor").closest(".container").is(":visible").should.equal(false);
    });

  });

  describe("when a quote is a clicked", function() {

    beforeEach(function() {
      $find(".quote:first").trigger("click");
    });

    it("should hide itself", function() {
      $find(".quote:first").closest(".container").is(":visible").should.equal(false);
    });

    it("should show the raptor", function() {
      $find("#raptor").closest(".container").is(":visible").should.equal(true); 
    });    
  });

  describe("when the raptor is clicked", function() {
    beforeEach(function() {
      $find(".quote:first").trigger("click");
      $find("#raptor").trigger("click");
    });

    it("should show the next quote", function() {
      $find(".quote:eq(1)").closest(".container").is(":visible").should.equal(true);
    });

    it("should hide the raptor", function() {
      $find("#raptor").closest(".container").is(":visible").should.equal(false);
    });

  });

});

