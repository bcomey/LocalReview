
//var post_list1 = localStorage.getItem("postlist");
//alert((localStorage.getItem("Posts")));
/*
document.getElementById("nUpvotes1").innerHTML=(JSON.parse(localStorage.getItem("Posts")))[0].upvotes;
if((JSON.parse(localStorage.getItem("Posts")).length>1)){
  document.getElementById("nUpvotes2").innerHTML=JSON.parse(localStorage.getItem("Posts"))[1].upvotes;
  if((JSON.parse(localStorage.getItem("Posts")).length>2)){
    document.getElementById("nUpvotes3").innerHTML=JSON.parse(localStorage.getItem("Posts"))[2].upvotes;
    if((Json.parse(localStorage.getItem("Posts")).length>3)){
      document.getElementById("nUpvotes4").innerHTML=document.getElementById("nUpvotes4").innerHTML=JSON.parse(localStorage.getItem("Posts"))[3].upvotes;
      if((Json.parse(localStorage.getItem("Posts")).length>4)){
        document.getElementById("nUpvotes5").innerHTML=JSON.parse(localStorage.getItem("Posts"))[4].upvotes
      }  
    }
  }  
}
*/


/*
function upvote(postNumber){
  if(postNumber==1){
    alert("FLAG 1");
    //localStorage.setItem(JSON.stringify(parseInt(JSON.parse(localStorage.getItem("Posts"))[0].upvotes)+1));
    var a = JSON.parse(localStorage.getItem("Posts")[0].upvote);
    localStorage.setItem("Posts", JSON.stringify(a));
    //local storage upvotes, +1
    //set localstorage post_list[something].upvote + 1
    
    alert(JSON.parse((localStorage.getItem("Posts"))[0].upvotes));
    document.getElementById("nUpvotes1").innerHTML=(JSON.parse(localStorage.getItem("Posts")))[0].upvotes;
  }
  if(postNumber==2){
    document.getElementById("nUpvotes2").innerHTML=JSON.parse(localStorage.getItem("Posts"))[1].upvotes;
  }
  if(postNumber==3){
    document.getElementById("nUpvotes3").innerHTML=JSON.parse(localStorage.getItem("Posts"))[2].upvotes;
  }
  if(postNumber==4){
    document.getElementById("nUpvotes4").innerHTML=JSON.parse(localStorage.getItem("Posts"))[3].upvotes;
  }
  if(postNumber==5){
    document.getElementById("nUpvotes5").innerHTML=JSON.parse(localStorage.getItem("Posts"))[4].upvotes
  } 



  else if(postNumber==2){
    localStorage.setItem("upvotes2", parseInt(localStorage.getItem("upvotes2"))+1);
    document.getElementById("nUpvotes2").innerHTML=localStorage.getItem("upvotes2");
    if(parseInt(localStorage.getItem("upvotes2"))>=5){
      document.getElementById("Post2").classList.add("Golden");
    }
    document.getElementById("Upvote2").classList.add("Invis");
  }

}*/

function createConversation()
{
  var opened = window.open("Ask a question.");
  opened.document.write('<html><head><title>Create a Post</title><link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet"integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous"><link href="style.css" rel="stylesheet" type="text/css" /><link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=Raleway&display=swap" </head><body><div id="TitleText"> Question </div><input type="text" id="title"</input><button class="b" id="submit" onclick="getInput()">Submit</button><script src="script.js"></script></html>');
} 

//alert(localStorage.getItem("post1"));

/*
var upvote_list = [];
for (var i=0; i<5; i++)
{
  upvoteText = ("upvotes" + (i+1).toString());
  upvote_list.push(localStorage.getItem(upvoteText))
}
upvote_list.sort(function(a, b){return b - a}); //sorted from highest to lowest
*/

//displaying the posts

var posts = JSON.parse(localStorage.getItem("Posts"));


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