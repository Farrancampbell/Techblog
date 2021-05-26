const commentBtn = document.getElementById('add-comment');
const commentDiv = document.getElementById('comment-div');

function showCommentForm() {


    if (commentDiv.style.display == "none") {
        commentDiv.style.display = "block";
    } else {
        commentDiv.style.display = "none";
    }
}


commentBtn.addEventListener('click', showCommentForm);