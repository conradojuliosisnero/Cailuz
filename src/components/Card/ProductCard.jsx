import "./card.css";
import Carrito from "../../assets/carrito.svg";
import Share from "../../assets/share.svg";

function ProductCard(props) {
	const { name, precio, link, img } = props;

	return (
		<div className="card__container">
			<div className="car__img">
				<img className="img" src={img} alt={name} />
			</div>
			<div className="card__name--price">
				{name} - {precio}$
				<span className="share">
					{/* Assuming link is a string, alt should be a string as well */}
					<img src={Share} alt={link} width="20px" />
				</span>
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
