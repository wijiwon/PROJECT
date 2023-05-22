const { posts } = require("../models");
const { users } = require("../models");

const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { Refresh, SELECT } = require("../models/users");

//----- 회원 관련 메소드 ---------------------------------------------------------------------------------

// 토큰을 발급 및 저장하기 위한 변수

const createHash = (password) =>{
    return new Promise((resolve, reject)=>{
        bcrypt.hash(password,10,(err, data)=>{
            if(err) reject(err);
            resolve(data);
        })
    })
}

const compare = (password, hash)=>{
    return bcrypt.compare(password,hash);
}



// 회원 가입 메소드
exports.Signup = async function(q,s){
    const { id, pw } = q.body;
    const { userIndex } = q.params;
    const hash = await createHash(pw);
    try {
        await users.Signup(userIndex, id, hash);
    } catch (error) {
        console.log(error)
        console.log("(controller) 글 추가 에러");
    }
}

// 로그인 메소드
exports.Login = async function(q,s){
    // const { userIndex } = q.params;
    const { id,pw } = q.body;
    // console.log("params",q);
    // console.log("userIndex",userIndex);
    console.log("id",id);
    try {
        const data = await users.SELECT(id);
        console.log("data가뭐야",data)
        if(!data?.id){
            console.log("아이디 틀림");
            return res.send("아이디가 틀렸어요!");
        }

        const bcryptPW = await compare(pw, data.pw);
        if(!bcryptPW){
            console.log("비밀번호 틀림");
            return res.send("비밀번호가 틀렸어요!")
        }

        const accessToken = jwt.sign({
            user: data.id,
            nick: "amugae"
        },process.env.ACCESS_TOKEN,{
            expiresIn : "10s"
        })

        const refreshToken = jwt.sign({
            user:data.id
        }, process.env.REFRESH_TOKEN,{
            expiresIn: "30s"
        })

        q.session.access_token = accessToken;
        q.session.refresh_token = refreshToken;
        await Refresh(id, refreshToken);
        
        const con = 1; 
        await users.Continues(con,data.userIndex);
        s.redirect("/list");
        return data;
    } catch (error) {
        console.log("(controller) 로그인 에러!",error);
    }
}


exports.Verify = async(q,s,next)=>{
    const { access_token, refresh_token } = q.session;
    try {
        jwt.verify(access_token,process.env.ACCESS_TOKEN,(err,acc_edcoded)=>{
            if(err){
                jwt.verify(refresh_token,process.env.REFRESH_TOKEN, async (err,ref_edcoded)=>{
                    console.log("ref_edcoded",ref_edcoded)
                    if(err){
                        s.redirect("/list/login");
                    }
                    //새로운 엑세스 토큰 발급
                    const data = await SELECT(ref_edcoded.user)
                    // console.log("보여줘",data)
                    if(data.refresh !== refresh_token){
                        res.send("중복 로그인 되었습니다.")
                    }
                    else{
                        const accessToken = jwt.sign({
                            user: data.id,
                            nick: "amugae"
                        },process.env.ACCESS_TOKEN,{
                            expiresIn : "10s"
                        })
                        q.session.access_token = accessToken;
                        next();
                    }
                })
            }
            else{
                //정상 작동 긔긔....근데 뭘 적어야 전체적으로 전부 적용되지??
            }
        })
    } catch (error) {
        console.log(error)
    }
}

//----- 게시글 관련 메소드 -------------------------------------------------------------------------------

// 전체 글 조회 메소드
exports.ViewPostAll = async function(q,s){
    try {
        const { con } = q.params;
        const data = await posts.ViewPostAll();
        return { data, con };
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
    console.log("에러,,,?",q.params);
    const { postIndex, con } = q.params;
    const { id } = q.body;
    try {
        const postdata = await posts.SelectPost(postIndex);
        const userdata = await users.SELECT(id);
        return { postdata, userdata } ;
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