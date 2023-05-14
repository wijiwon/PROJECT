let mon=0;
let number;
let resultElement;
let restmy;
let _money = window.localStorage.getItem("my");

function settingsValue(){
  document.querySelector('.infoValue').innerHTML = window.localStorage.getItem("Atk") || 0;
  document.querySelector('.infoValue1').innerHTML = window.localStorage.getItem("hp") || 0;
  document.querySelector('.infoValue2').innerHTML = window.localStorage.getItem("def") || 0;
  document.querySelector('.infovalue5').innerHTML = window.localStorage.getItem("my");
  document.querySelector('.cntRemains').innerHTML = window.localStorage.getItem("re") || 0;
  document.querySelector('.monsterText').innerHTML = window.localStorage.getItem("re") || 0;
}


settingsValue();



function money() {
  
  let money2 = document.querySelector(".infovalue5");

  money2.innerHTML = `${_money}`;
}

function buy() { //모르겠다

  
  let money2 = document.querySelector(".infovalue5");

  restmy = _money - (100*number);

  money2.innerHTML = `${restmy}`;
  window.localStorage.setItem("my",restmy);
  _money = window.localStorage.getItem("my");

}
function buy2() { //모르겠다

  
  let money2 = document.querySelector(".infovalue5");

 
  restmy = _money - (500*number);
  money2.innerHTML = `${restmy}`;
  window.localStorage.setItem("my",restmy);
  _money = window.localStorage.getItem("my");

}

// HP 물약 선택시 수량 카운트 -----------------------------------------------------------------------------------------
function countHp(type)  {        
                                   // 물품 선택 시 카운트할 함수
    // 결과를 표시할 element
    const resultElement = document.getElementById('HPresult');
    let money2 = document.querySelector(".infovalue5");
    // 현재 화면에 표시된 값
    number = resultElement.innerText;
    
    // 더하기/빼기
    if(type === 'HPplus' && number <= 998) {
      number = parseInt(number) + 1;
     

    }else if(type === 'HPminus' && number >= 1)  {
      number = parseInt(number) - 1;
    }

    // 결과 출력
  //   
    resultElement.innerText = number; // 몇개살지

    let saveNumber = parseInt(document.querySelector('.infoValue1').innerHTML) + number;
    window.localStorage.setItem("hp",saveNumber);
    settingsValue();

    // return number;

    // if(buyBtn.onclick=function(){

    //   let restmy;
    //   let money2 = document.querySelector(".infovalue5");

    //   restmy = _money - 100*number;
    //   money2.innerHTML = `${restmy}`;
    // });
}

  
//---------------------------------------------------------------------------------------------------------------------


// Atk 물약 선택시 수량 카운트 -----------------------------------------------------------------------------------------
function countAtk(type)  {                                         // 물품 선택 시 카운트할 함수
    // 결과를 표시할 element
    const resultElement = document.getElementById('ATKresult');
    
    // 현재 화면에 표시된 값
    number = resultElement.innerText;

    

    // 더하기/빼기
    if(type === 'ATKplus' && number <= 998) {
      number = parseInt(number) + 1;
      

    }else if(type === 'ATKminus' && number >= 1)  {
      number = parseInt(number) - 1;
    }
    
    // 결과 출력
    resultElement.innerText = number;

    
    let saveNumber = parseInt(document.querySelector('.infoValue').innerHTML) + number;
    window.localStorage.setItem("Atk",saveNumber);
    settingsValue();
  }
//---------------------------------------------------------------------------------------------------------------------

// 검 선택시 수량 카운트 -----------------------------------------------------------------------------------------
function countSD(type)  {                                         // 물품 선택 시 카운트할 함수
    // 결과를 표시할 element
    const resultElement = document.getElementById('SDresult');
    
    // 현재 화면에 표시된 값
    let number = resultElement.innerText;
    
    // 더하기/빼기
    if(type === 'SDplus' && number <= 998) {
      number = parseInt(number) + 1;

    }else if(type === 'SDminus' && number >= 1)  {
      number = parseInt(number) - 1;
    }
    
    // 결과 출력
    resultElement.innerText = number;
    
  }
//---------------------------------------------------------------------------------------------------------------------

// 갑옷 선택시 수량 카운트 -----------------------------------------------------------------------------------------
function countAM(type)  {                                         // 물품 선택 시 카운트할 함수
    // 결과를 표시할 element
    const resultElement = document.getElementById('AMresult');
    
    // 현재 화면에 표시된 값
    let number = resultElement.innerText;
    
    // 더하기/빼기
    if(type === 'AMplus' && number <= 998) {
      number = parseInt(number) + 1;

    }else if(type === 'AMminus' && number >= 1)  {
      number = parseInt(number) - 1;
    }
    
    // 결과 출력
    resultElement.innerText = number;
    
  }
//---------------------------------------------------------------------------------------------------------------------

// 방패 선택시 수량 카운트 -----------------------------------------------------------------------------------------
function countSH(type)  {                                         // 물품 선택 시 카운트할 함수
    // 결과를 표시할 element
    const resultElement = document.getElementById('SHresult');
    
    // 현재 화면에 표시된 값
   number = resultElement.innerText;
    
    // 더하기/빼기
    if(type === 'SHplus' && number <= 998) {
      number = parseInt(number) + 1;

    }else if(type === 'SHminus' && number >= 1)  {
      number = parseInt(number) - 1;
    }
    
    // 결과 출력
    resultElement.innerText = number;
 

    let saveNumber = parseInt(document.querySelector('.infoValue2').innerHTML) + number;
    window.localStorage.setItem("def",saveNumber);
    settingsValue();
  }
//---------------------------------------------------------------------------------------------------------------------







// HP 물약 선택시 나타날 팝업 -----------------------------------------------------------------------------------------

HP.onclick =  function popup(){                       //물품선택 시 나타날 팝업
    let pophp = document.querySelector(".infoHP");

    if(pophp.classList.contains('open')){     //open 클래스가 있는지 확인 있으면 true . display 적용은 css에서
      pophp.classList.remove('open');

    }
    else{
      pophp.classList.add('open');
    }
}
hpX.onclick =  function popup(){                 
    resultElement = document.getElementById('HPresult');   
    
       //x 시 나타날 팝업
    let pophp = document.querySelector(".infoHP");

    if(pophp.classList.contains('open')){     //open 클래스가 있는지 확인 있으면 true . display 적용은 css에서
      pophp.classList.remove('open');
      number=0;
      resultElement.innerText =number;
      
    }
    // else{
    //   pophp.classList.add('open');
      
    // }
}

//---------------------------------------------------------------------------------------------------------------------


// Atk 물약 선택시 나타날 팝업 -----------------------------------------------------------------------------------------

ATK.onclick =  function popup(){                   
    
  //물품선택 시 나타날 팝업
    let pophp = document.querySelector(".infoAtk");

    if(pophp.classList.contains('open')){     //open 클래스가 있는지 확인 있으면 true . display 적용은 css에서
      pophp.classList.remove('open');
      
    }
    else{
      pophp.classList.add('open');
    }
}
atkX.onclick =  function popup(){  
  resultElement = document.getElementById('ATKresult');           
              //x 시 나타날 팝업
    let pophp = document.querySelector(".infoAtk");

    if(pophp.classList.contains('open')){     //open 클래스가 있는지 확인 있으면 true . display 적용은 css에서
      pophp.classList.remove('open');
      number=0;
      resultElement.innerText =number;
    }
    else{
      pophp.classList.add('open');
    }
}

//---------------------------------------------------------------------------------------------------------------------

// 검 선택시 나타날 팝업 -----------------------------------------------------------------------------------------

SD.onclick =  function popup(){                       //물품선택 시 나타날 팝업
    let pophp = document.querySelector(".infoSd");

    if(pophp.classList.contains('open')){     //open 클래스가 있는지 확인 있으면 true . display 적용은 css에서
      pophp.classList.remove('open');
    }
    else{
      pophp.classList.add('open');
    }
}
SdX.onclick =  function popup(){                       //x 시 나타날 팝업
    let pophp = document.querySelector(".infoSd");

    if(pophp.classList.contains('open')){     //open 클래스가 있는지 확인 있으면 true . display 적용은 css에서
      pophp.classList.remove('open');
    }
    else{
      pophp.classList.add('open');
    }
}

//---------------------------------------------------------------------------------------------------------------------

// 갑옷 선택시 나타날 팝업 -----------------------------------------------------------------------------------------

AM.onclick =  function popup(){                       //물품선택 시 나타날 팝업
    let pophp = document.querySelector(".infoAm");

    if(pophp.classList.contains('open')){     //open 클래스가 있는지 확인 있으면 true . display 적용은 css에서
      pophp.classList.remove('open');
    }
    else{
      pophp.classList.add('open');
    }
}
AMX.onclick =  function popup(){                       //x 시 나타날 팝업
    let pophp = document.querySelector(".infoAm");

    if(pophp.classList.contains('open')){     //open 클래스가 있는지 확인 있으면 true . display 적용은 css에서
      pophp.classList.remove('open');
    }
    else{
      pophp.classList.add('open');
    }
}

//---------------------------------------------------------------------------------------------------------------------

// 방패 선택시 나타날 팝업 -----------------------------------------------------------------------------------------

SH.onclick =  function popup(){                   
      //물품선택 시 나타날 팝업
    let pophp = document.querySelector(".infoSh");

    if(pophp.classList.contains('open')){     //open 클래스가 있는지 확인 있으면 true . display 적용은 css에서
      pophp.classList.remove('open');
    }
    else{
      pophp.classList.add('open');
    }
}
SHX.onclick =  function popup(){       
  resultElement = document.getElementById('SHresult');                           //x 시 나타날 팝업
    let pophp = document.querySelector(".infoSh");

    if(pophp.classList.contains('open')){     //open 클래스가 있는지 확인 있으면 true . display 적용은 css에서
      pophp.classList.remove('open');
      number=0;
      resultElement.innerText =number;
    }
    else{
      pophp.classList.add('open');
    }
}

let _getmre = window.localStorage.getItem("re");
let _getmre2 = window.localStorage.getItem("re");

function re(){

  let getmre2 = document.querySelector('.cntRemains');
  let getmre3 = document.querySelector('.monsterText');
  
  getmre2.innerHTML = `${_getmre}`;
  getmre3.innerHTML = `${_getmre2}`;

}
//---------------------------------------------------------------------------------------------------------------------

function change(){
  
  
  let money = document.querySelector(".moneyText");l
  let cun=document.querySelector(".monsterText") ;     //예시. 기존 소지하고 있는것과 연결되어야 함
  
  // let mre = getmre.innerText;
  // for (let cun = 0; index < array.length; index++) {
  //   const element = array[index];
    
  // }
  let getmre2 = document.querySelector('.cntRemains');
  getmre2.innerHTML = `${_getmre}`;
  
  if(_getmre >= 5){
    _getmre = _getmre - 5;
    _money = parseInt(_money) +1000;
    mon = parseInt(_money);

    cun.innerHTML =`${_getmre}`;
    money.innerHTML =`${mon}`;
    // console.log(`교환완료`);
    // console.log(typeof mon);
  }
  
  
  else if(mre == 0){
    mre = 0;
    alert(`현재 개수: ${mre}개. 교환 할 수 없습니다! `)
    console.log(`교환안됨`);
    console.log(mon);
  }
  cun.innerText = `${mre}`;
  getmre.innerText = `${mre}`;
  money.innerText = `${mon}`;

}

