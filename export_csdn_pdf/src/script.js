alert("Google Export PDF");
// document.getElementById("user[login]").value="xiaoma";
// document.getElementById("user[email]").value="hacker_ma@163.com";
// document.getElementById("user[password]").value="123456";
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

$("div").find(".readall_box").remove();

$("a[title='展开'").attr("title", "收起").html("[-]").parent().next().show()
window.print();