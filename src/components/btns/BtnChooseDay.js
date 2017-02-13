import React, { PropTypes} from "react";
import "./btn.css";

const BtnChooseDay = ({ click }) => {

    return (
        <div>
        <button onClick={click}>Choose Match Day</button></div>
    );

};

export default BtnChooseDay;
