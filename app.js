let gseq = [];
let useq = [];
let started = false;
let level = 0;

let btn = ["yellow" , "red","purple" , "green"];
let h2 = document.querySelector("h2");
document.addEventListener("keypress" , function(){
      if(started==false){
       started = true;
      levelup();
      }
});


function levelup(){
      useq = [];
      level++;
       h2.innerText = `level ${level}`;
        let randInd = Math.floor(Math.random()*3);
        let rancol = btn[randInd];
        let ranBtn = document.querySelector(`.${rancol}`);
       gseq.push(rancol);
       console.log(gseq);
       btnflash(ranBtn);
}

function checkAns(idx){

             if(gseq[idx] === useq[idx]){
           if(gseq.length === useq.length){
          setTimeout(levelup , 1000);
           }
           } else{
       
            h2.innerHTML = `Game over! Your score was <b>${level}  <b> <br>   please press any key to start `;
            document.querySelector("body").style.backgroundColor = "red";
            setTimeout(function(){
                  document.querySelector("body").style.backgroundColor = "white";
            },150);
         
            reset();
           }
}
function btnflash(btn){
       btn.classList.add("flash");
       setTimeout(function () {
            btn.classList.remove("flash");
       }, 250);
}

function btnpress(){
            let btn = this;
            btnflash(btn);
            usercol = btn.getAttribute("id");
            useq.push(usercol);
            checkAns(useq.length-1);
}

let allBtns = document.querySelectorAll(".btn");
for(Btn of allBtns){
      Btn.addEventListener("click" , btnpress);
}
function reset(){
 started = false;
 level = 0;
 gseq = [];
  useq = [];

}

