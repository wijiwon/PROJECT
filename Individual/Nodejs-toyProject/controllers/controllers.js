const { posts } = require("../models");
const { users } = require("../models");

//----- 회원 관련 메소드 ---------------------------------------------------------------------------------

// 회원 가입 메소드
exports.Signup = async function(q,s){
    const { id, pw } = q.body;
    try {
        await users.Signup(id, pw);
    } catch (error) {
        console.log("(controller) 글 추가 에러");
    }
}

// 로그인 메소드
exports.Login = async function(q,s){
    const { id, pw } = q.body;
    try {
        const data = await users.Login(id, pw);
        // console.log(data);
        return data;
    } catch (error) {
        console.log("(controller) 로그인 에러!");
    }
}


//----- 게시글 관련 메소드 -------------------------------------------------------------------------------

// 전체 글 조회 메소드
exports.ViewPostAll = async function(q,s){
    try {
        const data = await posts.ViewPostAll();
        return data;
    } catch (error) {
        console.log("전체 글 조회. 컨트롤러 에러!");
    }
}
// 게시글 등록 메소드
exports.Insert = async function(q,s){
    const { title, content } = q.body;
    const image = q.file.filename;
    try {
        console.log("컨트롤러",image)
        await posts.Insert(title, content, image);
    } catch (error) {
        console.log("(controller) 글 추가 에러남!")
    }

}
// 글 하나 조회 메서드
exports.SelectPost = async function(q,s){
    const { postIndex } = q.params;
    try {
        const data = await posts.SelectPost(postIndex);
        return data;
    } catch (error) {
        console.log("(controller) 글 한개 조회 에러")
    }
}
// 게시글 수정 메소드
exports.Update = async function(q,s){
    const { postIndex } = q.params;
    console.log(q.params);
    const { title, content } = q.body;
    try {
        await posts.Update(postIndex, title, content);
    } catch (error) {
        console.log("(controller) 글 수정 에러남!");
    }
}
// 게시글 삭제 메소드
exports.Delete = async function(q,s){
    const { postIndex } = q.params;
    try {
        await posts.Delete(postIndex);
    } catch (error) {
        console.log("(controller) 글 삭제 에러남");
    }
}
// 게시글 댓글 추가 메소드
exports.Comment = async function(q,s){
    const { postIndex } = q.params;
    const { comment } = q.body;
    try {
        await posts.Comment(postIndex, comment);
        return postIndex;
    } catch (error) {
        console.log("(controller) 댓글 등록 에러남");
    }
}
//좋아요 기능 메소드
exports.Likes = async function(q,s){
    const { postIndex } = q.params;
    try {
        await posts.Likes(postIndex);
        return postIndex;
    } catch (error) {
        console.log("(controller) 좋아요 에러남")
        
    }
}
//-------------------------------------------------------------------------------------------------------