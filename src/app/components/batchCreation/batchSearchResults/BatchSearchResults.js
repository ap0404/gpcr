import React, {Component} from 'react';
import './BatchSearchResults.css';
import { connect } from 'react-redux';
import { getBatchResult,getResultSucess,fetchPostsIfNeeded} from "../../../action/batch.action";
import  {getBatchResultReducer}  from "../../../reducers";
import {AgGridReact,AgGridColumn} from 'ag-grid-react';
import  'ag-grid/dist/styles/ag-grid.css';
import 'ag-grid/dist/styles/ag-theme-balham.css'
import PropTypes from 'prop-types';

class BatchSearchResults extends Component {
    constructor(props) {
        super(props);
        this.props.location && this.props.location.query ? localStorage.setItem('req',this.props.location.query.request) : '';
        const {result} = this.props;
        this.state = {
            req : JSON.parse(localStorage.getItem('req')),
            result : result,
            params:[],
            rowData : [],
            quickFilterText: null,
        }
    }

    onQuickFilterText = (event) => {
        this.setState({quickFilterText: event.target.value});
    };

    componentWillMount(){
        const { dispatch } = this.props
        dispatch(fetchPostsIfNeeded(this.state.req));
    }
    isEmpty(obj) {

        if(Object.keys(this.state.req[obj]).length > 0){
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
        const agGridData = result && result.getBatchResultReducer && result.getBatchResultReducer.result && result.getBatchResultReducer.result.data && result.getBatchResultReducer.result.data.entity ? result.getBatchResultReducer.result.data.entity : [];
        debugger
        //this.setState({rowData : agGridData});
        this.state.rowData = agGridData && agGridData.length > 0 ? agGridData : [];
        return (
            <div>
                <div className="jumbotron main-container">
                    <h4 className="w3-bar w3-left">Batch Creation - Sample Search Results</h4>
                </div>
                <div className="row batch-search-row">
                    <div className="col-md-7">
                        <div class="panel panel-default panel-header">
                            <div class="panel-body Panel2">Query Run Parameter:
                                <div className="table-responsive table-height">
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
                                            <td key={i+'col1'}>{this.state.req[row] ? this.state.req[row].name  : "Na" }</td>
                                        </tr> : ''
                                    ) : ''}
                                    </tbody>
                                </table>
                                </div>
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
                <div className="row">
                    <div  className="col-md-10 col-md-offset-1 "  >
                        <div className="panel-body ag-grid-panel">
                        <div style={styles.AgGrid} className="ag-theme-balham">
                             <AgGridReact
                                rowData={this.state.rowData}
                                rowSelection="multiple"
                                // paginationPageSize ="10"
                                enableFilter
                                pagination
                                floatingFilter
                                quickFilterText={this.state.quickFilterText}
                                rowHeight="25"
                               >

                                <AgGridColumn  width={35} suppressFilter  pinned checkboxSelection enablePivot suppressMenu></AgGridColumn><AgGridColumn  suppressMenu  field="clientname"></AgGridColumn>
                                <AgGridColumn suppressMenu field="studyCode"></AgGridColumn>
                                <AgGridColumn  suppressMenu  field="sampleNo"></AgGridColumn>
                                <AgGridColumn  suppressMenu  field="siteId"></AgGridColumn>
                                <AgGridColumn  suppressMenu  field="randId"></AgGridColumn>
                                <AgGridColumn  suppressMenu field="screenId"></AgGridColumn>
                                <AgGridColumn suppressMenu field="patientAccession"></AgGridColumn>
                                <AgGridColumn suppressMenu field="visitName"></AgGridColumn>
                                <AgGridColumn suppressMenu field="drawDate"></AgGridColumn>
                                <AgGridColumn suppressMenu field="sampleName"></AgGridColumn>
                                 <AgGridColumn suppressMenu field="barcode"></AgGridColumn>
                                 <AgGridColumn suppressMenu field="sampleVolume"></AgGridColumn>
                                 <AgGridColumn suppressMenu field="sampleUnit"></AgGridColumn>
                                 <AgGridColumn suppressMenu field="vialStatus"></AgGridColumn>
                                <AgGridColumn suppressMenu field="createdDate"></AgGridColumn>
                                 <AgGridColumn suppressMenu field="hiAge"></AgGridColumn>
                                 <AgGridColumn suppressMenu field="recievedDate"></AgGridColumn>
                                <AgGridColumn suppressMenu field="freezerLocation"></AgGridColumn>
                                <AgGridColumn suppressMenu field="freezerId"></AgGridColumn>
                                <AgGridColumn suppressMenu field="shelfId"></AgGridColumn>
                                <AgGridColumn suppressMenu field="rackId"></AgGridColumn>
                                <AgGridColumn suppressMenu field="boxPosition"></AgGridColumn>
                                <AgGridColumn suppressMenu field="storageBox"></AgGridColumn>
                                <AgGridColumn suppressMenu field="boxRow"></AgGridColumn>
                                <AgGridColumn suppressMenu field="boxColoumn"></AgGridColumn>
                            </AgGridReact>
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


const styles = ({
    AgGrid:{
      height:'300px',
    }
});

export default connect(mapStateToProps) (BatchSearchResults);