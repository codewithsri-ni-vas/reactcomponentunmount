import React from 'react';
import ReactDOM from 'react-dom';
import Number from "./components/Number/Number";


class Lifecycledemo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: 0
        }
        this.setNewValue = this.setNewValue.bind(this)
    }
    setNewValue() {
        this.setState({data: this.state.data + 10})
    }
    render() {
        return (
            <div>
                <h1>This is heading</h1>
                <Number Number = {this.state.data}></Number>
                <button onClick = {this.setNewValue}>Increase Number </button>

            </div>
        )
    }
}

ReactDOM.render(<Lifecycledemo/>, document.getElementById('root'))

