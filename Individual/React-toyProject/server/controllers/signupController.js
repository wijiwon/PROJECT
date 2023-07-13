const { User } = require("../models");

exports.UserAdd = async (req, res) => {
  try {
    const { id, pw, name } = req.body;
    console.log("굿굿");
    console.log("sdfsdfsd", id, pw, name);

    const user = await User.findOne({ where: { user_id: id } });
    if (user != null) {
      res.status(200).json({ message: "가입된 계정이 있습니다." });
    }

    await User.create({
      user_id: id,
      user_pw: pw,
      name: name,
    });
    res.status(200).json({ message: "회원가입 완료" });
  } catch (error) {
    console.log("컨트롤러 에러", error);
  }
};
