import styled, { css } from "styled-components"
import { Email, Phone, LocationOn } from "../../components/Icons"

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

const PhoneContainer = styled(Phone)`
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

const LocationOnContainer = styled(LocationOn)`
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

export { EmailContainer, PhoneContainer, LocationOnContainer }
