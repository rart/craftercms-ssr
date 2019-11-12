import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class App extends React.Component{
    render(){
        return(
            <div>
                <i className="studio-ice-indicator fa fa-pencil f18 icon-yellow" data-studio-ice-trigger="title-6"></i>
                Pencil
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'));