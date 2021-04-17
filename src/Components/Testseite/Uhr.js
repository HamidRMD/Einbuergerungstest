import './Uhr.css';
import React from 'react';

class Uhr extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentTime: 60
        }
    }

    tick() {
        console.log('Vor', this.state);
        this.setState((prevState, props) => ({
            currentTime: prevState.currentTime -1

        }));
        console.log('Nach', this.state);

    }

    componentDidMount() {
        this.timerID = setInterval(
            (prevState, props) => this.tick(),
            60000

        );
    }



render() {
    return (
        <div>
            <h3 className="uhr-heading">Uhrzeit</h3>

            <div className="uhr"> <p className="uhrZahlen">{this.state.currentTime}</p> <p id={"uhrStr"}>Min</p> </div>


        </div>

    );

}
}



export default Uhr;

