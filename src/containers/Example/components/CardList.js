import React from "react";
import "./CardList.css";

const Item = ({ label, value }) => (
  <div className="Item">
    <div className="Item_Label">{label}</div>
    <div className="Item_Value">{value}</div>
  </div>
);

const ItemsCard = ({ data }) => {
  const [
    ISIN,
    Descriptor,
    WeightedAveragePrice,
    LastTradePrice,
    WeightedAverageYield,
    LastTradeYield,
    Value,
    NoOfTrades
  ] = Object.keys(data);

  return (
    <div className="Item_Card">
      <Item label={ISIN} value={data[ISIN]} />
      <Item label={Descriptor} value={data[Descriptor]} />
      <Item label={WeightedAveragePrice} value={data[WeightedAveragePrice]} />
      <Item label={LastTradePrice} value={data[LastTradePrice]} />
      <Item label={WeightedAverageYield} value={data[WeightedAverageYield]} />
      <Item label={LastTradeYield} value={data[LastTradeYield]} />
      <Item label={Value} value={data[Value]} />
      <Item label={NoOfTrades} value={data[NoOfTrades]} />
    </div>
  );
};

const CardList = ({ Data }) => (
  <div className="Card_List">
    {Data.map(item => (
      <ItemsCard data={item} />
    ))}
  </div>
);

export default CardList;
