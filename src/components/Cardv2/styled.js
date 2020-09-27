import styled, { css } from "styled-components"

export const CardV2Container = styled.div`
  /* background: red; */
  background: ${props => props.background || "blue"};

  ${props =>
    props.primary &&
    css`
      background: #8a4baf;

      h5 {
        color: #f1defa;
      }

      p {
        color: #f1defa;
      }
    `}
`
