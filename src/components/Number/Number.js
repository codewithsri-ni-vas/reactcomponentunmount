import React from "react";

class Number extends React.Component{
    render() {
        return(
            <div>
                <div>
                    <h2>{this.props.Number}</h2>
                </div>
            </div>
        )
    }
}
export default Number;