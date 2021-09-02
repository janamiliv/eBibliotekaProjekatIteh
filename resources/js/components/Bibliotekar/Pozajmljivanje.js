import React, { Component } from "react";
import ReactDOM from "react-dom";
import Assignment from "./Assignment";
import Forma from "./Forma";

export default class Pozajmljivanje extends Component {
    constructor(props) {
        super(props);

        this.state = {
            pozajmljivanje: this.props.pozajmljivanje,
            assignments: this.props.pozajmljivanje.assignments,
            formaIzmena: false,
            tipForme: "izmeni"
        };
        this.isFinished = this.isFinished.bind(this);
        this.formaIzmena = this.formaIzmena.bind(this);
        this.prikazPozajmljivanja = this.prikazPozajmljivanja.bind(this);
    }
    zavrsiPozajmljivanje() {
        // console.log('pozvana');
        axios
            .put(`http://127.0.0.1:8000/svaPozajmljivanja/${this.state.pozajmljivanje.id}`)
            .then(res => {
                let pozajmljivanje = this.state.pozajmljivanje;
                pozajmljivanje.finished = true;
                this.setState({ pozajmljivanje });
            });
    }
    izbrisiPozajmljivanje() {
        axios
            .delete(`http://127.0.0.1:8000/svaPozajmljivanja/${this.state.pozajmljivanje.id}`)
            .then(res => {
                if (res.data.code == true) {
                    this.props.onDelete(this.state.pozajmljivanje.id);
                } else alert("Greska prilikom brisanja!");
            });
    }

    isFinished() {
        return this.state.pozajmljivanje.finished ? "green" : "red";
    }
    formaIzmena() {
        this.setState({ formaIzmena: !this.state.formaIzmena });
    }

    updateHandler(pozajmljivanje) {
        this.setState({ pozajmljivanje, formaIzmena: false });
    }

    prikazPozajmljivanja() {
        if (!this.state.formaIzmena) {
            return (
                <tr className="d-flex">
                    <td>{this.state.pozajmljivanje.naziv}</td>
                    <td>{this.state.pozajmljivanje.deadline}</td>
                    <td
                        style={{
                            color: `${this.isFinished()}`,
                            cursor: "pointer"
                        }}
                        onClick={this.zavrsiPozajmljivanje.bind(this)}
                    >
                        {this.state.pozajmljivanje.finished ? "📗" : "📕"}
                    </td>

                    <td align="center">
                        <ul className="text-left">
                            {this.state.assignments.length
                                ? this.state.assignments.map(a => {
                                      return [<Assignment assignment={a} />];
                                  })
                                : "Nema izvrsioca"}
                        </ul>
                    </td>
                    <td>
                        <div className="dropdown">
                            <button
                                className="btn dropdown-toggle"
                                type="button"
                                id="akcijeMeni"
                                data-toggle="dropdown"
                                aria-haspopup="true"
                                aria-expanded="false"
                            >
                                Upravljanje
                            </button>
                            <div
                                className="dropdown-menu"
                                aria-labelledby="akcijeMeni"
                            >
                                <button
                                    onClick={this.izbrisiPozajmljivanje.bind(this)}
                                    className="dropdown-item"
                                >
                                    Izbrisi
                                </button>
                                <button
                                    onClick={this.formaIzmena}
                                    className="dropdown-item"
                                >
                                    Izmeni
                                </button>
                                <a
                                    className="dropdown-item"
                                    href={`http://127.0.0.1:8000/svaPozajmljivanja/${this.state.pozajmljivanje.id}`}
                                >
                                    Pregled
                                </a>
                            </div>
                        </div>
                    </td>
                </tr>
            );
        } else {
            return (
                <tr className="d-flex">
                    <Forma
                        onUpdate={this.updateHandler.bind(this)}
                        tipForme={this.state.tipForme}
                        pozajmljivanje={this.state.pozajmljivanje}
                    />
                    <td>
                        <div className="dropdown">
                            <button
                                className="btn dropdown-toggle"
                                type="button"
                                id="akcijeMeni"
                                data-toggle="dropdown"
                                aria-haspopup="true"
                                aria-expanded="false"
                            >
                                Upravljanje
                            </button>
                            <div
                                className="dropdown-menu"
                                aria-labelledby="akcijeMeni"
                            >
                                <button
                                    onClick={this.izbrisiPozajmljivanje.bind(this)}
                                    className="dropdown-item"
                                >
                                    Izbrisi
                                </button>
                                <button
                                    onClick={this.formaIzmena}
                                    className="dropdown-item"
                                >
                                    Izmeni
                                </button>
                                <a
                                    className="dropdown-item"
                                    href={`http://127.0.0.1:8000/svaPozajmljivanja/${this.state.pozajmljivanje.id}`}
                                >
                                    Pregled
                                </a>
                            </div>
                        </div>
                    </td>
                </tr>
            );
        }
    }

    render() {
        return this.prikazPozajmljivanja();
    }
}

if (document.getElementById("pozajmljivanje")) {
    ReactDOM.render(<Pozajmljivanje />, document.getElementById("pozajmljivanje"));
}
