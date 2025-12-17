const btnCountinue = document.querySelector('.continue');

const showTurn = document.querySelector('.show-turn');
const controlGame=new ControlGame(player1,player2);

const matchRows=document.querySelectorAll('.match-row');

const resultContainer=document.querySelector('.result');

const gameContainer=document.querySelector('.game');

const resulTitle=resultContainer.querySelector('.title');

const audio=resultContainer.querySelector('audio');

window.addEventListener("load",()=>{
   showTurn.textContent =`Növbə: ${controlGame.getTurnPlayer()} ` 
    
});

btnCountinue.addEventListener('click',clickedButton);







const takeMatchstick=(img)=>{

    

   if(!img.classList.contains('unChanged')){
           img.classList.toggle('hideImage');
   }

   if(checkSelectAnyNow()){
        btnCountinue.classList.remove('hideButton');
    }

    else{
         btnCountinue.classList.add('hideButton');
    }

 

    matchRow=img.parentElement;

    otherMatchRows= [...matchRow.parentElement.children].filter(el => el !== matchRow);
     
    if(checkHaveHideImageClass(matchRow)){
          for(let div of otherMatchRows){
        div.classList.add('no-event');
    }
    
    }

    else{
           for(let div of otherMatchRows){
        div.classList.remove('no-event');
    }
    }
   

    console.log(otherMatchRows);

    
}

function checkHaveHideImageClass(matchRow){
    for( let img of matchRow.children ){
       
        if( img.classList.contains('hideImage')){
            return true;
        }
    }

    return false;
}


function checkSelectAnyNow(){
  var allImg = [...document.querySelectorAll('img')]
                .filter(x => !x.classList.contains('unChanged'));


  for(let img of allImg){
    if(img.classList.contains('hideImage') ){
        return true;
    }
  }

  return false;

   
}




function clickedButton(){
       var allImgUnchanged = [...document.querySelectorAll('img')]
                .filter(x => !x.classList.contains('hideImage'));

        
console.log(allImgUnchanged.length);
    if(allImgUnchanged.length ==0){
        console.log("oyun bitdi");
         gameContainer.classList.add('d-none');  
resultContainer.classList.remove('d-none');  
const message = controlGame.getOtherPlayer() === 'Player-1'
    ? 'Player-1 qazandı'
    : 'Player-2 qazandı ';
    resulTitle.textContent = message;

  


       

         


         
    }
    controlGame.changeTurn();
    showTurn.textContent =`Növbə: ${controlGame.getTurnPlayer()} ` 
    var allImg = document.querySelectorAll('img');
    

     for(let img of allImg){
        if(img.classList.contains('hideImage')){
            img.classList.add("unChanged");
        }


      
      
    

     
  }

    for(let div of matchRows){
            div.classList.remove('no-event');
        }




  

  btnCountinue.classList.add('hideButton');
}







