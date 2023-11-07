import { useState } from "react";
import "./form.css";

function Formulario() {
	const [nombre, setName] = useState("");
	const [precio, setPrice] = useState("");
	const [descripcion, setDescription] = useState("");
	const [categoria, setCategory] = useState("");
	const [img, setImage] = useState("");

	const handleSubmit = async (e) => {
		e.preventDefault();

		const newProduct = { nombre, precio, descripcion, categoria, img };

		try {
			const response = await fetch("http://localhost:3001/productos", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(newProduct),
			});

			if (response.ok) {
				alert("Usuario agregado con éxito");
			} else {
				alert("Error al agregar el usuario");
			}
		} catch (error) {
			console.error("Error:", error);
		}
	};

	return (
		<div className="form__container">
			<div className="tittle__container">
				<h2 className="form__tittle">Add your new Products here</h2>
			</div>
			<form onSubmit={handleSubmit}>
				<div className="input__container">
					<label htmlFor="Name">Name</label>
					<input
						autoComplete="off"
						type="text"
						id="nombre"
						placeholder="Name Product - example clothe"
						value={nombre}
						onChange={(e) => setName(e.target.value)}
						required
					/>
				</div>
				<div className="input__container">
					<label htmlFor="Price">Price</label>
					<input
						autoComplete="off"
						type="text"
						id="Price"
						placeholder="23.000"
						value={precio}
						onChange={(e) => setPrice(e.target.value)}
						required
					/>
				</div>{" "}
				<div className="input__container">
					<label htmlFor="Description">Description</label>
					<textarea
						cols="30"
						placeholder="clothes yellow ..."
						rows="10"
						required
						value={descripcion}
						onChange={(e) => setDescription(e.target.value)}
						className="card__description"></textarea>
				</div>{" "}
				<div className="input__container">
					<label htmlFor="category">Category</label>
					<select
						name="category"
						id="category"
						required
						value={categoria}
						className="form__select"
						onChange={(e) => setCategory(e.target.value)}>
						<option value="ropa">Ropa</option>
						<option value="articulos">Articulos</option>
						<option value="belleza">Belleza</option>
						<option value="zapatos">zapatos</option>
					</select>
				</div>
				<div className="input__container">
					<label htmlFor="image">Image</label>
					<input
						autoComplete="off"
						placeholder="image URL https://....."
						type="text"
						id="image"
						value={img}
						onChange={(e) => setImage(e.target.value)}
						required
					/>
				</div>{" "}
				<div className="form__button--container">
					<button type="submit" className="form__btn">
						Submint
					</button>
				</div>
			</form>
		</div>
	);
}

export default Formulario;
