const mysql = require("./config");
const posts = require("./posts");

const comment = {
    // 댓글 테이블을 생성해주는 함수
    initCommentTable : async function(){
        try {
            const [result] = await mysql.query("SELECT * FROM posts");
            console.log(result);
            console.log(result[0].postIndex);
        } catch (error) {
            await mysql.query("CREATE TABLE comment(commentIndex INT AUTO_IMCREMENT PRIMARY KEY, text VARCHAR(100) postdex VARCHAR(10))")
        }
    },
    // 댓글을 추가해주는 함수
    CommentAdd : async function(){
        try {
            const [result] = await mysql.query("SELECT * FROM posts");
            console.log(result[0].postIndex);
            const posts = await mysql.query("SELECT * FROM information_schema.table_constraints WHERE table_name = 'posts'")
            // await mysql.query("INSERT INTO comment(")
            console.log(posts);
        } catch (error) {
            
        }
    }
}
comment.initCommentTable();