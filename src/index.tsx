import React from 'react';
import ReactDOM from 'react-dom/client';
import { RecoilRoot } from 'recoil';
import App from "./App";
import 'bootstrap/dist/css/bootstrap.css';

import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, menu, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed,
figure, figcaption, footer, header, hgroup,
main, menu, nav, output, ruby, section, summary,
time, mark, audio, video {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font-family: 'Inconsolata', monospace;
  vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure,
footer, header, hgroup, main, menu, nav, section {
  display: block;
}
/* HTML5 hidden-attribute fix for newer browsers */
*[hidden] {
    display: none;
}
body {
  line-height: 1;
}
menu, ol, ul {
  list-style: none;
}
blockquote, q {
  quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
  content: '';
  content: none;
}
table {
  border-collapse: collapse;
  border-spacing: 0;
}
* {
  box-sizing: border-box;
}
body {
  background-color: #f7f7f7;
  // background-color: #fff254;
  color: #424242;
  font-family: 'Inconsolata', monospace;
  font-size: 1.2vw;
  line-height: 2.4vw;
  // margin: 3vh 4vw;
  font-weight: 400;
}

h1{
  font-size: 2.4vw;
  line-height: 2.4vw;
  margin-bottom: 1vh;
}

h2{
  font-weight: 600;
}

h3{
  font-size: 1.6vw;
  z-index:1;
  font-weight: 400;
  padding: 2vh 2vw;
}

a {
  text-decoration:none;
  color: #424242;
}

a:hover{
  color: #424242;
}

hr {
  border: 0.075vw solid #424242;
  margin: 0 1vw;
  opacity: 1;
}


@media only screen and (max-width: 768px){
  body{
    font-size: 16px;
    line-height: 30px;
  }
  h1{
    font-size: 24px;
  }
  h3{
    font-size: 24px;
  }
}
`;


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement);
root.render(
  <div>
    <React.StrictMode>
    <RecoilRoot>
          <GlobalStyle />
          <App />
    </RecoilRoot>
  </React.StrictMode>
  </div>
);
