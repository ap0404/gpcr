import React, {Component} from 'react';
import './BatchViewInterface.css';

class BatchViewInterface extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div>
                <div className="jumbotron">
                    <h4 className="w3-bar w3-left">Batch View Interface: View, Track, and Execution</h4>
                </div>

                <div className="container">
                    <div className="row">

                        <div className="col-sm-2">
                            <button id="update-button" className="btn btn-outline-success">Open Batch</button>
                        </div>

                        <div className="col-sm-2">
                            <button id="update-button" className="btn btn-outline-danger">Cancel Batch</button>
                        </div>

                        <div className="col-sm-3">
                            <button id="update-button" className="btn btn-outline-secondary">Change Automatic Run Creation</button>
                        </div>

                        <div className="col-sm-3">
                            <button id="update-button" className="btn btn-outline-success">Display Created/Completed</button>
                        </div>

                        <div className="col-sm-2">
                            <button id="update-button" className="btn btn-outline-primary">Export List</button>
                        </div>

                    </div>

                </div>
            </div>
        );
    }
}

// const styles = ({     //Bottom Container style     fStyle: { marginTop:
// '35px'     } });

export default BatchViewInterface;