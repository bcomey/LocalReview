/*
get local storage postToReply
set item with id thequestion to posttoreply.post
for i less than posttoreply.responses.length
if i is 0 then set reply1 to responses[i]
*/

var displayPost = JSON.parse(localStorage.getItem("postToReply")); 
document.getElementById("TheQuestion").innerHTML=displayPost.post;
function showReplies(){
  
  //Display each reply in Post.replies (list)
  for (var i=0;i<displayPost.replies.length;i++){
  if(i==0){
    
    document.getElementById("replytext1").innerHTML=displayPost.replies[i];
    document.getElementById("Reply1").classList.remove("Invis");
    

  }
  if(i==1){
    
    document.getElementById("replytext2").innerHTML=displayPost.replies[i];
    document.getElementById("Reply2").classList.remove("Invis");
    

  }
  if(i==2){
    ;
    document.getElementById("replytext3").innerHTML=displayPost.replies[i];
    document.getElementById("Reply3").classList.remove("Invis");
    

  }
}
}

function reply(){
  var oldURL = document.referrer;
  //https://infinihacks.themagicapple.repl.co/Class1.html
  var reply=document.getElementById('replyInput').value
  displayPost.replies.push(reply);
  if(oldURL[47]=="1"){
    var p=JSON.parse(localStorage.getItem("Posts"));
    p[localStorage.getItem("postNum")-1]=displayPost;
    localStorage.setItem("Posts",JSON.stringify(p));
  }
  if(oldURL[47]=="2"){
    var p=JSON.parse(localStorage.getItem("Posts2"));
    p[localStorage.getItem("postNum")-1]=displayPost;
    localStorage.setItem("Posts2",JSON.stringify(p));
  }
  if(oldURL[47]=="3"){
    var p=JSON.parse(localStorage.getItem("Posts3"));
    p[localStorage.getItem("postNum")-1]=displayPost;
    localStorage.setItem("Posts3",JSON.stringify(p));
  }
  
  showReplies();
}
showReplies();
function takeBack(){
  var oldURL = document.referrer;
  window.location.href = oldURL;
}