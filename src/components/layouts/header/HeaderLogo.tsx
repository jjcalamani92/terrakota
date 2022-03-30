import { faCode, faLaptop } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavLink } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import { closeMenu } from '../../../context/action/Menu';
import { closeSearch } from '../../../context/action/Search';
import { closeCart } from '../../../context/action/Cart';

interface State {
  Menu: any
  Search: any
  Cart: any
}

export const HeaderLogo = () => {
  const { menu } = useSelector((state: State) => state.Menu);
  const { search } = useSelector((state: State) => state.Search);
  const { cart } = useSelector((state: State) => state.Cart);
  const dispatch = useDispatch();

  const handleClose = () => {
    if ( menu || search || cart ) {
      dispatch( closeMenu() );
      dispatch( closeSearch() );
      dispatch( closeCart() );
    }

  };
  return (
    <div className="logo">
      <NavLink onClick={handleClose} to="/" className="logo">
        {/* <FontAwesomeIcon className="icon" icon={faCode} /> */}
        <img src="https://res.cloudinary.com/dvcyhn0lj/image/upload/v1646828396/terrakota/cropped-2-1-web_ch5i6w.png" alt="" />
      </NavLink>
    </div>
  );
};