$("#tour").click(function() {
	$("#one, #two, #three, #four, #five, #six, #seven, #eight, #nine, #ten").removeClass("orange");
	$("#timeline").removeClass();
	$(".headsUpWrapper").removeClass("headsUpOverlay");
	$("#one, #two").addClass("orange");
	$("#timeline").addClass("two");
});

$("#preclose").click(function() {
	$("#one, #two, #three, #four, #five, #six, #seven, #eight, #nine, #ten").removeClass("orange");
	$("#timeline").removeClass();
	$(".headsUpWrapper").removeClass("headsUpOverlay");
	$("#one, #two, #three, #four").addClass("orange");
	$("#timeline").addClass("four");
	$(".headsUpWrapper").addClass("headsUpOverlay", function(){
		$(".headsUpOverlay").fadeIn(2000);
	});
});

$("#preview").click(function() {
	$("#one, #two, #three, #four, #five, #six, #seven, #eight, #nine, #ten").removeClass("orange");
	$("#timeline").removeClass();
	$(".headsUpWrapper").removeClass("headsUpOverlay");
	$("#one, #two, #three, #four, #five, #six, #seven").addClass("orange");
	$("#timeline").addClass("seven");
});

$("#wrapup").click(function() {
	$("#one, #two, #three, #four, #five, #six, #seven, #eight, #nine, #ten").removeClass("orange");
	$("#timeline").removeClass();
	$(".headsUpWrapper").removeClass("headsUpOverlay");
	$("#one, #two, #three, #four, #five, #six, #seven, #eight, #nine, #ten").addClass("orange");
	$("#timeline").addClass("full");
});