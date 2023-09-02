import React from "react";
import "./certificate.css"
function Certificate(){
    return(
        <section id="imagesection" >
            <div className="images">
                <img src="front.jpg" alt="front_end" />
                <img src="back.jpg" alt="back_end" />
                <img src="javaBasic.jpg" alt="core_java" />
                <img src="dataS.jpg" alt="Data_struture" />
                <img src="hakerrank.jpg" alt="Hacker_rank" />
            </div>
        </section>
    )
}
export default Certificate;