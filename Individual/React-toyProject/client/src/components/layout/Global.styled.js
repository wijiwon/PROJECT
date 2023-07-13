import {createGlobalStyle } from "styled-components";
// createGlobalStyle : 글로벌 스타일을 생성한다.
export const Globalstyle = createGlobalStyle`
@font-face {
    font-family: 'OAGothic-ExtraBold';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2302@1.0/OAGothic-ExtraBold.woff2') format('woff2');
    font-weight: 800;
    font-style: normal;
}

@font-face {
    font-family: 'SUITE-Regular';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2304-2@1.0/SUITE-Regular.woff2') format('woff2');
    font-weight: 400;
    font-style: normal;
}

& .App{
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100vw;
    height: 100vh;
}
`;