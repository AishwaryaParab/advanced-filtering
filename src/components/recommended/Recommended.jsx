import "./Recommended.css";
import { recommended } from "../../utils/filters";
import Buttons from "../Buttons";
import { useState } from "react";

const Recommended = ({ filter, setFilter }) => {
  const [button, setButton] = useState("All");

  const handleRecommended = (type) => {
    setFilter({...filter, company: type});
  }

  return <>
    <div>
      <h2 className="recommended-title">Recommended</h2>

      <div className="recommended-flex">
        {recommended.map(btn => (
          <Buttons key={btn.id} label={btn.type} handleRecommended={handleRecommended} button={button} setButton={setButton} />
        ))}
      </div>
    </div>
  </>
}

export default Recommended