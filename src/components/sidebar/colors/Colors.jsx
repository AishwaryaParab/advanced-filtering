import "./Colors.css";
import { colors } from "../../../utils/filters";
import Input from "../../Input";
import { useEffect, useState } from "react";

const Colors = ({ filter, setFilter }) => {
  const [color, setColor] = useState("All");

  useEffect(() => {
    setFilter({...filter, color: color})
  }, [color])

  return (
    <div className="colors-container">
    <h2 className="sidebar-title">Colors</h2>

    <div>
      {colors.map(itemColor => <Input key={itemColor.id} type={itemColor.type} selectedType={color} setSelectedType={setColor} />)}
    </div>
  </div>
  )
}

export default Colors