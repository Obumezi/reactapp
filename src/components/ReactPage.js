import React, { Component } from 'react';



export class ReactPage extends Component {
    render() {
        return (
            <div>
                <h1 style={{ color: "green" }}>Fun facts about React </h1>
                <ul>
                    <li>Was first released in 2013</li>
                    <li>Was originally created by Jordan Walke</li>
                    <li>Has well over 100k stars on Github</li>
                    <li>Is maintained by Facebook</li>
                    <li>Powers thousands of enterprise apps, including mobile apps</li>
                </ul>
            </div>

        )
    }
}