import { useState, useEffect } from "react";

function UseProductFetch() {
	const [data, setData] = useState(null);
	const [error, setError] = useState(null);

	useEffect(() => {

		const fetchData = async () => {
			try {
				const res = await fetch("http://localhost:3001/productos");

				if (res.ok) {
					const response = await res.json();
					setData(response);
				} else {
					console.error("Ocurrió un error");
					setError("Hubo un error en la solicitud");
				}
			} catch (error) {
				console.error(error);
				setError("Hubo un error en la solicitud");
			}
		};

		fetchData();
	}, []);

	return { data, error };
}

export default UseProductFetch;
