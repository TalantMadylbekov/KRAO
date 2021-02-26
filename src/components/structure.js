import React from 'react';
import "../css/structure.css"
import str_1 from "../images/structure/1.jpg";
import str_2 from "../images/structure/2.jpg";
import str_3 from "../images/structure/3.jpg";
import str_4 from "../images/structure/4.jpg";
import str_5 from "../images/structure/5.jpg";
import str_6 from "../images/structure/6.jpg";

const Structure = () => {
    return (
        <div className="img">
            <h2>СТРУКТУРА КРАО</h2>
            <img className="structure" src={str_1} alt="str_1" />
            <img className="structure1" src={str_2} alt="str_2" />
            <img className="structure2" src={str_3} alt="str_3" />
            <img className="structure3" src={str_4} alt="str_4" />
            <img className="structure4" src={str_5} alt="str_5" />
            <img className="structure5" src={str_6} alt="str_6" />
        </div>
    );
};

export default Structure;