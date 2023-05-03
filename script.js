const modalBtns = document.querySelectorAll('.modalBtn');
const modalContainer = document.querySelector('.modal-container');
const modal = document.querySelector('.actual-modal');
const closeBtns = document.querySelectorAll('.close');
const modeBtn = document.querySelector('.mode');
const text = document.querySelector('.top');
const title = document.querySelector('.title')
const body = document.querySelector('body');

let _name;
while (_name === undefined  || _name === ''  || _name === null) {
    _name = window.prompt('What is your name?');
    // console.log(_name);
}
title.textContent += `${_name},`; 
// console.log(_name);

// console.log(title.textContent)

const handleModalOpen = () => {
    modalContainer.style.visibility = 'visible';
    modal.style.visibility = 'visible';
}

const handleModalClose = () => {
    modalContainer.style.visibility = 'hidden';
    modal.style.visibility = 'hidden';
}

const toggleMode = () => {
    if (modeBtn.textContent.trim()=='Dark') {
        modal.style.backgroundColor = 'rgb(0, 61, 0)';
        modal.style.color = 'rgb(255, 165, 31)';
        modeBtn.textContent='Light'
    } else {
        modal.style.backgroundColor = 'rgb(255, 165, 31)'
        modal.style.color = 'rgb(0, 61, 0)';
        modeBtn.textContent='Dark'
    }
}


modalBtns.forEach((element) => {
    element.addEventListener('click', handleModalOpen);
})

closeBtns.forEach((element) => {
    element.addEventListener('click', handleModalClose);
})

modeBtn.addEventListener('click', toggleMode)

// console.log(modeBtn)

// Keyboard events ---> Global events

document.addEventListener('keydown', () => {
    if (modalContainer.style.visibility === 'visible') {
        handleModalClose();
    }
})
