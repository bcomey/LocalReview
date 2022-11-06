function createConversation()
{
  var opened = window.open("Ask a question.");
  opened.document.write('<html><head><title>Create a Post</title><link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet"integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous"><link href="style.css" rel="stylesheet" type="text/css" /><link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=Raleway&display=swap" </head><body><div id="TitleText"> Question </div><input type="text" id="title"</input><button class="b" id="submit" onclick="getInput()">Submit</button><script src="script.js"></script></html>');
} 


//displaying the posts
var post_list=JSON.parse(localStorage.getItem("Posts"));
for(var i=0;i<post_list.length;i++){
  var reviewContainer = document.getElementById("ReviewContainer");
  var div = document.createElement('div');
  var button = document.createElement('button');
  button.className = 'exists review';
  div.textContent = post_list[i].title + "\n" + post_list[i].content;
  div.className = "reviewDesc";
  button.appendChild(div);
  reviewContainer.appendChild(button);
     
}


function viewQuestion(button)
{
 //Put post you click on in seperate localstorage
 var post_list=JSON.parse(localStorage.getItem("Posts"));
 localStorage.setItem("postToReply", JSON.stringify(post_list[button-1]));
 localStorage.setItem("postNum",button);
 /*
 Get post[0] from post_list, put it in new localStorage
 Redirect to new page
 Display postToReply.post and postToReply.replies in HTML 
 */
 
 
 
 window.location.href = "Question.html";
 //Put post information in html 
}