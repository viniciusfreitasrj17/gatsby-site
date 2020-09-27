import React from "react"

function Cardv2({ titleCard, textCard, colorButton }) {
  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title"> {titleCard} </h5>
        <p className="card-text"> {textCard} </p>
        <a href="#" className={`btn btn-${colorButton}`}>
          Go somewhere
        </a>
      </div>
    </div>
  )
}

export default Cardv2
