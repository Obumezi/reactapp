import React, { Component } from "react";
import Logo from './react-js.svg'

export class Nav extends Component {
    render() {
        return (
            <div className="Nav">
                <div className="Logotxt">
                    <img className="imgclass" src={Logo} alt="React Logo" />
                </div>
                <h3 className="React_txt">ReactFacts</h3>
                <h4>React Course - Project 1</h4>

            </div>
        )
    }
}