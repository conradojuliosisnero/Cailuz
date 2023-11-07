import "./card.css";
import Carrito from "../../assets/carrito.svg";

function ProductCard({ categoria, name, precio, link, img }) {
	return (
		<div className="card__container">
			<div className="car__img">
				<img className="img" src={img} alt={name} />
			</div>
			<div className="card__name--price">
				<strong>{name} - </strong>
				{precio}$
			</div>
			<div className="card__button">
				<div className="button">
					<img src={Carrito} alt="Carrito" />
				</div>
				<div className="card__btn--buy">
					<button className="btn__buy">Buy Now</button>
				</div>
			</div>
		</div>
	);
}

export default ProductCard;
