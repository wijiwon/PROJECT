//------------프롤로그 도입부분 애니메이션 ---------------------
let prol1 = document.querySelector(".prol1");
let prol2 = document.querySelector(".prol2");
let prol3 = document.querySelector(".prol3");
let prol4 = document.querySelector(".prol4");
let prol5 = document.querySelector(".prol5");
let prol = document.querySelectorAll(".Prologue");


window.onload = function(){

    for(i=1; i<7; i++){
        (function(x){
        
          console.log("즉시발동함수 > i="+i+"     x="+x)

          setTimeout(function(){
            console.log("setTimeout  > i="+i+"     x="+x)
            if(x == 1){
                if(!prol1.classList.contains("Pactive")){
                    prol1.classList.add("Pactive")
                }
            }
            if(x == 2){
                if(!prol2.classList.contains("Pactive")){
                    prol2.classList.add("Pactive")
                }
            }
            if(x == 3){
                if(!prol3.classList.contains("Pactive")){
                    prol3.classList.add("Pactive")
                }
            }
            if(x == 4){
                if(!prol4.classList.contains("Pactive")){
                    prol4.classList.add("Pactive")
                }
            }
            if(x == 5){
                if(!prol5.classList.contains("Pactive")){
                    prol5.classList.add("Pactive")
                    clearTimeout();
                }
            }
          }, 2000*x);

        })(i);
        //prol();
    }
}