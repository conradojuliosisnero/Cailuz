import ProductCard from "../Card/ProductCard";
import Error from "../Error/Error";
import UseProductFetch from "../../Hooks/UseProductFetch";
import "./fetch.css";

function Fetching() {
	// url del json server
	const url = "http://localhost:3001/productos";

	// hook personalizado de fetch
	const { data, error } = UseProductFetch(url);

	if (error) {
		return <Error message={error} />;
	}

	return (
		<div className="container">
			{data &&
				data.map((producto) => (
					<ProductCard
						key={producto.id}
						categoria={producto.categoria}
						name={producto.nombre}
						precio={producto.precio}
						img={producto.img}
						link="Share"
					/>
				))}
		</div>
	);
}

export default Fetching;
