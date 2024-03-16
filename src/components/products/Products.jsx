import Card from "../Card";
import "./Products.css";
import data from "../../utils/data";
import { useEffect, useState } from "react";

const Products = ({ filter, filterData }) => {
  const [filteredItems, setFilteredItems] = useState([]);

  useEffect(() => {
    // const handleSearchQuery = () => {
    //   return data.filter((item) => {
    //     // console.log(item.title + "  ---> " + item.title.toLowerCase().includes(searchQuery.toLowerCase()));
    //     return item.title.toLowerCase().includes(searchQuery.toLowerCase())
    //   });
    // }

    // setFilteredItems(handleSearchQuery());

    setFilteredItems(filterData(filter));
  }, [filter])

  return <>
    {/* {console.log("Search Query ---> " + searchQuery)} */}
    <div className="card-container">
      {filteredItems.length == 0 && <div>
        <h1>No Results found.</h1>
      </div>}
      {filteredItems.length > 0 && filteredItems.map((card) => (
        <Card key={card.id} img={card.img} title={card.title} stars={card.star} reviews={card.reviews} prevPrice={card.prevPrice} newPrice={card.newPrice} />
      ))}
    </div>
  </>
}

export default Products