import React, { Component } from "react";
import Logo from './react-js.svg'


export class Header extends Component {
    render() {
        return (
            <div>
                <header>
                    <nav className="nav">
                <img className="imgclass" src={Logo} alt="React Logo"/>
                        <ul className="nav-items">
                            <li>Pricing</li>
                            <li>About</li>
                            <li>Contact</li>
                        </ul>
                    </nav>
                </header>
            </div>
        )
    }
}