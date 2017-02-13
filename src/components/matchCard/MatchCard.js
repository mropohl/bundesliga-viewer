import React, { PropTypes } from "react";
import "./matchCard.css";

const MatchCard = ({ game }) => {

    return (
        <div className="card">
            {game.Team1.TeamName} - {game.Team2.TeamName}
        </div>
    );
};



export default MatchCard;
