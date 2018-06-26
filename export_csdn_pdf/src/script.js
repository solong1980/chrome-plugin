alert("Google Export PDF");
var href = window.location.href;
if(href.indexOf('https://blog.csdn.net/men_wen')>-1){
	var $bodyDiv = $("body");
	var $btnReadmore = $("#btn-readmore");
 	if($btnReadmore.length>0){
		var winH = $(window).height();
		var articleBox = $("div.article_content");
		var artH = articleBox.height();
		articleBox.css({
			'height':winH*2+'px',
			'overflow':'hidden'
		})
		articleBox.removeAttr("style");
		$btnReadmore.parent().remove();
 	}
 	$("iframe").remove();
 	var $mainBlock = $("main");
 	var $mainDiv = $mainBlock.clone(true, true);
 	$bodyDiv.empty();
 	$("script",$bodyDiv).remove();
 	$bodyDiv.append($mainDiv);
 	
 	$("div[class='edu-promotion']").remove();
 	$("div[class='comment-box']").remove();
 	$("div[class='recommend-box']").remove();
 	$("div:contains(newsfeed)").remove();
 	
 	$("script").remove();
}else{
	$("div .commentform").remove();
	var $articleDiv = $("#article_details");
	var $cloneDiv = $articleDiv.clone(true, true);
	var $commentDiv = $("div .comment_class");
	var $cloneCommentDiv = $commentDiv.clone(true, true);
	var $bodyDiv = $("body");
	var $mainDiv = $(".main");
	var $side = $("#side");
	// debugger;
	$bodyDiv.empty();
	$bodyDiv.append($cloneDiv);
	$bodyDiv.append($cloneCommentDiv);
	// $bodyDiv.prepend('<a href="'+this.location+'">访问地址</a>');
	var $digg = $("#digg");
	$digg.remove();
	$bodyDiv.prop("style", "padding: 20px;");
	
	var $articleContent = $("#article_content");
	$articleContent.attr("style","");	
}
setInterval(function(){
 $("iframe").remove();
}, 2000);


$("div").find(".readall_box").remove();

$("a[title='展开'").attr("title", "收起").html("[-]").parent().next().show()
//window.print();