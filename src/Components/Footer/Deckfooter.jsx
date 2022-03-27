import React from "react"
import Certfooter from "./Certfooter"
import Menufooter from "./Menufooter"
import Menufooter2 from "./Menufooter2"
import Pagamentofooter from "./Pagamentofooter"
import Redessociaisfooter from "./Redessociaisfooter"

export default function Deckfooter() {
	return (
		<>
			<div className="card-deck card text-white bg-dark mb-3">

				<Menufooter></Menufooter>

				<div className="card text-white bg-dark mb-3 border-0 mx-auto">

					<Menufooter2></Menufooter2>
				</div>

				<div className="card text-white bg-dark mb-3 border-0 mx-auto">
					<Redessociaisfooter></Redessociaisfooter>

				</div>



				<div className="card text-white bg-dark mb-3 border-0 mx-auto">

					<Pagamentofooter></Pagamentofooter>
				</div>


				<div className="card text-white bg-dark mb-3 border-0 mx-auto">

					<Certfooter></Certfooter>
				</div>

				

				<div className="card text-white bg-dark mb-3 border-0 mx-auto">

					<div className="card-body menu2">
						<h5 className="card-title">Razão Social</h5>
						<ul>
							AcessiCAR Transporte Acessível
							<br /><br />
							Reg.CNPJ 99.999.999/0001-10
							<br />
							Av. das camélias, 1000 - Sl. 301
							<br />
							Ipanema - Rio de Janeiro
							<br />
							CEP 21000-020
						</ul>
					</div>
				</div>

			</div>
		</>
	)
}