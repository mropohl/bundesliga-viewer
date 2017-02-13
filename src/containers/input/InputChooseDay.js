import React, { Component } from "react";
import "./input.css"

import { loadNewGameDay } from "../../actions/data";

class InputChooseDay extends Component {

    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChangeDay = this.handleChangeDay.bind(this);
        this.handleChangeYear = this.handleChangeYear.bind(this);
        this.state = {
            day: "1",
            year: "2010"
        };
    }

    handleChangeDay(event) {
        this.setState({
            day: event.target.value
        });
        this.props.dispatch(loadNewGameDay(event.target.value, this.state.year));
    }

    handleChangeYear(event) {
        this.setState({
            year: event.target.value
        });
        this.props.dispatch(loadNewGameDay(this.state.day, event.target.value));
    }

    render () {

        const days = []
        const years = []

        for (let i = 1; i < 33; i++) {
            days.push(i);
        }
        for (let i = 2010; i < 2017; i++) {
            years.push(i);
        }

        return (
            <div className="input-wrapper">
                <div className="input">
                    <h3>Choose a match day</h3>
                    <p>Select a season and a day:</p>
                    <form>
                        <select name="day-chooser" onChange={this.handleChangeDay}>
                            {days.map((day) => {
                                return <option key={day} value={day}>{day}</option>

                            })}
                        </select>
                        <select name="season-chooser" onChange={this.handleChangeYear}>
                            {years.map((year) => {
                                return <option key={year} value={year}>{year}/{year + 1}</option>

                            })}
                        </select>
                    </form>
                </div>
            </div>
        );
    };
}

export default InputChooseDay;
