let lee = document.querySelector("#ID");
let lee1 = document.querySelector("#PWD");

function check() 
{
    if(lee.value=="hello"&& lee1.value=="123456")
    {
        window.open('game1.html');
    }
    else{
        alert("아이디 및 비밀번호 오류");
    }
}

