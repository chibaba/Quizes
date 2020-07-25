import styled, {createGlobalStyle} from 'styled-components'

//@ts-ignore
import BGImage from './images/quiz.jpg';

export const GlobalStyle = createGlobalStyle `
  html {
      height: 100%;
  }

  body {
      background-image: url(${BGImage});
      background-size: cover;
      margin: 0;
      padding: 0 20px;
      display: flex;
      justify-content: canter;
  }

  * {
      box-sizing: border-box;
      font-family: 'Catamaran', sans-serif;
  }
`