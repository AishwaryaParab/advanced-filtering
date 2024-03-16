import "./Navbar.css";
import { FiHeart } from "react-icons/fi";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { AiOutlineUserAdd } from "react-icons/ai";

const Navbar = ({ filter, setFilter }) => {
  return (
    <nav>
      <div className="nav-container">
        <input 
          type="text"
          className="search-input"
          placeholder="Search for your to-be shoes"
          value={filter.searchQuery}
          onChange={(e) => setFilter({...filter, searchQuery: e.target.value})}
        />
      </div>

      <div className="profile-container">
        <a>
          <FiHeart className="nav-icon" />
        </a>

        <a>
          <AiOutlineShoppingCart className="nav-icon" />
        </a>

        <a>
          <AiOutlineUserAdd className="nav-icon"/>
        </a>
      </div>
    </nav>
  )
}

export default Navbar