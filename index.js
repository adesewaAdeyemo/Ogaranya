let lang = document.querySelector('#lang');
let langUl = document.querySelector('.langUl');
let product = document.querySelector('#product');
let productUl = document.querySelector('.productUl');


addEventListener('install', (event) => {
    const preCache = async () => {
      const cache = await caches.open('static-v1');
      return cache.addAll([
        '/',
        '/about/',
        '/static/styles.css'
      ]);
    };
    event.waitUntil(preCache());
  });


  
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