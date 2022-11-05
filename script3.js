  /*
To Do:
Create format for posts to be stored in program
Take text input at create post

*/
var post_list=JSON.parse(localStorage.getItem("Posts3"));

if(post_list==null){
  post_list=[];
}
//var post_list = [];



function getInput()
{
  //RUNS WHEN SUBMIT POST
  //Creates a post object
  var post = new Post(document.getElementById('title').value) 
  post_list.push(post);
  localStorage.setItem("Posts3",JSON.stringify(post_list))

  window.location="Class3.html";
  
}

function createConversation()
{
  var opened = window.open("Conversation");
  opened.document.write('<html><head><title>Create a Post</title><link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet"integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous"><link href="style.css" rel="stylesheet" type="text/css" /><link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=Raleway&display=swap" </head><body><div id="TitleText"> Question </div><input type="text" id="title"</input><button class="b" id="submit" onclick="getInput()">Submit</button><script src="script3.js"></script></html>');
} 


class Post {
 constructor(post) {
    this.post = post;
    this.upvotes = 0;
    this.replies=[];
}


}


let samplePost = new Post("This is a placeholder we may use for testing purposes");

//For displaying posts in HTML


