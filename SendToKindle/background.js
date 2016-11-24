var articleData;
var author;
function genericOnClick(info, tab) {
  // console.log("item " + info.menuItemId + " was clicked");
  // console.log("info: " + JSON.stringify(info));
  // console.log("tab: " + JSON.stringify(tab));
  console.log("=====================");
  console.log("内容 : " + info.selectionText);
  console.log("来源 : " + tab.url);
  console.log("标题 : " + tab.title);
  console.log("作者 : " + author);
  console.log("正文 : " + articleData);

  author = "";
  articleData = "";

}

// Create one test item for each context type.  
var contexts = ["page", "selection", "link", "editable", "image", "video",
  "audio"
];
for (var i = 0; i < contexts.length; i++) {
  var context = contexts[i];
  var title = "Test '" + context + "' menu item";
  if (context === "page") {
    title = "发送本页面内容至kindle";
  };
  if (context === "selection") {
    title = "发送该部分文字至kindle";
  };
  var id = chrome.contextMenus.create({
    "title": title,
    "contexts": [context],
    "onclick": genericOnClick
  });
  console.log("'" + context + "' item:" + id);
}

chrome.runtime.onMessage.addListener(function(request, sender, sendRequest){
  if(request.type!=="article-information")
    return;
  articleData = request.content;
  author = request.author;
});