import React from "react";
require('icon/charts.svg')
require('icon/tag.svg')
require('icon/money.svg')

type Props={
  name:string
}
const Icon=(props:Props)=>{
  return(
    <svg className="icon" >
      <use xlinkHref={"#"+props.name}/>
    </svg>
    )

}

export default Icon