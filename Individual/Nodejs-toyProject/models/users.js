//--------- Mysql 데이터베이스에 유저에 대한 테이블 추가, 수정, 삭제 등을 위해 연결 ------------------
const mysql = require("./config");
//-------------------------------------------------------------------------------------------------

//--------- 유저 데이터베이스에 대한 기능들 ---------------------------------------------------------
const users = {
    // 유저 테이블을 생성시키는 함수
    initUserTable : async function() {
        try {
            const[result] = await mysql.query('SELECT * FROM users');
            console.log(result);
        } catch (error) {
            await mysql.query('CREATE TABLE users(userIndex INT AUTO_INCREMENT PRIMARY KEY, id VARCHAR(10), pw VARCHAR(20))');
        }
    },
    // 회원가입 하는 메소드
    Signup : async function(id,pw){
        try {
            await mysql.query("INSERT INTO users (id, pw) VALUES (?,?)",[id,pw]);
        } catch (error) {
            console.log("회원가입 에러남!")
        }
    },
    // 로그인 하는 메소드
    Login : async function(id,pw){
        try {
            const [result] = await mysql.query("SELECT * FROM users WHERE id = ? AND pw = ?",[id,pw]);
            // if(result.length === 0){

            // }
            // else{

            // }
            // return result.length;
            return result[0];
            // console.log(result);
        } catch (error) {
            console.log(error);
            console.log("(models) 로그인 에러!");
        }
    }



}
users.initUserTable();


//--------- 게시글에 대한 기능이 담겨있는 객체 ------------------------------------------------------
module.exports = users;
//-------------------------------------------------------------------------------------------------