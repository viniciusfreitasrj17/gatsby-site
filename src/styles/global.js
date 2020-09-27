import { createGlobalStyle } from "styled-components"

const Global = createGlobalStyle`
  body {
    background: ${props => (props.blackColor ? "black" : "white")};
  }

  h1 {
    color: #639
  }
`

export default Global
