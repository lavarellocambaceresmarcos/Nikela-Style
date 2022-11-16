let closeBtn = document.getElementById('close-menu-btn');

let mobileMenu = document.getElementById('mobile-menu');

let burguerMenu = document.getElementById('burguer-menu');

closeBtn.addEventListener('click', function(){
    mobileMenu.style.right="-200%";
})
burguerMenu.addEventListener('click', function(){
    mobileMenu.style.right="0"
})



let infoMayorista = document.getElementById('mayorista-info')
let infominorista = document.getElementById('minorista-info')

let mayoristaButton = document.getElementById('mayorista');
let minoristaButton = document.getElementById('minorista');

a=0;
b=0;

        


mayoristaButton.addEventListener('click', function(){
    if(a==0){
        infoMayorista.style.display="flex";
        mayoristaButton.style.background="#373535";
        mayoristaButton.style.color="#F8F8F8";
        a=a+1;
    }else if(a!=0){
        infoMayorista.style.display="none";
        mayoristaButton.style.background="transparent";
        mayoristaButton.style.color="#373535";
        a=0;

        mayoristaButton.addEventListener('mouseover', function(){
            mayoristaButton.style.background="#373535";
            mayoristaButton.style.color="#F8F8F8";
        })
        mayoristaButton.addEventListener('mouseout', function(){
            mayoristaButton.style.background="#F8F8F8";
            mayoristaButton.style.color="#373535";
        })

    }
    
})

minoristaButton.addEventListener('click', function(){
    if(b==0){
        infominorista.style.display="flex";
        minoristaButton.style.background="#373535";
        minoristaButton.style.color="#F8F8F8";
        b=b+1;
    }else if(b!=0){
        infominorista.style.display="none";
        minoristaButton.style.background="transparent";
        minoristaButton.style.color="#373535";
        b=0;

        minoristaButton.addEventListener('mouseover', function(){
            minoristaButton.style.background="#373535";
            minoristaButton.style.color="#F8F8F8";
        })
        minoristaButton.addEventListener('mouseout', function(){
            minoristaButton.style.background="#F8F8F8";
            minoristaButton.style.color="#373535";
        })

    }
})