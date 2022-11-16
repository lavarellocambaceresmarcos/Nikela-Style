let searhbar = document.getElementById('search-bar');
let searchBtn = document.getElementById('search-btn');
let titles = document.getElementsByClassName('item-title');

searchBtn.addEventListener('click', function(){

    for(let i=0; i<titles.length;i++){

        if(titles[i].innerHTML.toLowerCase().includes(searhbar.value)){
            titles[i].parentElement.style.display="flex"
        }else {
            titles[i].parentElement.style.display="none"
        }
    }
})