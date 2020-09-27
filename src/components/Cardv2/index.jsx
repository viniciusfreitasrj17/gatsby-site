import React from "react"
import { CardV2Container } from "./styled"

function Cardv2({
  titleCard,
  textCard,
  colorButton,
  backgroundCard,
  styleDefault,
}) {
  return (
    <CardV2Container
      className="card"
      background={backgroundCard}
      primary={styleDefault}
    >
      <div className="card-body">
        <h5 className="card-title"> {titleCard} </h5>
        <p className="card-text"> {textCard} </p>
        <a href="#" className={`btn btn-${colorButton}`}>
          Go somewhere
        </a>
      </div>
    </CardV2Container>
  )
}

export default Cardv2
