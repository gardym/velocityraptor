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

var fixture = "<div class='container'><div class='quote'></div></div><div class='container'><div class='quote'></div></div>"; 

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

  });

  describe("when a quote is a clicked", function() {

    it("should hide itself", function() {
      $find(".quote:first").trigger("click");
      $find(".quote:first").closest(".container").is(":visible").should.equal(false);
    });

    it("should show the raptor");    
  });
});

