import React, {Component} from 'react';
import './BatchSearchResults.css';
import { connect } from 'react-redux';
import { getBatchResult,getResultSucess,fetchPostsIfNeeded} from "../../../action/batch.action";
import  {getBatchResultReducer}  from "../../../reducers";
import {AgGridReact,AgGridColumn} from 'ag-grid-react';
import  'ag-grid/dist/styles/ag-grid.css';
import 'ag-grid/dist/styles/ag-theme-balham.css'
import PropTypes from 'prop-types';
import Workbook from 'react-excel-workbook'

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
            gridApi : undefined
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

    onGridReady = (params) => {
        this.gridApi = params.api;
        this.columnApi = params.columnApi;
        this.gridApi.showLoadingOverlay();
        this.setState({gridApi: this.gridApi});
        //this.gridApi.sizeColumnsToFit();
    }

     onBtExport= () => {
        var params = {
            allColumns: true
        };
        this.state.gridApi ? this.state.gridApi.exportDataAsExcel(params) : '';
    }


    render() {
        const { result } = this.props;
        const params = this.state && this.state.req && this.state.req !== null ? Object.keys(this.state.req).map( function(e) {
            if(this.state.req[e] && this.state.req[e] !== '' && !this.isEmpty(e)){
                return e;
            }
        },this) : undefined;
        const agGridData = result && result.getBatchResultReducer && result.getBatchResultReducer.result && result.getBatchResultReducer.result.data && result.getBatchResultReducer.result.data.entity ? result.getBatchResultReducer.result.data.entity : [];
        //this.setState({rowData : agGridData});
        this.state.rowData = agGridData && agGridData.length > 0 ? agGridData : [];
        return (
            <div>
                <div className="jumbotron main-container">
                    <h4 className="w3-bar w3-left">Batch Creation - Sample Search Results</h4>
                </div>
                <div className="row batch-search-row">
                    <div className="col-md-7">
                        <div className="panel panel-default panel-header">
                            <div className="panel-body Panel2">Query Run Parameter:
                                <div className="table-responsive table-height">
                                <table className="table table-bordered batch-search-table">
                                    <thead>
                                    <tr>
                                        <th scope="col">Search Field</th>
                                        <th scope="col">Value</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    { params ? params.map((row, i) =>
                                        row && <tr key={i}>
                                            <td key={i+'col'}>{row ? row.replace('Data','') : row}</td>
                                            <td key={i+'col1'}>{this.state.req[row] ? this.state.req[row].name  : "Na" }</td>
                                        </tr>
                                    ) : '' }
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
                                <button type="button" className="btn btn-outline-secondary btn-lg btn-block button-size">Select Maximum Batch Size</button>
                                <button type="button" className="btn btn-outline-secondary btn-lg btn-block button-size">Select Custom Batch Size</button>
                            </div>

                            <div className="row justify-content-center">
                                <div className="col-sm-3">
                                    <button type="button" className="btn btn-outline-secondary ">Desellect All</button>
                                </div>
                                <div className="col-sm-3">
                                    <button type="button" className="btn btn-outline-success">Create Batch</button>
                                </div>
                                <div className="col-sm-3">
                                    <Workbook filename="BatchCreationSampleSearchResults.xlsx" element={<button id='export-list'  type="button" className="btn btn-outline-primary">Export List</button>}>
                                        <Workbook.Sheet data={this.state.rowData} name="Sheet A">
                                            <Workbook.Column label="Sponsor" value="clientname"/>
                                            <Workbook.Column label="Study Code" value="studyCode"/>
                                            <Workbook.Column label="Sample ID" value="sampleNo"/>
                                            <Workbook.Column label="Site" value="siteId"/>
                                            <Workbook.Column label="Randomization ID" value="randId"/>
                                            <Workbook.Column label="Screening ID" value="screenId"/>
                                            <Workbook.Column label="Patient" value="patientAccession"/>
                                            <Workbook.Column label="Visit" value="visitName"/>
                                            <Workbook.Column label="Draw Date" value="drawDate"/>
                                            <Workbook.Column label="Sample Name" value="sampleName"/>
                                            <Workbook.Column label="Barcode" value="barcode"/>
                                            <Workbook.Column label="Volume" value="sampleVolume"/>
                                            <Workbook.Column label="Unit" value="sampleUnit"/>
                                            <Workbook.Column label="Vial Status" value="vialStatus"/>
                                            <Workbook.Column label="Created Date" value="createdDate"/>
                                            <Workbook.Column label="Hi Age" value="hiAge"/>
                                            <Workbook.Column label="Recieved Date" value="recievedDate"/>
                                            <Workbook.Column label="Freezer Location" value="freezerLocation"/>
                                            <Workbook.Column label="Freezer" value="freezerId"/>
                                            <Workbook.Column label="Freezer Shelf" value="shelfId"/>
                                            <Workbook.Column label="Freezer Rack" value="rackId"/>
                                            <Workbook.Column label="Freezer Position" value="boxPosition"/>
                                            <Workbook.Column label="Storage Box" value="storageBox"/>
                                            <Workbook.Column label="Storage Row" value="boxRow"/>
                                            <Workbook.Column label="Storage Coloumn" value="boxColoumn"/>
                                        </Workbook.Sheet>
                                    </Workbook>
                                </div>
                            </div>

                        </div>
                    </div>

                </div>
                <div className="row ag-grid-row">
                    <div  className="col-md-10 col-md-offset-1 "  >
                        <div className="panel-body ag-grid-panel">
                            <div className="form-inline">
                                <label>Search Results:</label>
                                <button className="btn btn-outline-secondary btn-sm  List-view-button">Switch to List View</button>
                            </div>
                        <div style={styles.AgGrid} className="ag-theme-balham">
                             <AgGridReact
                                rowData={this.state.rowData}
                                rowSelection="multiple"
                                paginationPageSize ="10"
                                enableFilter
                                pagination
                                floatingFilter
                                quickFilterText={this.state.quickFilterText}
                                rowHeight="25"
                                onGridReady={this.onGridReady}
                               >

                                <AgGridColumn width={46}  headerCheckboxSelection  suppressFilter pinned checkboxSelection  suppressMenu></AgGridColumn>
                                 <AgGridColumn headerName="Sponsor" suppressMenu  field="clientname"></AgGridColumn>
                                <AgGridColumn headerName="Study Code" suppressMenu field="studyCode"></AgGridColumn>
                                <AgGridColumn headerName="Sample ID" suppressMenu  field="sampleNo"></AgGridColumn>
                                <AgGridColumn headerName="Site"  suppressMenu  field="siteId"></AgGridColumn>
                                <AgGridColumn  headerName="Randomization ID" suppressMenu  field="randId"></AgGridColumn>
                                <AgGridColumn headerName="Screening ID" suppressMenu field="screenId"></AgGridColumn>
                                <AgGridColumn headerName="Patient" suppressMenu field="patientAccession"></AgGridColumn>
                                <AgGridColumn headerName="Visit" suppressMenu field="visitName"></AgGridColumn>
                                <AgGridColumn headerName="Draw Date" suppressMenu field="drawDate"></AgGridColumn>
                                <AgGridColumn headerName="Sample Name" suppressMenu field="sampleName"></AgGridColumn>
                                 <AgGridColumn headerName="Barcode" suppressMenu field="barcode"></AgGridColumn>
                                 <AgGridColumn headerName="Volume" suppressMenu field="sampleVolume"></AgGridColumn>
                                 <AgGridColumn headerName="Unit" suppressMenu field="sampleUnit"></AgGridColumn>
                                 <AgGridColumn headerName="Vial Status" suppressMenu field="vialStatus"></AgGridColumn>
                                <AgGridColumn headerName="Created Date" suppressMenu field="createdDate"></AgGridColumn>
                                 <AgGridColumn headerName="Hi Age"  suppressMenu field="hiAge"></AgGridColumn>
                                 <AgGridColumn headerName="Recieved Date" suppressMenu field="recievedDate"></AgGridColumn>
                                <AgGridColumn headerName="Freezer Location" suppressMenu field="freezerLocation"></AgGridColumn>
                                <AgGridColumn headerName="Freezer" suppressMenu field="freezerId"></AgGridColumn>
                                <AgGridColumn headerName="Freezer Shelf" suppressMenu field="shelfId"></AgGridColumn>
                                <AgGridColumn headerName="Freezer Rack"  suppressMenu field="rackId"></AgGridColumn>
                                <AgGridColumn headerName="Freezer Position" suppressMenu field="boxPosition"></AgGridColumn>
                                <AgGridColumn headerName="Storage Box" suppressMenu field="storageBox"></AgGridColumn>
                                <AgGridColumn headerName="Storage Row" suppressMenu field="boxRow"></AgGridColumn>
                                <AgGridColumn headerName="Storage Coloumn" suppressMenu field="boxColoumn"></AgGridColumn>
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
      height:'375px',
        paddingTop: '10px'
    }
});

export default connect(mapStateToProps) (BatchSearchResults);