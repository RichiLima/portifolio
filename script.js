//############## Barra de navegação ########
const menu = document.getElementById('menu-fixed');

// ##### iniciando função de estilizar navbar ######
window.onscroll = function(){scrollNav()} 

function scrollNav(){
    var positionX = document.documentElement.scrollTop;
    
    if(positionX >= 50){
        menu.classList.add('scroll__active')
    }else{
        menu.classList.remove('scroll__active')
    }
}

// ########### fim da função ###############