let postID = JSON.parse(localStorage.getItem("currPostID"));
let post = JSON.parse(localStorage.getItem("Posts"));
document.getElementById("title").innerHTML = post[postID].title;
document.getElementById("content").innerHTML = post[postID].content;

function upvote() {
    post[postID].upvotes++;
    localStorage.setItem("Posts",JSON.stringify(post))
    
}