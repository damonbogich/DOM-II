// Your code goes here
//1.
const funBusHeader = document.querySelector('.logo-heading');

funBusHeader.addEventListener('mouseover', () => {
    funBusHeader.style.color = 'red';

})

//2. 
const busImg = document.querySelector('.intro img');

busImg.addEventListener('mouseenter', () => {
    busImg.style.transform = 'scale(1.3)';
    busImg.style.transition = 'transform 3s'
})

//3.
busImg.addEventListener('mouseleave', () => {
    busImg.style.transform = 'scale(1.0)';
});

//4. 
const headerColor = document.querySelector('.main-navigation');

headerColor.addEventListener('click', () => {
    headerColor.style.backgroundColor = 'rebeccapurple';
});

//5. 
headerColor.addEventListener('dblclick', () => {
    headerColor.style.backgroundColor = 'orange';

})

//6. 
window.addEventListener('resize', () => {
    busImg.src = 'privateJet.jpg';
    console.log('imagechange');
})

//7. 
const button = document.querySelector('.btn');

button.addEventListener('contextmenu', () => {
    button.style.backgroundColor = 'black';
})

//8. 
document.querySelectorAll('.content-section img').forEach(el => {
    el.addEventListener('mouseup', () => {
        el.style.transform = 'scale(2.0)'
    })
})

//9. 
const load = window.addEventListener('load', () =>{
    alert('Page Loaded!');
});

//10. 
const focus1 = document.querySelectorAll('nav .nav-link');
console.log(focus1);
focus1[0].addEventListener('focus', (e) => {
    e.target.style.color = '#FF00FF';
    console.log(e);
});

//11. Nest two similar events somewhere in the site and prevent the event propagation properly

const body = document.querySelector('body');
body.addEventListener('click', () => {
    body.style.backgroundColor = 'gold';
})

const textContent = document.querySelector('.text-content');
textContent.addEventListener('click', (event) => {
    textContent.style.backgroundColor = 'yellow';
    event.stopPropagation();
})

// 12. stop nav items from refreshing page with preventDefault()

const navItems = document.querySelectorAll('.nav-link');

navItems.forEach(el => {
    el.addEventListener('click', (event) => {
        console.log('prevent refresh');
        event.preventDefault();
    })
})

