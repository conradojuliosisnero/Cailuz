import "./card.css";
import Carrito from "../../assets/carrito.svg";
import Share from "../../assets/share.svg";
import PropTypes from "prop-types";

function ProductCard({ name, precio, link, img }) {
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

// Utiliza propTypes para validar las props del componente
// ProductCard.propTypes = {
// 	name: PropTypes.string,
// 	precio: PropTypes.number,
// 	link: PropTypes.string,
// 	img: PropTypes.string,
// };

export default ProductCard;
