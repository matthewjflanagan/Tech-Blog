const updateBtn = document.querySelector('#updateEditBtn');

const editPost = async (event)  => {
    var name = document.querySelector('#nameInput').value;
    var description = document.querySelector('#editInput').value;

    console.log('edit values ' + name + description);

    if (name && description) {
      const id = event.target.getAttribute('data-id');
        // Send a PUT request to the API endpoint
        const response = await fetch(`/api/posts/${id}`, {
          method: 'PUT',
          body: JSON.stringify({ name, description }),
          headers: { 'Content-Type': 'application/json' },
        });
    
        if (response.ok) {
          // If successful, redirect the browser to the profile page
          document.location.replace('/profile');
        } else {
          alert(response.statusText);
        }
      }
}

updateBtn.addEventListener('click', editPost);