import React, { Component } from "react";
import ReactDOM from "react-dom";
import Pozajmljivanje from "./Pozajmljivanje";
import {} from "../style.css";
export default class MojaPozajmljivanja extends Component {
    constructor(props) {
        super(props);

        this.state = {
            pozajmljivanja: this.props.pozajmljivanja
        };
    }

    render() {
        console.log(this.state.pozajmljivanja);
        return (
            <table className="table table-hover table-info table-striped header-fixed">
                <thead className="thead-light">
                    <tr>
                        <th scope="col">Naziv pozajmljivanja</th>
                        <th scope="col">Deadline</th>
                        <th scope="col">Vraceno</th>
                        <th scope="col">Izdao</th>
                        <th scope="col">Email</th>
                    </tr>
                </thead>
                <tbody>
                    {this.state.pozajmljivanja.map(z => {
                        return <Pozajmljivanje key={z.id} pozajmljivanje={z} />;
                    })}
                </tbody>
            </table>
        );
    }
}

if (document.getElementById("mojapozajmljivanja")) {
    const element = document.getElementById("mojapozajmljivanja");

    const pozajmljivanja = JSON.parse(element.dataset.pozajmljivanja);

    ReactDOM.render(
        <MojaPozajmljivanja pozajmljivanja={pozajmljivanja} />,
        document.getElementById("mojapozajmljivanja")
    );
}
