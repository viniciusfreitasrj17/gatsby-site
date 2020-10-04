import { createGlobalStyle } from "styled-components"

const Global = createGlobalStyle`
  body {
    background: ${props => (props.blackColor ? "black" : "white")};
  }

  h1 {
    color: #9963ba;
  }
`

export default Global
