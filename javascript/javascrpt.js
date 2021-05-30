(function(){
    //VARIABLES
    var menu= document.getElementById("icon-circle-right"); 
    var menu2= document.getElementById("icon-circle-left"); 
    var nav2=document.getElementById("nav2");
    var logo=document.getElementById("divLogo");

    //FUNCIONES
    var abrir= function(){
      nav2.style.cssText="transform: translateX(0%);";  
      menu2.style.cssText="display: block; opacity: 1;"; 
      menu.style.cssText="animation: menu .3s linear; opacity: 0;"; 
    }
    var cerrar= function(){
      nav2.style.cssText="transform: translateX(-100%);"; 
      menu2.style.cssText="opacity: 0;";
      menu.style.cssText="opacity: 1;"; 
    }
    var logoToInstagram= function(){
      window.location="https://www.instagram.com/barberiaclaudiorenaudo/";
    }

    //EVENTOS  
    menu.addEventListener("click",abrir);
    menu2.addEventListener("click",cerrar);
    logo.addEventListener("click",logoToInstagram);

    
}());