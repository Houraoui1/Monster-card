import React, { Component } from "react";
import CardComponents from "./CardComponents";


const CardFilter = ({filtermonster}) => {

  return (
    <div className="card-filter-list">
        {filtermonster.map((monster) => {
          return <div key={monster.id}>
            <CardComponents monster={monster}/>
          </div>;
        })}
      </div>
  )
}

export default CardFilter


