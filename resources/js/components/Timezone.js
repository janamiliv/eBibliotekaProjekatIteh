import React, { Component } from "react";
import ReactDOM from "react-dom";
import https from "https";

export default class Timezone extends Component {
    constructor(props) {
        super(props);

        this.state = {};
    }
    handleChange(e) {
        this.setState({ [e.target.name]: e.target.value });
    }
    loadDate(e) {
        e.preventDefault();
        https
            .get(
                `https://api.timezonedb.com/v2.1/get-time-zone?key=M3685NG71LM1&zone=${this.state.kontinent}/${this.state.drzava}&format=json&by=zone`,
                resp => {
                    let data = "";

                    // A chunk of data has been received.
                    resp.on("data", chunk => {
                        data += chunk;
                    });

                    // The whole response has been received. Print out the result.
                    resp.on("end", () => {
                        console.log(JSON.parse(data));
                        this.setState({
                            datum: new Date(JSON.parse(data).timestamp * 1000)
                        });
                    });
                }
            )
            .on("error", err => {
                console.log("Error: " + err);
            });
    }

    render() {
        return (
            <form onSubmit={this.loadDate.bind(this)}>
                <div className="form-row">
                    <div className="col">
                        <input
                            className="form-control"
                            onChange={this.handleChange.bind(this)}
                            name="kontinent"
                            placeholder="Kontinent"
                        ></input>
                    </div>
                    <div className="col">
                        <input
                            className="form-control"
                            onChange={this.handleChange.bind(this)}
                            name="drzava"
                            placeholder="Grad"
                        ></input>
                    </div>
                    <div className="col">
                        <input
                            className="form-control"
                            type="text"
                            disabled={true}
                            value={this.state.datum}
                        ></input>
                    </div>
                    <div className="col">
                        <input
                            className="btn btn-info btn-small"
                            type="submit"
                            value="Nadji vreme"
                        ></input>
                    </div>
                </div>
            </form>
        );
    }
}

// if (document.getElementById("timezone")) {
//     // ReactDOM.render(<Timezone />, document.getElementById("timezone"));
// }
