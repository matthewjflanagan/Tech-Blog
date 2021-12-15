const updateBtn = document.querySelector('#updateEditBtn');
console.log('hit here')
updateBtn.addEventListener('click', function () {
    var name = document.querySelector('#nameInput').value;
    var edit = document.querySelector('#editInput').value;

    console.log(name + edit);
});