const { User } = require("../models");
const jwt = require("jsonwebtoken");

exports.Login = async (req, res) => {
  try {
    const { id, pw } = req.body;
    console.log("로그인할때 받아왔다", id, pw);

    const user = await User.findOne({ where: { user_id: id } });
    if (user == null) {
      res.json({ message: "가입된 계정이 없습니다." });
    }

    console.log("반환된 유저 값은?", user);
    console.log("반환된 유저 값은????", user.dataValues.user_pw);
    const { user_id, user_pw, name } = user;
    console.log("dfssd", user_id);
    console.log("dfssd", user_pw);
    console.log("dfssd", name);
    if (pw == user.dataValues.user_pw) {
      console.log("들어오나요");
      let token = jwt.sign(
        {
          user_id,
          user_pw,
          name,
        },
        process.env.ACCESS_TOKEN_KEY,
        {
          expiresIn: "20m",
        }
      );
      req.session.access_token = token;
      console.log(req.session);

      return res.status(200).json({ message: "로그인 완료" });
    }
  } catch (error) {
    console.log(error);
  }
};
