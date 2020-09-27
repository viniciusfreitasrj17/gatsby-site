import styled, { css } from "styled-components"
import { Email, LocationOn, Phone } from "../../components/Icons"

const EmailContainer = styled(Email)`
  color: ${({ color }) => color || "#606060"};
  width: ${({ width }) => width || "35px"};

  ${({ danger }) =>
    danger &&
    css`
      color: #f00;
    `}

  ${({ primary }) =>
    primary &&
    css`
      color: #00f;
    `}

  ${({ alert }) =>
    alert &&
    css`
      color: #ff0;
    `}
`

export { EmailContainer }
