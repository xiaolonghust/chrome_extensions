var postInfo = $("#cnblogs_post_body");
var author = $("#PSignature a");
if(postInfo.length!=1){
	chrome.runtime.sendMessage({type:"article-information", error:"获取文章信息失败."});
} else {
	var msg = {
		type: "article-information",
		author: author.text(),
		content : postInfo.html()
	};
	chrome.runtime.sendMessage(msg);
}
