import './nav.css'

function Nav() {
	// opciones del nav 
	const optionNav = [
		{ id: 1, link: "Home" },
		{ id: 2, link: "Products" },
		{ id: 3, link: "Shop" },
		{ id: 4, link: "Contact" },
		{ id: 5, link: "Help" },
	];

	return (
		<nav className="nav__container">
			<ul className="nav__list">
				{optionNav.map((link) => (
					<li key={link.id} className="nav__link">
						<a href="/">{link.link}</a>
					</li>
				))}
			</ul>
		</nav>
	);
}

export default Nav;
