/* Add placeholder support for less than ie10 */

function placeCheck() {
	if($('html').hasClass('lt-ie10')){
		$('input[placeholder]').each(function(){
			$(this).val($(this).attr('placeholder'));
		});
	}
}


/* On Document Ready */

$(document).ready(function() {
	placeCheck();
});
