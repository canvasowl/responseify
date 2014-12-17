var button = $('button');
var result_div = $('#result');
	
result_div.hide(); // Hide the result div ;
button.click(function() {
	var container_width = 900;
	var width = parseInt($('#width').val());
	var columns = parseInt($('#columns').val());
	var padding = 4;
	var column_size = width / columns; // Size of the smallest column

	result_div.fadeIn(1000);
	result_div.html("");

	for (var i = 1; i <= columns; i++) {
		var current_column_width = column_size * i; // columnn in pixels
		var current_column_percent = ((current_column_width / width) * 100).toFixed(2); // column width in percents
		var current_padding = padding / current_column_width; // padding in percents

		result_div.append('<p class="style"><p><span class="decleration">.column_'+i+'</span><span class="colon"> {</span></p><p>');
		// this is the width
		result_div.append('<p class="rule-line"><span class="rule">width<span><span class="colon">:</span><span class="num"> '+current_column_percent+'<span class="mesurement">%<span class="colon">;<span></p>')
		// this is the padding
		result_div.append('<p class="rule-line"><span class="rule">padding<span><span class="colon">:</span><span class="num"> '+current_padding+'<span class="mesurement">%<span class="colon">;<span></p>')
		result_div.append('<p class="colon">}</p></p>')				

	};
});