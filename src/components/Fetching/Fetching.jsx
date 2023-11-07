import "./fetch.css";
import { useEffect, useState } from "react";
import ProductCard from "../Card/ProductCard";

function Fetching() {
	const [data, setData] = useState(null);
	const [error, setError] = useState(null);
	const [reload, setReload] = useState(null);

	useEffect(() => {
		ProductFetch();
	}, []);

	const ProductFetch = async () => {
		const APIURL = "http://localhost:3001/productos";

		try {
			const res = await fetch(APIURL);

			if (res.ok) {
				const response = await res.json();
				setData(response);
				console.log(data);
			} else {
				console.error("Ocurrió un error");
				setError("Hubo un error en la solicitud");
			}
		} catch (error) {
			console.error(error);
			setError("Hubo un error en la solicitud");
		}
	};

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
