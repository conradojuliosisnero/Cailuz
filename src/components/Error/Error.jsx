function Error() {
	return (
		<div className="error">
			<div className="error__icon">
				<svg
					fill="none"
					height="24"
					viewBox="0 0 24 24"
					width="24"
					xmlns="http://www.w3.org/2000/svg">
					<path d="m13 13h-2v-6h2zm0 4h-2v-2h2" />
				</svg>
			</div>
			<div className="error__title">lorem ipsum dolor sit amet</div>
			<div className="error__close">
				<svg
					height="20"
					viewBox="0 0 20 20"
					width="20"
					xmlns="http://www.w3.org/2000/svg">
					<path d="m15.8333 5.34166-1.175-1.175-4.6583 4.65834-4.65833-4.65834-1.175 1.175 4.65833 4.65834-4.65833 4.6583 1.175 1.175 4.65833-4.6583 4.6583 4.6583 1.175-1.175-4.6583-4.6583z" />
				</svg>
			</div>
		</div>
	);
}

export default Error;
