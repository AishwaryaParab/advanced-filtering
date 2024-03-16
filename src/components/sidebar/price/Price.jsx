import "./Price.css";
import { prices } from "../../../utils/filters";
import Input from "../../Input";
import { useEffect, useState } from "react";

const Price = ({ filter, setFilter }) => {
  const [price, setPrice] = useState("All");

  useEffect(() => {
    setFilter({...filter, price: price})
  }, [price])

  return (
    <div className="price-container">
    <h2 className="sidebar-title">Price</h2>

    <div>
      {prices.map(itemPrice => <Input key={itemPrice.id} type={itemPrice.type} selectedType={price} setSelectedType={setPrice} />)}
    </div>
  </div>
  )
}

export default Price