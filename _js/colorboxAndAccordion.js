/*------ Colorbox ------*/


$(document).ready(function(){
	$(".pdfPopup").colorbox({
		inline:true, 
		width:"875px", 
		height:"90%", 
		opacity:0.2,
		returnFocus:true
	});
	$(".definitionPopup").colorbox({
		inline:true, 
		width:"450px", 
		height:"275px", 
		opacity:0.2,
		returnFocus:true,
		onClosed:function(){
			$('.pdfPopup').colorbox({
				open:true,
				inline:true,
				width:'875px', 
				height:'90%', 
				opacity:0.2,
				returnFocus:true
			});
		}
	});
	$(".aprPopup").colorbox({
		inline:true, 
		innerWidth:"830px", 
		innerHeight:"520px", 
		opacity:0.2,
		returnFocus:true,
		onClosed:function(){
			$('.pdfPopup').colorbox({
				open:true,
				inline:true,
				width:'875px', 
				height:'90%',
				opacity:0.2,
				returnFocus:true
			});
		}
	});
});


/*------- Accordion ------*/

$(function() {
	$( "#accordion" ).accordion({
		collapsible: true,
		active: false
	});
});