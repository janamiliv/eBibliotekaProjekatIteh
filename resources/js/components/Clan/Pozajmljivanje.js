import React, { Component } from "react";
import ReactDOM from "react-dom";

export default class Pozajmljivanje extends Component {
    constructor(props) {
        super(props);

        this.state = {
            pozajmljivanje: this.props.pozajmljivanje.pozajmljivanje,
            assignedBy: this.props.pozajmljivanje.pozajmljivanje.assigned_by
        };
        this.isFinished = this.isFinished.bind(this);
    }
    zavrsiPozajmljivanje() {
        axios
            .put(`http://127.0.0.1:8000/mojaPozajmljivanja/${this.state.pozajmljivanje.id}`)
            .then(res => {
                let pozajmljivanje = this.state.pozajmljivanje;
                pozajmljivanje.finished = true;
                this.setState({ pozajmljivanje });
            });
    }

    isFinished() {
        return this.state.pozajmljivanje.finished ? "green" : "red";
    }

    render() {
        return (
            <tr>
                <td>{this.state.pozajmljivanje.naziv}</td>
                <td>{this.state.pozajmljivanje.deadline}</td>
                <td
                    style={{ color: `${this.isFinished()}`, cursor: "pointer" }}
                    onClick={this.zavrsiPozajmljivanje.bind(this)}
                >
                    {this.state.pozajmljivanje.finished ? "📗" : "📕"}
                </td>
                <td>{this.state.assignedBy.name}</td>
                <td>{this.state.assignedBy.email}</td>
                <td>
                    <a
                        href={`http://127.0.0.1:8000/mojaPozajmljivanja/${this.state.pozajmljivanje.id}`}
                    >
                        Pregled
                    </a>
                </td>
            </tr>
        );
    }
}

if (document.getElementById("pozajmljivanje")) {
    ReactDOM.render(<Pozajmljivanje />, document.getElementById("pozajmljivanje"));
}
