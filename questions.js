function createConversation()
{
  var opened = window.open("Ask a question.");
  opened.document.write('<html><head><title>Create a Post</title><link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet"integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous"><link href="style.css" rel="stylesheet" type="text/css" /><link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=Raleway&display=swap" </head><body><div id="TitleText"> Question </div><input type="text" id="title"</input><button class="b" id="submit" onclick="getInput()">Submit</button><script src="script.js"></script></html>');
} 

function viewPost(postID)
{
  
  post = JSON.parse(localStorage.getItem("Posts"))[postID];
 localStorage.setItem("currPostID", postID);

 
 window.location.href = "post.html";
 //Put post information in html 
}
class Post {
  constructor(title, content) {
     this.title = title;
     this.content = content;
     this.upvotes = 0;
     this.replies=[];
 }
}

//displaying the posts
var post_list=JSON.parse(localStorage.getItem("Posts"));
if(post_list==null){
  post_list=[];
  post_list.unshift(new Post('Antonelli Cheese' ,'Last week, I tried antonellis cheese shop for the first time, and it was really good! We tried a cheddar cheese. the people were really nice and the cheese tasted good.' ));
post_list.unshift(new Post('Magic Toys' ,'Magic Toys Toy Store is amazing! Got a really good horse pet wooden toy there! It was great!' ));
post_list.unshift(new Post('Pompeii', 'Really like going to pompeii restaraunt down town. they use really high quality ingredients and serve a large variety of italian food, and they just have the best service in any restaruant ive been to.' ));
post_list.unshift(new Post('Chicken Gs', 'Chicken Gs special sauce is so good! Its really creamy and reminds me of steak. Would highly recommend to anybody that likes chicken. So good'));
post_list.unshift(new Post('Panda Express', 'Panda Express fried rice is delicious, you have to try it. The people were really nice and gave me an extra egg roll!' ));
post_list.unshift(new Post('Manresa Bread', 'Just got the 7 layer cookie from Manresa Bread, and it is unbelievable. So chewy, soft, full of so much flavor and so many different ingredients, absolute delight. The best bakery in our community by a long shot.' ));
}


//alert(post_list[0].title);
localStorage.setItem("Posts",JSON.stringify(post_list));
for(var i=0;i<post_list.length;i++){
  var reviewContainer = document.getElementById("ReviewContainer");
  var div = document.createElement('div');
  var button = document.createElement('button');
  
  button.className = 'exists review';
  button.setAttribute("id", i);
  button.setAttribute("onclick", "viewPost(this.id)");
  div.textContent = post_list[i].content;
  div.className = "reviewDesc";
  button.appendChild(div);
 // alert(post_list[i].upvotes);
  if (post_list[i].upvotes > 0) {
    var check = document.createElement('div');
    check.setAttribute('id', 'check');
    check.textContent="✅";
    button.appendChild(check);
    //alert("CHECK");
  }
  reviewContainer.appendChild(button);
     
}


