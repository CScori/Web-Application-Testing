import React from 'react'

class Dash extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }

    handleClick = e => {
        this.props.updateCount(e.target.name)
    }

    render() {
        return (
            <div className="dashboard">
                <div className="counts">
                    <button name="strike" onClick={this.handleClick}>
                        Strike
                    </button>
                    <button name="ball" onClick={this.handleClick}>
                        Ball
                    </button>
                </div>
                <div className="extraCount">
                    <button name="foul" onClick={this.handleClick}>
                        Foul
                    </button>
                    <button name="hit" onClick={this.handleClick}>
                        Hit
                    </button>
                </div>
            </div>
        )
    }
};
export default Dash
