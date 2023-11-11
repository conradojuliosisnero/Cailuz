import "./nav.css";
import { Link } from "react-router-dom";

function Nav() {
	// opciones del nav
	const optionNav = [
		{ id: 1, name: "Home", link: "/" },
		{ id: 2, name: "Shop", link: "/shop" },
		{ id: 3, name: "Contact", link: "/contact" },
		{ id: 4, name: "Data", link: "/data" },
		{ id: 5, name: "Help", link: "/help" },
	];

	return (
		<nav className="nav__container">
			<ul className="nav__list">
				{optionNav.map((link) => (
					<li key={link.id}>
						<Link className="nav__link" key={link.id} to={link.link}>
							{link.name}
						</Link>
					</li>
				))}
			</ul>
		</nav>
	);
}

export default Nav;
