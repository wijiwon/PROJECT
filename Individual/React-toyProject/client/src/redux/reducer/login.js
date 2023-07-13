let init = {
  id: "",
  pw: "",
  name: "",
  contentID: "",
  contentPW: "",
  textCon: false,
};

function reducer(state = init, action) {
  // axios로 회원가입시 정보를 보내고 로그인 시 받고싶은데
  // 무엇을 받아야하지...?
  // 로그인 성공한 계정의 정보를 action으로 받자
  return { ...state };
}

export default reducer;
