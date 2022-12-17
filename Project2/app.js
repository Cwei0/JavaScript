// Variables

const openBtn = document.getElementById('open-btn')
const modalContainer = document.getElementById('modal-container')
const closeBtn = document.getElementById('close-btn')

// Event listener
openBtn.addEventListener('click', function(){

     modalContainer.style.display = 'block';
});

closeBtn.addEventListener('click', function(){

    modalContainer.style.display = 'none';
})
window.addEventListener('click', function(e){

    if (e.currentTarget === modalContainer){
        modalContainer.style.display = 'none';
    } 
})