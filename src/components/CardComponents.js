import React from "react";

const CardComponents = ({ monster }) => {
  const handlcart = (monster) => {
    return (
      <div className="card-filter-cart">
        <img
          alt="monster"
          src={`https://robohash.org/${monster.id}?set=set2`}
        />
        <h1 key={monster.id}>{monster.name}</h1>
        <h4>{monster.email}</h4>
      </div>
    );
  };
  return <div>{handlcart(monster)}</div>;
};
export default CardComponents;
