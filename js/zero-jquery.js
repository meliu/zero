// jQuery is necessary.

$(function() {

	function Zero() {};

	// Normalize different browsers
	// -----------------------------------------------------

	// Support placeholder in input
	// ----------------------------
	var supportPlaceHolder = 'placeholder' in document.createElement('input');

	if (!supportPlaceHolder) {
		$(":input[placeholder]").each(function() {
			var p = $(this).attr('placeholder');
			if (p.length < 1) {
				return;
			}
			// event:blur
			$(this).blur(function() {
				var v = $.trim( $(this).val() );
				if (v.length < 1) {
					$(this).val(p);
				}
			});
			// event:focus
			$(this).focus(function() {
				var v = $.trim( $(this).val() );
				if (v == p) {
					$(this).val('');
				}
			});
			$(this).blur(); // to active placeholder.
		});
	}


	// Utilities
	// -----------------------------------------------------

	// Button - go to the top
	// ----------------------
	var goTopBtn = function() {
		var style = {
			height: '60',
			width: '60',
			border: '1px solid #999',
			position: 'fixed',
			bottom: '20px',
			right: '20px',
			cursor: 'pointer'
		};

		$(window).scroll(function() {
			if ($(window).scrollTop() > 50) {
				$("#goTopBtn").stop().animate({ 'opacity': 1 }, 1000);
				if ($("#goTopBtn").length < 1) {
					$("body").append("<div id='goTopBtn'></div>");
					$("#goTopBtn").css(style);
					$("#goTopBtn").click(function() {
						$("body,html").animate({ scrollTop: 0 }, "fast");
						return false;
					})
				}
			} else {
				$("#goTopBtn").stop().animate({ 'opacity': 0 }, 1000);
			}
		});
	};

	Zero.prototype.goTopBtn = goTopBtn;

	// Initialize
	// ---------------------------------------------------------	
	zerojq = new Zero();

});