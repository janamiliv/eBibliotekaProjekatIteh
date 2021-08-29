import React, { Component } from "react";
import ReactDOM from "react-dom";

export default class Assignment extends Component {
    constructor(props) {
        super(props);

        this.state = {
            assignment: this.props.assignment
        };
        // this.isFinished = this.isFinished.bind(this);
    }
   

    render() {
        return <li>{this.state.assignment.assigned_to.name}</li>;
    }
}

if (document.getElementById("assignment")) {
    ReactDOM.render(<Assignment />, document.getElementById("assignment"));
}
