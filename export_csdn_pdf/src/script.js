alert("Google Export PDF");
// document.getElementById("user[login]").value="xiaoma";
// document.getElementById("user[email]").value="hacker_ma@163.com";
// document.getElementById("user[password]").value="123456";

var $articleDiv = $("#article_details");
var $cloneDiv = $articleDiv.clone(true, true);
var $bodyDiv = $("body");
var $mainDiv = $(".main");
var $side = $("#side");
// debugger;
$bodyDiv.empty();
$bodyDiv.append($cloneDiv);
var $digg = $("#digg");
$digg.remove();
$bodyDiv.prop("style", "padding: 20px;");

$("a[title='展开'").attr("title", "收起").html("[-]").parent().next().show()
window.print();