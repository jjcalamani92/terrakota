import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye, faShare, faShareNodes, faShoppingCart, faStar, faStarHalfAlt } from '@fortawesome/free-solid-svg-icons';
import { Link, NavLink } from 'react-router-dom';

interface Props {
  title: String
  image: String
  titleURL: any
  price: String
  oldPrice: String
  category: String
};

export const CardLayout = ( {title, image, titleURL, price, oldPrice, category }:Props ) => {
  return (
    <NavLink to={`/${category}/${titleURL}`} className="card">
      <div className="image">
        <div className="icons">
          <a href="#">
            {" "}
            <FontAwesomeIcon className="icon" icon={faShoppingCart} />{" "}
          </a>
          <a href="#">
            {" "}
            <FontAwesomeIcon className="icon" icon={faShareNodes} />{" "}
          </a>
          <a href="#">
            {" "}
            <FontAwesomeIcon className="icon" icon={faEye} />{" "}
          </a>
        </div>
        <img src={`${image[0]}`} alt={`${title}`} />
      </div>
      <div className="content">
        <h3>{title}</h3>
        <div className="stars">
          <FontAwesomeIcon className="icon" icon={faStar} />
          <FontAwesomeIcon className="icon" icon={faStar} />
          <FontAwesomeIcon className="icon" icon={faStar} />
          <FontAwesomeIcon className="icon" icon={faStar} />
          <FontAwesomeIcon className="icon" icon={faStarHalfAlt} />
        </div>
        <div className="price">
          Bs {price} <span>Bs {oldPrice}</span>
        </div>
      </div>
    </NavLink>
  );
};
