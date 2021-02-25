import React from "react";

export function Jumbotron() {
	return (
		<div className="container mt-4 rounded">
			<div className="jumbotron">
				<h1 className="display-4">Vegeta</h1>
				<p className="lead">
					Vegeta posee una personalidad carismática, a pesar de
					mostrarse muchas veces frío, distante y arrogante. La verdad
					es que se ha convertido en uno de los favoritos de los fans
					debido a su carácter amargo y apesadumbrado, típico de un
					anti-héroe.
				</p>
				<p className="lead">
					<a
						className="btn btn-primary btn-lg"
						href="#"
						role="button">
						Learn more
					</a>
				</p>
			</div>
		</div>
	);
}
