import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useSelector, useDispatch } from "react-redux";
import {
  faCheckCircle,
  faStar,
  faStarHalfAlt,
} from "@fortawesome/free-solid-svg-icons";
import { useParams } from "react-router-dom";
import { getProductByTitleURL } from "../../../helpers/getProductByTitleURL";
import { HeadingPrimary, HeadingTertiary } from "../heading/HeadingLayouts";
import { setImage } from "../../../context/action/Product";
import {
  faFacebookF,
  faTwitter,
  faLinkedin,
  faWhatsapp,
  faInstagram,
  faPinterestP,
  faPinterest,
  faTelegram,
} from "@fortawesome/free-brands-svg-icons";
import { CardLayout } from "../card/CardLayout";
import { ProductComponent } from "../../pages/product/ProductComponent";
import { CardMoreProduct } from "../card/CardMoreProduct";
import { getProductByCategory } from "../../../helpers/getProductByCategory";

interface State {
  Product: any;
  index: Number;
}

export const DetailLayout = () => {
  const { products, index } = useSelector((state: State) => state.Product);
  const { name } = useParams();
  const product = getProductByTitleURL(products, name);

  const moreProduct = getProductByCategory(products, product.category);
  const dispatch = useDispatch();
  const handleImage = (i: any) => {
    dispatch(setImage(i));
  };

  return (
    <>
      <HeadingPrimary titleP="detalles del producto" />
      <section className="detail">
        {/* <!-- card left --> */}
        <div className="image">
          <div className="image-select">
            {product.image.map((img: any, i: any) => (
              <div className="img-item" key={i}>
                <img
                  src={img}
                  alt={product.title}
                  onClick={() => handleImage(i)}
                  className={index === i ? "active" : ""}
                />
              </div>
            ))}
          </div>
          <div className="image-display">
            <img src={`${product.image[index]}`} alt={`${product.title}`} />
          </div>
        </div>
        {/* <!-- card right --> */}
        <div className="content">
          <h2 className="product-title">{product.title}</h2>
          {/* <a href = "#" className = "product-link">visit nike store</a> */}
          <div className="product-rating">
            <FontAwesomeIcon className="icon" icon={faStar} />
            <FontAwesomeIcon className="icon" icon={faStar} />
            <FontAwesomeIcon className="icon" icon={faStar} />
            <FontAwesomeIcon className="icon" icon={faStar} />
            <FontAwesomeIcon className="icon" icon={faStarHalfAlt} />
            <span>4.7(21)</span>
          </div>

          <div className="product-price">
            <p className="last-price">
              Precio anterior: <span>Bs {product.oldPrice}</span>
            </p>
            <p className="new-price">
              Nuevo precio: <span>Bs {product.price} (5%)</span>
            </p>
          </div>

          <div className="product-detail">
            <h2>sobre este producto: </h2>
            <p>{product.description}</p>
            <ul>
              <li>
                <FontAwesomeIcon className="icon" icon={faCheckCircle} />
                Color: <span>Como se muestra en la imagen</span>
              </li>
              <li>
                <FontAwesomeIcon className="icon" icon={faCheckCircle} />
                Disponible: <span>en stock</span>
              </li>
              <li>
                <FontAwesomeIcon className="icon" icon={faCheckCircle} />
                Categoria: <span>{product.category}</span>
              </li>
              <li>
                <FontAwesomeIcon className="icon" icon={faCheckCircle} />
                Área de envio: <span>Todo el pais</span>
              </li>
              <li>
                <FontAwesomeIcon className="icon" icon={faCheckCircle} />
                Tarifa de envio: <span>Gratis</span>
              </li>
            </ul>
          </div>

          <div className="purchase-info">
            <input type="number" min="0" value="1" />

            <button type="button" className="btn">
              Agregar al carrito <i className="fas fa-shopping-cart"></i>
            </button>

            <button type="button" className="btn">
              Realizar pedido
            </button>
          </div>

          <div className="social-links">
            <p>Compartir: </p>
            <div className="share">
              <a href="#">
                <FontAwesomeIcon className="iconS" icon={faFacebookF} />
              </a>
              <a href="#">
                <FontAwesomeIcon className="iconS" icon={faInstagram} />
              </a>
              <a href="#">
                <FontAwesomeIcon className="iconS" icon={faTwitter} />
              </a>
              <a href="#">
                <FontAwesomeIcon className="iconS" icon={faLinkedin} />
              </a>
              <a href="#">
                <FontAwesomeIcon className="iconS" icon={faPinterest} />
              </a>
              <a href="#">
                <FontAwesomeIcon className="iconS" icon={faWhatsapp} />
              </a>
              <a href="#">
                <FontAwesomeIcon className="iconS" icon={faTelegram} />
              </a>
            </div>
          </div>
        </div>
      </section>

      <HeadingTertiary title="Productos similares" />

      <section className="product-more">
        {moreProduct.map((data: any) => (
          <CardMoreProduct key={data.id} {...data} />
        ))}
      </section>
    </>
  );
};
