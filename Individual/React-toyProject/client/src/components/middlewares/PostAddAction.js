import React from "react";

function PostAdd(title, content) {
  return (dispatch) => {
    axios
      .post(
        "/post/postAdd",
        { title, content },
        {
          withCredentials: true,
        }
      )
      .then((e) => {
        console.log(e);
      })
      .catch((err) => {
        console.log(err);
      });
  };
}

export default PostAdd;
