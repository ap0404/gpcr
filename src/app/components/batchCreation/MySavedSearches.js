import React, {Component} from 'react';
import LiveSearch from "../searchWorkOrder/LiveSearch";
import axios from 'axios';
class MySavedSearches extends Component {
    constructor(props) {
        super(props);
        this.state = {
            mySavedSearchesData: ["000017","14SEP2016_DEMO","AssayQualB","BUG_FIX_3","Cass B","Cass B 1","Cass C"],
            showOtherViewsSearch: false
        };
        this.notifyParent = this.notifyParent.bind(this);
        this.handleOtherViewsCheckBoxChange = this.handleOtherViewsCheckBoxChange.bind(this);
    }

    notifyParent = function (name, selectedField) {

    };
    handleOtherViewsCheckBoxChange = ()=>{
        this.setState({
        showOtherViewsSearch : !this.state.showOtherViewsSearch
    })
    };
    componentDidMount() {

        // axios.get(' http://xtest3.ppdi.com/gclportal/api/workorder/getWorkOrderSearchCriteriaView')
        //     .then( (res) => {
        //             console.log(res.data);
        //             this.setState({
        //                 MySavedSearchesData : res.data
        //             })
        //         },
        //         (error) => {console.log(error)});
        }


    render() {
        return (
            <div>
            <div className="form-inline" style={styles.rowTop1}>
                <label className="col-sm-5 col-form-label" id="batch-search-label">My Saved Searches</label>
                <div className="col-sm-5">
                    <LiveSearch
                        notifyParent={this.notifyParent}
                        liveSearchData={this.state.mySavedSearchesData}/>
                </div>
            </div>
            <div className="row" id="save-search-field">
               <div className="col-md-5"></div>
                 <div className="form-check">
                  <input type="checkbox" checked={this.state.showOtherViewsSearch} onChange={this.handleOtherViewsCheckBoxChange} className="form-check-input" id="exampleCheck1"></input>
                </div>
                <label className="form-check-label">Show other user's searches</label>
            </div>
                {this.state.showOtherViewsSearch ? <div className="form-inline" style={styles.rowTop2}>
                    <label className="col-sm-5 col-form-label" id="batch-search-label">Other user's view</label>
                    <div className="col-sm-5">
                        <LiveSearch
                            notifyParent={this.notifyParent}
                            liveSearchData={this.state.mySavedSearchesData}/>
                    </div>
                </div> : <div></div>}

            </div>

        );
    }
}

const styles = ({
    label: {
        justifyContent: 'flex-start'
    },
    rowTop1: {
        marginTop: '20px',
        marginLeft:'-12px'
    },
    rowTop2: {
        marginTop: '5px',
        marginLeft:'-12px'
    },
});

export default MySavedSearches;