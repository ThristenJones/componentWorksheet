import React, {Component} from 'react';
import "./App.css"
import TitleBar from './TitleBar/TitleBar';


class App extends Component {
    constructor(props){
        super(props);
        this.books = [
            {title: "Ready Player One", author: "Ernest Cline"},
            {title: "All the lights we cannot see", author: "Anthony Doerr"},
            {title: "The First And Last freedom", author: "Jiddu"},

        ]
        this.state = {
            bookNumber: 0
        };
    }

    render(){
        return(
            <div className = "container-fluid">
                <TitleBar />
                <div className = "col-md-4"></div>
                <div className = "col-md-4">
                {this.books[this.state.bookNumber].title}
                <h4>{this.books[0].author}</h4>
                                </div>
                <div className = "col-md-4"></div>
            </div>
        )
    }
}

export default App;
