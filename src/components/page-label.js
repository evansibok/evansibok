import React from "react"

export const PageLabel = ({ name }) => {
  return (
    <div className="pLCon">
      <div className="emptyDivs"></div>
      <p>{name}</p>
      <div className="emptyDivs"></div>
    </div>
  )
}
