const delBtn = document.getElementById('delete');

const deletePost = async () => {

    const url = window.location.href;
    const splitUrl = url.split('/');
    const id = splitUrl[5];

    // Send a DELETE request to the API endpoint
    const response = await fetch(`/api/posts/delete/${id}`, {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {

        // console.log(response);
        // If successful, redirect the browser to the profile page
        document.location.replace('/dashboard');
    } else {
        alert(response.statusText);
    }
};

delBtn.addEventListener('click', deletePost)