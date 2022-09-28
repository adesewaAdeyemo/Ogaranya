let lang = document.querySelector('#lang');
let langUl = document.querySelector('.langUl');
let product = document.querySelector('#product');
let productUl = document.querySelector('.productUl');

var count = 0;

lang.addEventListener('click', langList)
function langList(e){
    e.preventDefault();
    count+=1;
    console.log(count);
    if (count%2 != 0){
        langUl.style.display = 'block'
        let ul = document.querySelector('.langUl')
        ul.firstElementChild.textContent='Select Language';
        ul.children[1].textContent='Hausa';
        ul.children[2].textContent='Igbo';
        ul.lastElementChild.textContent='Yoruba';
    }else{
        langUl.style.display = 'none'
    }
}

product.addEventListener('click', productList)
function productList(e){
    e.preventDefault();
    count+=1;
    console.log(count);
    if (count%2 != 0){
        productUl.style.display = 'block'
        let ul = document.querySelector('.productUl')
        ul.firstElementChild.textContent='Invoicing';
        ul.children[1].textContent='Bill Payment';
        ul.children[2].textContent='Subscription';
        ul.children[3].textContent='Phone Number Verification';
        ul.lastElementChild.textContent='Customer Cammand Service';
    }else{
        productUl.style.display = 'none'
    }
}
let svgLogo = document.querySelector('#svgLogo');
let arrow = document.querySelector('#arrow');
arrow.addEventListener('click', scroll);
function scroll(){
    svgLogo.scrollIntoView();
}

let btn = document.querySelector('form');
btn.addEventListener('submit', function(e){
    e.preventDefault();
})

// invitation_code = [];
// for (let i = 0; i < 4; i++) {
//     num = Math.floor(Math.random() * 10);
//     invitation_code.push(num);
// }
// console.log(invitation_code)
invitation_code = ['1334', '3854', '0450', '3892', '2394', '0772'];
let invite = document.getElementById('invite');
let inpInvite = document.getElementById('inpInvite')
invite.addEventListener('click', check);
function check(){
    // console.log(inpInvite.value)
    // console.log(inpInvite.value in invitation_code)
    // console.log(invitation_code)
    // if (invitation_code.includes((inpInvite.value).toString())){
    //     alert('You are lucky !, an invitation code will be sent to your email...');
    // }
    if (invitation_code.includes((inpInvite.value).toString())){
        alert('You are lucky !, an invitation code will be sent to your email...');
    }
    else{
        alert(`Oooops, Try again later!`);
    }
}

let menuList = document.querySelector('.menuList')
let menu = document.querySelector('.menu');
let navigation = document.querySelector('.navigation')

menu.addEventListener('click', displayNav);
function displayNav(){
    count+=1;
    console.log(count);
    if (count%2 != 0){
        navigation.style.display = 'block'
        menu.src = 'images/cancel1.png'
        productUl.classList.add('index')
    }else{
        navigation.style.display = 'none'
        menu.src = 'images/menu.png'
    }
}