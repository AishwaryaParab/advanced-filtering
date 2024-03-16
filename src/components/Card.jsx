import { AiFillStar } from "react-icons/ai";
import { BsFillBagHeartFill } from "react-icons/bs";

const Card = ({ img, title, stars, reviews, prevPrice, newPrice }) => {
  return (
    <div className="card">
        <div className="card-img-container">
          <img className="card-img" src={img} alt="shoe" />
        </div>
        <div className="card-details">
          <h3 className="card-title">{title}</h3>

          <div className="card-reviews">
            {Array.from({ length: stars }, (_, index) => index + 1).map((star) => (<AiFillStar key={star} className="rating-star" />))}
            <span className="total-reviews">{reviews}</span>
          </div>

          <div className="price-details">
            <div className="price">
              <del>{prevPrice}</del> {newPrice}
            </div>
            <div className="bag">
              <BsFillBagHeartFill className="bag-icon" />
            </div>
          </div>
        </div>
    </div>
  )
}

export default Card