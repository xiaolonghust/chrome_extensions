var postInfo = $("#article_content");
if(postInfo.length!=1){
	chrome.runtime.sendMessage({type:"article-information", error:"获取文章信息失败."});
} else {
	var msg = {
		type: "article-information",
		content : postInfo.html()
	};
	chrome.runtime.sendMessage(msg);
}