import styled from "styled-components"
import { FacebookSquare, Github, LinkedinSquare } from "../Icons"

const GithubIcon = styled(Github)`
  color: white;
  cursor: pointer;
  margin-right: 10px;
  width: 35px;

  &:hover {
    color: gray;
  }
`
const FacebookIcon = styled(FacebookSquare)`
  color: white;
  cursor: pointer;
  margin-right: 10px;
  width: 35px;

  &:hover {
    color: gray;
  }
`
const LinkedinIcon = styled(LinkedinSquare)`
  color: white;
  cursor: pointer;
  margin-right: 10px;
  width: 35px;

  &:hover {
    color: gray;
  }
`

export { GithubIcon, FacebookIcon, LinkedinIcon }
