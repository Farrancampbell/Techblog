const create = document.getElementById('create-blog-form');

const createBlogPost = async (event) => {
    event.preventDefault();

    
    const title = document.querySelector('#title').value.trim();
    const content = document.querySelector('#content').value.trim();
   

    if (title && content) {
        
        const response = await fetch('/api/project/', {
            method: 'POST',
            body: JSON.stringify({ title, content }),
            headers: { 'Content-Type': 'application/json' },
        });

        if (response.ok) {
            // If successful, redirect the browser to the profile page
            document.location.replace('/dashboard');
        } else {
            alert(response.statusText);
        }
    }

};

create.addEventListener('submit', createBlogPost)