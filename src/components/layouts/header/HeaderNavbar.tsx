import { NavLink } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import { closeMenu } from "../../../context/action/Menu";
import { closeSearch } from "../../../context/action/Search";
import { closeCart } from "../../../context/action/Cart";
import { setImage } from '../../../context/action/Product';

interface State {
  Menu: any
  Search: any
  Cart: any
}

export const HeaderNavbar = () => {
  const { menu } = useSelector((state: State) => state.Menu);
  const { search } = useSelector((state: State) => state.Search);
  const { cart } = useSelector((state: State) => state.Cart);
  const dispatch = useDispatch();
  const handleClose = () => {
    dispatch( setImage(0) );
    if ( menu || search || cart ) {
      dispatch( closeMenu() );
      dispatch( closeSearch() );
      dispatch( closeCart() );
    }
  };
  return (
    <nav className={menu ? "navbar active" : "navbar"}>
      <ul>
        <li>
          <NavLink onClick={handleClose} to="tienda">tienda</NavLink>
        </li>
        <li>
          <NavLink onClick={handleClose} to="joyeros">joyeros</NavLink>
        </li>
        <li>
          <NavLink onClick={handleClose} to="peluches">peluches</NavLink>
        </li>
        <li>
          <NavLink onClick={handleClose} to="#">accesorios +</NavLink>
          <ul>
            <li>
              <NavLink onClick={handleClose} to="muebles">muebles</NavLink>
            </li>
            <li>
              <NavLink onClick={handleClose} to="para-el-hogar">para el hogar</NavLink>
            </li>
            <li>
              <NavLink onClick={handleClose} to="para-el-escritorio">para el escritorio</NavLink>
            </li>
            <li>
              <NavLink onClick={handleClose} to="para-la-cocina">para la cocina</NavLink>
            </li>
            
          </ul>
        </li>
        <li>
          <NavLink onClick={handleClose} to="#">ocaciones +</NavLink>
          <ul>
            <li>
              <NavLink onClick={handleClose} to="#">regalos para mujer</NavLink>
            </li>
            <li>
              <NavLink onClick={handleClose} to="#">regalos para hombre</NavLink>
            </li>
            <li>
              <NavLink onClick={handleClose} to="#">cumpleaños</NavLink>
            </li>
            <li>
              <NavLink onClick={handleClose} to="#">graduaciones</NavLink>
            </li>
            <li>
              <NavLink onClick={handleClose} to="#">intercambio de regalos</NavLink>
            </li>
            
          </ul>
        </li>
        <li>
          <NavLink onClick={handleClose} to="#">compras al por mayor</NavLink>
        </li>
        <li>
          <NavLink onClick={handleClose} to="contacto">Contacto</NavLink>
        </li>
      </ul>
    </nav>
  );
};
