const { Post, User } = require("../models");

exports.PostAdd = (req, res) => {
  try {
    const { title, content } = req.body;
    const { acc_decoded } = req;
    console.log("제목", title);
    console.log("내용", content);
    console.log("작성자", acc_decoded);
    console.log("작성자", acc_decoded.name);
  } catch (error) {
    console.log(error);
  }
};
