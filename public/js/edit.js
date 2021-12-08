const updateBtn = document.querySelector('.btn');

updateBtn.addEventListener('click', function () {
    var name = document.querySelector('#nameInput').value;
    var edit = document.querySelector('#editInput').value;

    console.log(name + edit);
});