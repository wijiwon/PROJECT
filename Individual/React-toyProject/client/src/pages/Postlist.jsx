import React from "react";
import { PostDiv, PostBtn, APost, PostUpdateBtn } from "../components/layout";
import { useNavigate } from "react-router-dom";

const Postlist = () => {
  const nav = useNavigate();

  const HandleClick = () => {
    return nav("/postAdd");
  };
  return (
    <PostDiv>
      <PostBtn onClick={HandleClick}>글 추가</PostBtn>
      <APost>
        <div className="contentDiv">
          <div className="writer">작성자 jiwon</div>
          <div className="content">
            content 내용. 어제 너는 나를 버렸어 나는 아무 변명하지 못하고
            얌전하게 집에 돌아가 너무 피곤해 잠이들었어 눈이 떠지자마자 정신이
            없지 시간은 어쩌고 출근해야지 어쩌고 저쩌고 하기엔 내가 너무 바빠
            눈물이 멈췄을지도 졸린가 귀찮을지도 어쩌면 너를 사랑하지 않았었나봐
          </div>
        </div>
        <div className="btns">
          <PostUpdateBtn>✏️</PostUpdateBtn>
          <PostUpdateBtn>🗑️</PostUpdateBtn>
        </div>
      </APost>
    </PostDiv>
  );
};

export default Postlist;
