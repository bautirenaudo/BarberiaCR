(function(){
    //VARIABLES
    var menu= document.getElementById("icon-menu2"); 
    var nav2=document.getElementById("nav2");
    var i=0;

    //FUNCIONES
    var abrir= function(){
        if(i==0){
          nav2.style.cssText="transform: translateX(0%);"
          i=1;  
        }else{
          nav2.style.cssText="transform: translateX(-100%);"
          i=0;
        }
      
    }

    //EVENTOS  
    menu.addEventListener("click",abrir);
    
}());