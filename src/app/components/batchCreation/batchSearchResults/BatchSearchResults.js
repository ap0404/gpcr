import React, {Component} from 'react';
import './BatchSearchResults.css';
import { connect } from 'react-redux';
import { getBatchResult,getResultSucess,fetchPostsIfNeeded} from "../../../action/batch.action";
import  {getBatchResultReducer}  from "../../../reducers";
import PropTypes from 'prop-types';

class BatchSearchResults extends Component {
    constructor(props) {
        super(props);
        this.props.location && this.props.location.query ? localStorage.setItem('req',this.props.location.query.request) : '';
        const {result} = this.props;
        this.state = {
            req : JSON.parse(localStorage.getItem('req')),
            result : result,
            params:[]
        }
    }

    componentWillMount(){
        const { dispatch } = this.props
        dispatch(fetchPostsIfNeeded(this.state.req));
    }
    isEmpty(obj) {
        for(var key in this.state.req[obj]) {
            if(obj.hasOwnProperty(key))
                return false;
        }
        return true;
    }

    render() {
        const { result } = this.props;
        const params = this.state && this.state.req && this.state.req !== null ? Object.keys(this.state.req).map( function(e) {
            if(this.state.req[e] && this.state.req[e] !== '' && !this.isEmpty(e)){
                return e;
            }
        },this) : undefined;

        return (
            <div>
                <div className="jumbotron main-container">
                    <h4 className="w3-bar w3-left">Batch Creation - Sample Search Results</h4>
                </div>
                <div className="row batch-search-row">
                    <div className="col-md-7">
                        <div class="panel panel-default panel-header">
                            <div class="panel-body Panel2">Query Run Parameter:
                                <table class="table table-bordered batch-search-table">
                                    <thead>
                                    <tr>
                                        <th scope="col">Search Field</th>
                                        <th scope="col">Value</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    { params ? params.map((row, i) =>
                                        row ? <tr key={i}>
                                            <td key={i+'col'}>{row}</td>
                                            <td key={i+'col1'}>{this.state.req[row]}</td>
                                        </tr> : ''
                                    ) : ''}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-5">
                        <div className="panel1">
                            <div className="panel-body Panel2">Assay Batch Size:</div>
                            <div className="col">
                                <button type="button" class="btn btn-primary btn-lg btn-block button-size">Select Maximum Batch Size</button>
                                <button type="button" class="btn btn-primary btn-lg btn-block button-size">Select Custom Batch Size</button>
                            </div>

                            <div className="row justify-content-center">
                                <div className="col-sm-3">
                                    <button type="button" className="btn btn-secondary ">Desellect All</button>
                                </div>
                                <div className="col-sm-3">
                                    <button type="button" className="btn btn-success">Create Batch</button>
                                </div>
                                <div className="col-sm-3">
                                    <button id='export-list' type="button" className="btn btn-primary">Export List</button>
                                </div>
                            </div>

                        </div>
                    </div>

                </div>
            </div>
        );
    }
}

function mapStateToProps(state){
    return {
        result : state
    }
}

export default connect(mapStateToProps) (BatchSearchResults);