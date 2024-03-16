import { useState } from "react";
import Navbar from "./components/navbar/Navbar";
import Products from "./components/products/Products";
import Recommended from "./components/recommended/Recommended";
import Sidebar from "./components/sidebar/Sidebar";
import "./index.css";
import data from "./utils/data";

function App() {
  // const [searchQuery, setSearchQuery] = useState("");
  const [filter, setFilter] = useState({
    searchQuery: "",
    company: null,
    category: null,
    price: "",
    color: ""
  })

  const filterData = (filter) => {
    const { searchQuery, company, category, price, color } = filter;
    let filteredSearchItems = data.filter(item => (item.title.toLowerCase().includes(searchQuery.toLowerCase())));

    if(company && company !== "All") {
      filteredSearchItems = filteredSearchItems.filter(item => (item.company.toLowerCase().includes(company.toLowerCase())));
    }

    if(category && category !== "All") {
      filteredSearchItems = filteredSearchItems.filter(item => (item.category.toLowerCase().includes(category.toLowerCase())));
    }

    if(price && price !== "All") {
      if(price === "Over $150") {
        const maxPrice = price.replace(/\D/g, "");
        filteredSearchItems = filteredSearchItems.filter(item => (parseInt(item.newPrice) > parseInt(maxPrice.trim())));
      } else {
        const [minPrice, maxPrice] = price.replace(/\$/g, "").split(" - ");
        filteredSearchItems = filteredSearchItems.filter(item => (parseInt(item.newPrice) > parseInt(minPrice.trim()) && parseInt(item.newPrice) <= parseInt(maxPrice.trim())));
      }
    }

    if(color && color !== "All") {
      filteredSearchItems = filteredSearchItems.filter(item => (item.color.toLowerCase() === color.toLowerCase()));
    }

    return filteredSearchItems;
  }

  return (
    <div className="app">
      <Sidebar filter={filter} setFilter={setFilter} />
      <div className="products">
        <Navbar filter={filter} setFilter={setFilter} />
        <Recommended filter={filter} setFilter={setFilter} />
        <Products filter={filter} filterData={filterData} />
      </div>
    </div>
  );
}

export default App;
