import "./Sidebar.css";
import Category from "./category/Category";
import Price from "./price/Price";
import Colors from "./colors/Colors";

const Sidebar = ({ filter, setFilter }) => {
  return <>
    <div className="sidebar-container">
      <div className="sidebar">
        <div className="logo-container">
            <h1>🛒</h1>
        </div>

        <Category filter={filter} setFilter={setFilter} />
        <Price filter={filter} setFilter={setFilter} />
        <Colors filter={filter} setFilter={setFilter} />
      </div>
    </div>
  </>
}

export default Sidebar