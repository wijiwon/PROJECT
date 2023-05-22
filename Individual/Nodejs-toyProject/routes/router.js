
//--------- express 모듈 가져오기 -----------------------------------------------------------------
const express = require("express");
const path = require("path");

const session = require('express-session')
const dot = require("dotenv").config();
const jwt = require("jsonwebtoken");
//-------------------------------------------------------------------------------------------------
const router = express.Router();

const { ViewPostAll, Insert, SelectPost, Update, Delete, Comment, Likes, Signup, Login, Verify } = require("../controllers/controllers");
const multer = require("multer");

router.get('/', async(req,res)=>{
    try {
        const { data } = await ViewPostAll(req, res);
        // if(con === 1){
        //     res.render('main', { data });
        // };
        res.render('main', { data });
        res.send("다시 로그인하세요!")
    } catch (error) {
        console.log("자유게시판 그리다 에러!")
    }
})


//----- 회원 관련 메소드 ---------------------------------------------------------------------------------

// 회원가입 페이지 렌더 
router.get('/signup',(req,res)=>{
    res.render('signup');
})

// 회원가입 요청 시
router.post('/signup', async(req,res)=>{
    try {
        await Signup(req,res);
        res.redirect('/list/login');
    } catch (error) {
        console.log("(router) 회원가입 하다가 에러남")
    }
})

// 로그인 페이지 렌더
router.get('/login',(req,res)=>{
    res.render('login');
})

// 로그인에러 페이지 렌더
router.get('/loginerr',(req,res)=>{
    res.render('loginerr');
})

// 로그인 버튼 동작
router.post('/login', Login)


//----- 게시글 관련 메소드 -------------------------------------------------------------------------------

// 게시글 추가 페이지를 그림
router.get('/insert', Verify, (req,res)=>{

    // if(con === 1){ 
    // };
    // res.send("다시 로그인하세요!")
    res.render('insert');
})

// 게시글 추가 요청을 처리.
var storage = multer.diskStorage({
    destination : function(req, file, cb){
        cb(null, (path.join(__dirname, '..', "upload")))
    },
    filename : function(req, file, cb){
        // path.extname: 해당 매개변수의 파일 확장자명을 리턴한다.
        const ext = path.extname(file.originalname);
        cb(null, file.originalname + "_" + Date.now() + ext);
    }
});
// multer에 storage속성이 있어, 저장경로와 저장이름을 저장할 수 있다.
var upload = multer({storage: storage});

router.post('/insert', upload.single('image'), async(req,res)=>{
    try {
        await Insert(req,res);
        res.redirect("/list");
    } catch (error) {
        console.log(error)
        console.log("(router) 글 추가하다 에러!")
    }
})



// 게시글 상세 페이지
router.get('/detail/:postIndex', async (req,res)=>{
    try {
        const {postdata, userdata} = await SelectPost(req,res);
        console.log("postdata",postdata)
        console.log("userdata",userdata)
        res.render('detail',{postdata})
    } catch (error) {
        console.log("(router) 게시글 상세페이지 그리다 에러남!")
    }
})
// 게시글 수정 페이지 그림
router.get('/edit/:postIndex', Verify, async (req,res)=>{
    try {
        const {postdata, userdata} = await SelectPost(req,res);
        console.log("postdata",postdata)
        console.log("userdata",userdata)
        res.render('edit',{postdata});
    } catch (error) {
        console.log("(router) 수정 페이지 그리다 에러!")
    }
})
// 게시글 수정 버튼 눌러서 수정
router.post('/edit/:postIndex', async (req,res)=>{
    try {
        await Update(req,res);
        res.redirect('/list');
    } catch (error) {
        console.log("(router) 게시글 수정하다가 에러!")
    }
})
// 게시글 삭제 처리
router.get('/delete/:postIndex', async (req,res)=>{
    try {
        await Delete(req,res);
        res.redirect('/list');
    } catch (error) {
        console.log("게시글 삭제 에러!")
    }
})
// 게시글 댓글 처리
router.post('/detail/:postIndex', async (req,res)=>{
    try {
        const data = await Comment(req,res);
        console.log(data);
        res.redirect('/list/detail/'+data);
    } catch (error) {
        console.log("(router) 댓글 등록 에러!");
        console.log(error);
    }
})
// 좋아요 기능
router.get('/likes/:postIndex', async (req,res)=>{
    try {
        const data = await Likes(req,res);
        res.redirect('/list/detail/'+data);
    } catch (error) {
        console.log("(router) 좋아요 에러남")
        
    }
})
//-------------------------------------------------------------------------------------------------------



module.exports = router;