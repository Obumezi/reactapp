import React, {Component} from "react";


export class MainContent extends Component{
    render(){
        return(
            <div className="main-content">
                <h1>Reasons Im excited to learn React</h1>
               <ol>
                    <li>It's a popular library, so I'll be
                        able to fit in with the cool kids!</li>
                    <li>I'm more likely to get a job as a developer
                        if I know React</li>
                </ol>
            </div>
        )
    }
}