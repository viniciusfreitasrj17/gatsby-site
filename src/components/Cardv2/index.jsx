import React from "react"
import { CardV2Container } from "./styled"
import Images from "../Images"

function Cardv2({
  titleCard,
  textCard,
  colorButton,
  backgroundCard,
  styleDefault,
  nameImage,
}) {
  return (
    <CardV2Container
      className="card"
      background={backgroundCard}
      primary={styleDefault}
    >
      <Images name={nameImage} />
      <div className="card-body">
        <h5 className="card-title"> {titleCard} </h5>
        <p className="card-text"> {textCard} </p>
        <button className={`btn btn-${colorButton}`}>Go somewhere</button>
      </div>
    </CardV2Container>
  )
}

export default Cardv2
