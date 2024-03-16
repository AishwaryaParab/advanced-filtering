import Input from "../../Input";
import "./Category.css";
import {categories} from "../../../utils/filters";
import { useEffect, useState } from "react";

const Category = ({ filter, setFilter }) => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  useEffect(() => {
    setFilter({...filter, category: selectedCategory});
  }, [selectedCategory])

  return (
    <div>
      <h2 className="sidebar-title">Category</h2>

      <div>
        {categories.map(category => <Input key={category.id} type={category.type} selectedType={selectedCategory} setSelectedType={setSelectedCategory} />)}
      </div>
    </div>
  )
}

export default Category