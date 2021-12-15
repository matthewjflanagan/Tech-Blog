const updateBtn = document.querySelector('#updateEditBtn');
console.log('hit here')

const editPost = async ()  => {
    var name = document.querySelector('#nameInput').value;
    var edit = document.querySelector('#editInput').value;

    console.log(name + edit);

    if (name && edit) {
        // Send a POST request to the API endpoint
        const response = await fetch('/api/posts', {
          method: 'PUT',
          body: JSON.stringify({ name, edit }),
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