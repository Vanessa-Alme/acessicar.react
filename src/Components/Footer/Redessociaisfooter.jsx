import React from "react";
import Zap from"../../Assets/Img/zap.png";
import Insta from"../../Assets/Img/insta.png";
import Face from"../../Assets/Img/face.png";
export default function Redessociaisfooter () {
    return (
    <>    
       <div className="card-body menu2">
								<h5 className="card-title">Redes Sociais</h5>
								<ul>
									<a href="#"><img src={Zap} width="20%" /></a>
									<a href="#"><img src={Insta} width="20%" /></a>
									<a href="#"><img src={Face} width="20%" /></a>

								</ul>
		</div>
    </>
    )
}

