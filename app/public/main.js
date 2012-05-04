require(["jquery"], function($) {
    $(function() {
			$(".quote").on("click", function() {
				$("#raptor").show();
				$(".quote").hide();
			});
    });
});
