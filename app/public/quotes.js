define(["jquery"], function($) {

  var init = function() {

    var raptorClick = function(nextQuote) {
      $("#raptor").off("click").closest(".container").hide();
      $(nextQuote).closest(".container").show();
    };

    var quoteClick = function() {
      $(this).off("click").closest(".container").hide()

      var nextQuote = $(this).closest(".container").next().find(".yes");
      nextQuote.on("click", quoteClick);

      $("#raptor").on("click", function() { raptorClick(nextQuote); }).closest(".container").show();
    }; 

    $(".yes").closest(".container").hide();
    $(".yes:first").on("click", quoteClick).closest(".container").show();

  };

  return { init: init };

});

