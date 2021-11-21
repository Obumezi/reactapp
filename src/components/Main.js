import React, { Component } from "react"
import Logo from './react-js.svg'


export class Main extends Component {
    render() {
        return (
            <div className="main_body">

                <h1 className="main_title">Fun facts about React</h1>
                <ul className="facts">
                    <div className="facts_bullet">
                        <li>Was first released in 2013</li>
                        <li>Was originally created by Jordan Walke</li>
                        <li>Has well over 100k stars on Github</li>
                        <li>is maintained by Facebook</li>
                        <li>Powers thousands of enterpris apps and mobile apps</li>
                    </div>
                </ul>
            </div>
        )
    }
}