let postID = JSON.parse(localStorage.getItem("currPostID"));
let post = JSON.parse(localStorage.getItem("Posts"))[postID];
document.getElementById("title").innerHTML = post.title;
document.getElementById("content").innerHTML = post.content;

function upvote() {
    post.upvotes++;
}