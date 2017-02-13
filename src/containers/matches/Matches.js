import React, { Component } from "react";
import { connect } from "react-redux";
import MatchCard from "../../components/matchCard/MatchCard"
import InputChooseDay from "../input/InputChooseDay"

import "./matches.css";

import { loadNewGameDay } from "../../actions/data";
import { showModalChooseDay } from "../../actions/ui";

class Matches extends Component {

    componentDidMount() {
        this.props.dispatch(loadNewGameDay());
    }

    render() {
        return (
            <div>
                <header>
                    <p>You are watching:</p>
                    {this.props.data.currentMatchDay === null ?
                        <h2>Last Match Day</h2> :
                        <h2>Season: {this.props.data.currentSeason} - Day: {this.props.data.currentMatchDay}</h2>
                    }
                    <InputChooseDay ui={this.props.ui} data={this.props.data} dispatch={this.props.dispatch}/>
                </header>
                <section>
                    {this.props.data.matchDayData.map((game) => {
                        return <MatchCard game={game} key={game.MatchID}/>
                    })}
                </section>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return state
};

export default connect(mapStateToProps)(Matches);
