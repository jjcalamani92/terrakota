import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { useSelector } from 'react-redux';


interface State {
  Cart: any
}

export const CartLayout = () => {
  const { cart } = useSelector((state: State) => state.Cart);
  return (
    <div 
        className={cart ? 'cart active ' : 'cart'}
    >
        <div className="cart-item">
            <span> <FontAwesomeIcon icon={ faTimes }/> </span>
            <img src="https://res.cloudinary.com/dvcyhn0lj/image/upload/v1646839179/terrakota/products/peluches/2-23_hw9mrw.jpg" alt=""/>
            <div className="content">
                <h3>CONEJO GRANDE</h3>
                <div className="price">Bs15.99/-</div>
            </div>
        </div>
        <div className="cart-item">
            <span> <FontAwesomeIcon icon={ faTimes }/> </span>
            <img src="https://res.cloudinary.com/dvcyhn0lj/image/upload/v1646839145/terrakota/products/peluches/2-27_r3c98y.jpg" alt=""/>
            <div className="content">
                <h3>BEBÉ INCREIBLE</h3>
                <div className="price">Bs15.99/-</div>
            </div>
        </div>
        <a href="#" className="btn">comprar ahora</a>
    </div>
)
}
