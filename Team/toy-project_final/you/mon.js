let userman;
let dieMonster=[];
let monsterArr=[];
let mainmonster;
let outputdiv = document.querySelector(".monster-output");
// 캐릭터 생성자함수

let nums = [0,1,2,3,4,5,6,7,8,9]
console.log(nums.splice(3,2));
console.log(nums);



monsterSetup();

console.log(monsterArr);

function user(number){
  if(number == 1){
    this.name = "player1"; //공격력 쎈 애
    this.atk = 40; //공격력 
    this.def = 10; //방격력 
  }
  else{
    this.name = "player2"; //방어력 쎈 애
    this.atk = 30; //공격력 
    this.def = 20; //방격력 
  }
  // 고정값
  this.hp = 100; //체력 100
  this.exp = 0; //경험치 0
  this.money = 0; //돈 0
  this.item = null; //무기
  this.level = 1; //레벨
}
// 몬스터 생성자함수
function monster(name, hp, atk, def, exp, money){
  this.name = name;
  this.hp = hp;
  this.atk = atk;
  this.def = def;
  this.exp = exp;
  this.money = money
  this.box = null;
};

// 유저정보
function userselect(userman){
  let outputUserData  = document.querySelector(".userData");
  outputUserData.innerHTML = `캐릭터레벨${userman.level} 캐릭터이름: ${userman.name} 캐릭터HP: ${userman.hp} 캐릭터 공격력: ${userman.atk} 캐릭터 방어력: ${userman.def} 경험치: ${userman.exp}/${userman.level * 30} 돈: ${userman.money} 무기: ${userman.item}`;
}
// 몬스터 정보
function monsterSelect(){
  outputdiv.innerHTML = `몬스터이름: ${mainmonster.name} 몬스터HP: ${mainmonster.hp} 몬스터 공격력: ${mainmonster.atk}  몬스터 방격력: ${mainmonster.def} 몬스터랜덤박스: ${mainmonster.box}`
}

function monsterSetup(){
  monsterArr[0]= new monster("몬스터1", 20, 10, 10, 5, 1000)
  monsterArr[1]= new monster("몬스터2", 40, 15, 15, 10, 1000)
  monsterArr[2]= new monster("몬스터3", 30, 20, 20, 15, 1000)
  monsterArr[3]= new monster("몬스터4", 45, 25, 25, 20, 1000)
  monsterArr[4]= new monster("몬스터5", 50, 30, 25, 25, 1000)
  monsterArr[5]= new monster("몬스터6", 70, 30, 30, 30, 1000)
  monsterArr[6]= new monster("몬스터7", 80, 30, 30, 35, 1000)
  monsterArr[7]= new monster("몬스터8", 90, 35, 30, 40, 1000)
  monsterArr[8]= new monster("몬스터9", 100, 35, 30, 40, 1000)
  monsterArr[9]= new monster("보스몬", 150, 50, 10, 100, 1000)
}

// monsterArr[0]= new monster("몬스터1", 20, 30, 10, 20); //체력 20 
// monsterArr[1]= new monster("몬스터2", 40, 20, 30, 20); //체력 40 

// 몬스터 랜덤으로 나오기
function monsterChoice(){
  
  let randomIndex = Math.floor(Math.random()* monsterArr.length);
  if(mainmonster == null){
    for (let i = 0; i < monsterArr.length; i++) {
        switch (randomIndex){
          case i:
              mainmonster = monsterArr[i];
              box();
            break;
          default:
            break;
        }
  }
  }
  outputdiv.innerHTML = `몬스터이름: ${mainmonster.name} 몬스터HP: ${mainmonster.hp} 몬스터 공격력: ${mainmonster.atk}  몬스터 방격력: ${mainmonster.def} 몬스터랜덤박스: ${mainmonster.box}`
}
// 랜덤박스 (hpPotion, atkPotion, turn) : 랜덤
function box(){
  let boxlist = ["hpPotion","atkPotion","turn"];
  let randombox = (Math.floor(Math.random()*boxlist.length));
  for (let i = 0; i < boxlist.length; i++) {
    switch (randombox) {
      case i:
        mainmonster.box = boxlist[i];
        break;
      default:
        break;
    };
  }
}

// 온클릭으로 연결
// 유저선택(1,2)
user1.onclick = function(){
  userman = new user(1);
  userselect(userman);
}
user2.onclick = function(){
  userman = new user(0);
  userselect(userman);
}
// 산책 버튼
walk.addEventListener("click",monsterChoice);
// 도망가기
run.onclick = function(){
  mainmonster = null;
  outputdiv.innerHTML = mainmonster;
}
// 몬스터 처치시(경험치,돈,몬스터잔해물) 얻음
function expFun(exp,money){
  userman.exp += exp;
  userman.money += money;
  dieMonster.push("잔해물")
  dieMonster.push(mainmonster.box);
  if(userman.level * 30 <= userman.exp){
    userman.exp -= userman.level * 30;
    userman.level += 1;
    // userman.atk += 10;
    // userman.def += 5;
    // userman.hp += 50;
  }
  userselect(userman);
  console.log(dieMonster);
}

// 플레이어가 몬스터 공격하기
// 몬스터 hp - (유저공격력 - 몬스터 방어력)
attack.onclick = function(){
  if((userman.atk - mainmonster.def) <= 0){
    document.querySelector(".msg").innerHTML += `<div>당신은 ${mainmonster.name}에게 피해를 입히지 못했다</div>`
    monsterSelect()
  }else {
    document.querySelector(".msg").innerHTML += `<div>당신은 ${mainmonster.name}에게 ${(userman.atk - mainmonster.def)}피해를 입혔다</div>`
    mainmonster.hp -= (userman.atk - mainmonster.def)
    monsterSelect()
  }if(mainmonster.hp <= 0){
    alert(`당신은 ${mainmonster.name}를 처치했다`);
    document.querySelector(".msg").innerHTML= ""
    expFun(mainmonster.exp, mainmonster.money);
    console.log(monsterArr);
    mainmonster = null;
    outputdiv.innerHTML = mainmonster;
    monsterSetup();
  }
}
// 몬스터가 플레이어 공격하기
// 몬스터 피해 입혔을때
// 몬스터 죽였을때 값 초기화

// 죽었을때 박스 떨어지기 -> 완료

// 오류 : 몬스터 처치하면 다시 hp 리셋 -> 함수 만들어서 공격값 밑에 리셋

// 플레이어 죽으면 어떻게 할건지~