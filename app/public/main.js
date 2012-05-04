require(["jquery"], function($) {
    $(function() {

      var raptorClick = function(nextQuote) {
        $("#raptor").off("click").closest(".container").hide();
        $(nextQuote).closest(".container").show();
      };

      var quoteClick = function() {
        $(this).off("click").closest(".container").hide()

        var nextQuote = $(this).closest(".container").next().find(".quote");
        nextQuote.on("click", quoteClick);

        $("#raptor").on("click", function() { raptorClick(nextQuote); }).closest(".container").show();
      }; 

      $(".quote").closest(".container").hide();
			$(".quote:first").on("click", quoteClick).closest(".container").show();

    });
});
