//--------- Mysql 데이터베이스에 게시글에 대한 테이블 추가, 수정, 삭제 등을 위해 연결 ----------------
const mysql = require("./config");
//-------------------------------------------------------------------------------------------------

//--------- 게시글 데이터베이스에 대한 기능들 -------------------------------------------------------
const posts = {
    // 게시글 테이블을 생성해주는 함수
    initPostTable : async function(){
        try {
            const[result] = await mysql.query("SELECT * FROM posts");
            console.log(result);
        } catch (error) {
            // mysql에서 'like'로 퀄럼명을 적었더니 예약어였다.... 예약어는 퀄럼명으로 적용불가하여 'likes'로 대체
            await mysql.query("CREATE TABLE posts(postIndex INT AUTO_INCREMENT PRIMARY KEY, title VARCHAR(20), content VARCHAR(300), likes VARCHAR(10), comment VARCHAR(300), image VARCHAR(100))")
            // await mysql.query("ALTER TABLE posts ADD comment VARCHAR(300) NULL");
        }
    },
    // 게시글 리스트를 조회하는 함수
    ViewPostAll : async function(){
        try {
            const [result] = await mysql.query('SELECT * FROM posts');
            return result;
        } catch (error) {
            console.log("글 전체 조회 에러!")
        }
    },
    // 게시글을 추가 해주는 메소드
    Insert : async function(title, content, image){
        try {
            console.log("모델",image);
            await mysql.query("INSERT INTO posts (title, content, likes, image) VALUES (?,?,?,?)",[title, content, 0, image]);
            console.log("(models-posts) 글 추가 완료!")
        } catch (error) {
            console.log("(models-posts) 글 추가 에러남!")
            
        }
    },
    // 글을 선택했을 때 글 하나를 보여주는 함수
    SelectPost : async function(postIndex){
        try {
            const [result] = await mysql.query("SELECT * FROM posts WHERE postIndex = ?", [postIndex]);
            console.log("선택한 게시글: ", result[0]);
            return result[0];
        } catch (error) {
            console.log("글 선택 조회 에러!")
        }
    },
    // 글을 수정하는 메소드
    Update : async function(postIndex, title, content){
        try {
            await mysql.query("UPDATE posts SET title = ?, content = ? WHERE postIndex = ?", [title, content, postIndex]);
            console.log("게시글 수정 완료!")
        } catch (error) {
            console.log(error);
        }
    },
    // 글을 삭제하는 메소드
    Delete : async function(postIndex){
        try {
            await mysql.query("DELETE FROM posts WHERE postIndex=?; SET @CNT = 0; UPDATE posts SET posts.postIndex = @CNT:=@CNT+1; ALTER TABLE posts AUTO_INCREMENT = 0;",[postIndex]);
            console.log("게시글 삭제 완료");
        } catch (error) {
            console.log("(models) 게시글 삭제 에러남!");
            
        }
    },
    // 댓글 등록 메소드
    Comment : async function(postIndex, comment){
        try {
            await mysql.query("UPDATE posts SET comment = ? WHERE postIndex = ?", [comment, postIndex]);
        } catch (error) {     
            console.log("(models) 댓글 쓰기 에러남!")
        }
    },
    // 좋아요 기능 메소드
    Likes : async function(postIndex){
        try {
            await mysql.query("UPDATE posts SET likes = likes + 1 WHERE postIndex = ?", [postIndex]);
        } catch (error) {
            console.log("(models) 좋아요 버튼 에러!")
        }
    }
}
posts.initPostTable();


//--------- 게시글에 대한 기능이 담겨있는 객체 ------------------------------------------------------
module.exports = posts;
//-------------------------------------------------------------------------------------------------
