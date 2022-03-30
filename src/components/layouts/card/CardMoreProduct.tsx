import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye, faShare, faShareNodes, faShoppingCart, faStar, faStarHalfAlt } from '@fortawesome/free-solid-svg-icons';
import { Link, NavLink } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setImage } from '../../../context/action/Product';

interface Props {
  title: String
  image: String
  titleURL: any
  price: String
  oldPrice: String
  category: String
};

export const CardMoreProduct = ( {title, image, titleURL, price, oldPrice, category }:Props ) => {
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch( setImage(0) );
  }
  return (
    <NavLink to={`/${category}/${titleURL}`} className="card" onClick={handleClick}>
      <div className="image">
        
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
