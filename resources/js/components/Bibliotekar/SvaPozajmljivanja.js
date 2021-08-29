import React, { Component } from "react";
import ReactDOM from "react-dom";
import Pozajmljivanje from "./Pozajmljivanje";
import Forma from "./Forma";
import {} from "../style.css";
export default class SvaPozajmljivanja extends Component {
    constructor(props) {
        super(props);

        this.state = {
            pozajmljivanja: this.props.pozajmljivanja,
            sorted: true
        };
    }

    handleDelete(id) {
        const id_pozajmljivanja = id;
        this.setState(state => {
            console.log(state.pozajmljivanja, id_pozajmljivanja);
            return { pozajmljivanja: state.pozajmljivanja.filter(z => z.id != id_pozajmljivanja) };
        });
    }
    handleSubmit(novoPozajmljivanje) {
        this.setState(state => {
            let pozajmljivanja = state.pozajmljivanja;
            pozajmljivanja.push(novoPozajmljivanje);
            return { pozajmljivanja: pozajmljivanja };
        });
    }

    sortByDate() {
        this.setState(state => {
            return {
                pozajmljivanja: state.pozajmljivanja.sort((a, b) => {
                    if (state.sorted === true) {
                        return (
                            new Date(a.deadline).getTime() -
                            new Date(b.deadline).getTime()
                        );
                    } else {
                        return (
                            new Date(b.deadline).getTime() -
                            new Date(a.deadline).getTime()
                        );
                    }
                })
            };
        });
        this.setState({ sorted: !this.state.sorted });
    }

    render() {
        return [
            <button
                type="button"
                class="btn btn-primary dodajNovoPozajmljivanjeDugme shadow"
                data-toggle="modal"
                data-target="#exampleModalLong"
            >
                +
            </button>,
            <div className="">
                <table className="table table-hover table-info table-striped header-fixed">
                    <thead className="thead-fixed thead-light">
                        <tr>
                            <th>Naziv pozajmljivanja</th>
                            <th
                                style={{ cursor: "pointer" }}
                                onClick={this.sortByDate.bind(this)}
                            >
                                Deadline <i className="fas fa-sort"></i>
                            </th>
                            <th>Zavrsen</th>
                            <th>Izvrsioci</th>
                            <th>Akcije</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.pozajmljivanje.map(z => {
                            return (
                                <Pozajmljivanje
                                    onDelete={this.handleDelete.bind(this)}
                                    key={z.id}
                                    pozajmljivanje={z}
                                />
                            );
                        })}
                    </tbody>
                </table>
            </div>,
            <Forma onSubmit={this.handleSubmit.bind(this)} />
        ];
    }
}

if (document.getElementById("svapozajmljivanja")) {
    const element = document.getElementById("svapozajmljivanja");

    const pozajmljivanja = JSON.parse(element.dataset.pozajmljivanja);

    ReactDOM.render(
        <SvaPozajmljivanja pozajmljivanja={pozajmljivanja} />,
        document.getElementById("svapozajmljivanja")
    );
}
