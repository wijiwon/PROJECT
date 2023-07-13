import React from "react";
import { PostAddDiv,PostBtn } from "../components/layout";

const PostAdd = () => {
  return (
    <PostAddDiv>
      <div className="Title">
        <div>Title</div>
        <input></input>
      </div>
      <div className="Content">
        <input></input>
      </div>
      <div>
        <PostBtn>등록</PostBtn>
      </div>
    </PostAddDiv>
  );
};

export default PostAdd;
