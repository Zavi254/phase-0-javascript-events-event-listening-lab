function addingEventListener() {
    const input = document.getElementById('input');
    input.addEventListener("click", alertMe);
}

addingEventListener();

function alertMe(){
    alert('Hello World');
}
