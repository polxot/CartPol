const box = document.querySelectorAll('.box');
const btn = document.querySelector('button');
let count = 0;

btn.onclick = () => {
    count++;

    if (count < box.length) {
        box[count - 1].classList.add('hidden');
        box[count].classList.remove('hidden');
    }
    else {
        count = 0; 
        box[box.length - 1].classList.add('hidden');
        box[count].classList.remove('hidden');
    }
    
}