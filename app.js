let closeBtn = document.getElementById('close-menu-btn');

let mobileMenu = document.getElementById('mobile-menu');

let burguerMenu = document.getElementById('burguer-menu');

closeBtn.addEventListener('click', function(){
    mobileMenu.style.right="-200%";
})
burguerMenu.addEventListener('click', function(){
    mobileMenu.style.right="0"
})

let searhbar = document.getElementById('search-bar');
let searchBtn = document.getElementById('search-btn');
let titles = document.getElementsByClassName('item-title');

searchBtn.addEventListener('click', function(){
    // alert(searhbar.value)

    for(let i=0; i<titles.length;i++){

        if(titles[i].innerHTML.toLowerCase().includes(searhbar.value)){
            titles[i].parentElement.style.display="flex"
        }else {
            titles[i].parentElement.style.display="none"
        }
    }
})