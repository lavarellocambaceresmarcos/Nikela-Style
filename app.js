let closeBtn = document.getElementById('close-menu-btn');

let mobileMenu = document.getElementById('mobile-menu');

let burguerMenu = document.getElementById('burguer-menu');

closeBtn.addEventListener('click', function(){
    mobileMenu.style.right="-200%";
})

burguerMenu.addEventListener('click', function(){
    mobileMenu.style.right="0"
})