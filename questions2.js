

function createConversation()
{
  var opened = window.open("Ask a question.");
  opened.document.write('<html><head><title>Create a Post</title><link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet"integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous"><link href="style.css" rel="stylesheet" type="text/css" /><link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=Raleway&display=swap" </head><body><div id="TitleText"> Question </div><input type="text" id="title"</input><button class="b" id="submit" onclick="getInput()">Submit</button><script src="script2.js"></script></html>');
} 


//displaying the posts

var posts = JSON.parse(localStorage.getItem("Posts2"));


for(var i=0;i<posts.length;i++){
  var string = ("numberOfReplies" + (i+1).toString())
  var numberOfReplies = posts[i].replies.length;
  if (numberOfReplies > 3)
  {
    numberOfReplies = 3;
  }

  if (numberOfReplies == 1) {
    document.getElementById(string).innerHTML =  numberOfReplies + " reply";
  } else {
    document.getElementById(string).innerHTML =  numberOfReplies + " replies";
  }
  
  

  if(i==0){
    document.getElementById("text1").innerHTML=posts[0].post;
    document.getElementById("Post1").classList.remove("Invis");
  }
  if(i==1){
    document.getElementById("text2").innerHTML=posts[1].post;
    document.getElementById("Post2").classList.remove("Invis");
  }
  if(i==2){
    document.getElementById("text3").innerHTML=posts[2].post;
    document.getElementById("Post3").classList.remove("Invis");
  }
  if(i==3){
    document.getElementById("text4").innerHTML=posts[3].post;
    document.getElementById("Post4").classList.remove("Invis");
  }
  if(i==4){
    document.getElementById("text5").innerHTML=posts[4].post;
    document.getElementById("Post5").classList.remove("Invis");
  }
}


function viewQuestion(button)
{
 //Put post you click on in seperate localstorage
 var post_list=JSON.parse(localStorage.getItem("Posts2"));
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