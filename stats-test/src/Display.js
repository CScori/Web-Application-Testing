import React from 'react'

class Display extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <div className="disp">
                <div className="ball">Balls:
                    <div>{this.props.count.balls}</div>
                </div>
                <div className="strike">Strikes:
                    <div>
                        {this.props.count.strikes}
                    </div>
                </div>
            </div>
        )
    }
}
export default Display
