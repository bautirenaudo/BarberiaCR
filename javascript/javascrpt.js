(function(){
    //VARIABLES
    var menu= document.getElementById("icon-menu"); 
    var nav=document.getElementById("nav");
    var i=0;

    //FUNCIONES
    var abrir= function(){
        if(i==0){
          nav.style.cssText="transform: translateX(0%);"
          i=1;  
        }else{
          nav.style.cssText="transform: translateX(-100%);"
          i=0;
        }
      
    }

    //EVENTOS  
    menu.addEventListener("click",abrir);
    
}());