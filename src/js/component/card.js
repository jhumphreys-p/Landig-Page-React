import React from "react";

export function Card() {
	return (
		<div className="card">
			<img
				className="card-img-top"
				src="https://cdn.hobbyconsolas.com/sites/navi.axelspringer.es/public/styles/1200/public/media/image/2020/05/dragon-ball-super-vegeta-gran-novedad-combate-no-esperabas-1947921.jpg?itok=58zHKfKz"
			/>
			<div className="card-body">
				<h5 className="card-title">Card title</h5>
				<p className="card-text">
					Sure, Vegeta loved to go off about how his heart was pure
					evil, but we all know that the second he transformed into a
					Super Saiyan, he became one of the good guys. ... Gohan,
					Goten, Trunks, Caulifla, Kale, and Cabba are all good people
					that can become Super Saiyans.
				</p>
				<a href="#" className="btn btn-primary">
					Go somewhere
				</a>
			</div>
		</div>
	);
}

export function Cards() {
	return (
		<div className="container">
			<div className="row">
				<div className="col-md-3">
					<Card />
				</div>
				<div className="col-md-3">
					<Card />
				</div>
				<div className="col-md-3">
					<Card />
				</div>
				<div className="col-md-3">
					<Card />
				</div>
			</div>
		</div>
	);
}
