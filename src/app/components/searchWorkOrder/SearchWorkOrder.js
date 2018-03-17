import React, {Component} from 'react';
import './SearchWorkOrder.css';
import SearchPagination from './SearchPagination';
import Header from "../header/Header";
import LiveSearch from "./LiveSearch";
import {Link} from "react-router-dom";
import Workbook from 'react-excel-workbook';


const liveLocationSearchData = ['Mustard', 'Ketchup', 'Relish'];
const liveStudySearchData = ["Mustard", "Ketchup", "Relish"];
const liveWorkOrderIdSearchData = ["Mustard", "Ketchup", "Relish"];
const liveSavedSearchData = ["Save1", "Save2", "Save3", "Save4"];
const liveStatusSearchData = ["Created", "In Progress", "Completed", "Cancelled"];

const products1 = [{
    id : 0,
    workOrderId: 'Item Name 1',
    createDate: 'Sat Mar 20 2017 11:48:05 GMT+0530 (IST)',
    status: 'Created',
    sponsor: 'kk',
    parentSamples : 'abc',
    createdBy : 'Amer',
    aliquot : 'xyz' },
    {
        id : 1,
        workOrderId: 'Item Name 1',
        createDate: 'Sat Mar 17 2018 11:48:05 GMT+0530 (IST)',
        status: 'Created',
        sponsor: 'kk',
        parentSamples : 'abc',
        createdBy : 'Amer',
        aliquot : 'xyz' },
    {
        id : 2,
        workOrderId: 'Item Name 2',
        createDate: 'Sat Mar 17 2018 11:48:05 GMT+0530 (IST)',
        status: 'In Progress',
        sponsor: 'kk',
        parentSamples : 'abc',
        createdBy : 'Amer',
        aliquot : 'xyz' },
    {
        id : 3,
        workOrderId: 'Item Name 3',
        createDate: 'Sat Oct 01 2014 11:48:05 GMT+0530 (IST)',
        status: 'Completed',
        sponsor: 'kk',
        parentSamples : 'abc',
        createdBy : 'Amer',
        aliquot : 'xyz' },
    {
        id : 4,
        workOrderId: 'Item Name 4',
        createDate: 'Sat Dec 10 2010 11:48:05 GMT+0530 (IST)',
        status: 'Cancelled',
        sponsor: 'kk',
        parentSamples : 'abc',
        createdBy : 'Amer',
        aliquot : 'xyz'
    }];
class SearchWorkOrder extends Component {
    constructor(props) {
        super(props);
        this.state = {
            statusFlag : [false, false,false, false, false],
            selectedExportRows : [],
        };
        this.handleExportSelectedRows = this.handleExportSelectedRows.bind(this);
        this.handleStatusChange = this.handleStatusChange.bind(this);
        this.handleStatusCompletedFlag = this.handleStatusCompletedFlag.bind(this);
}

    handleStatusChange = (isStatusFlag) => {
      this.setState({
         statusFlag: isStatusFlag
      });
    };

    handleExportSelectedRows = (selectedRows) => {
        this.setState ({
            selectedExportRows:selectedRows
        })
    };

    handleStatusCompletedFlag = (isStatusCompletedFlag) => {
       this.setState({
           statusCompletedFlag: isStatusCompletedFlag
                  });
    };
    render() {
        return (
            <div>
               <Header headerTitle="PCR Aliquot Services-Search Work Order"/>
                <div className="container">
                    <form >
                        <div className="row">

                                <LiveSearch liveSearchData={liveLocationSearchData} liveSearchDataTitle="Location"/>

                                <LiveSearch liveSearchData={liveStudySearchData} liveSearchDataTitle="Study"/>

                                <LiveSearch liveSearchData={liveWorkOrderIdSearchData} liveSearchDataTitle="Sponsor"/>

                            <div className="col-xl">
                                <label className="label">Parent Barcode</label>
                                <input type="text" placeholder="Enter "/>
                            </div>

                            <LiveSearch liveSearchData={liveStatusSearchData} liveSearchDataTitle="Status"/>

                            <LiveSearch liveSearchData={liveSavedSearchData} liveSearchDataTitle="SAVE"/>

                        </div>
                    </form>
                </div>
                {/* <hr class="divider" text="react-native"/> */}
                <div className="container">
                    <SearchPagination products1={products1} handleStatusChange={this.handleStatusChange} handleExportSelectedRows={this.handleExportSelectedRows} handleStatusCompletedFlag = {this.handleStatusCompletedFlag}/>
                </div>

                <div className="container" style={styles.fStyle}>
                    <div className="row justify-content-md-center">
                        <div className="col-sm-2">
                            <Link to={'/updateWorkOrder/abc/created'} >
                                <button className="btn btn-primary" disabled={!this.state.statusFlag[0]}>
                                Update
                                </button>
                            </Link>
                        </div>
                        <div className="col-sm-2">
                            <Workbook filename="Search-Work-Order.xlsx" element={<button className="btn btn-primary" disabled={!this.state.statusFlag[1]}>Export</button>}>
                                <Workbook.Sheet data={this.state.selectedExportRows} name="Sheet A">
                                    <Workbook.Column label="Work Order Id" value="workOrderId"  />
                                    <Workbook.Column label="Create Date"  value="createDate"/>
                                    <Workbook.Column label="Status"  value="status"/>
                                    <Workbook.Column label="Sponsor"  value="sponsor"/>
                                    <Workbook.Column label="Total # of Parent Samples" value="parentSamples"/>
                                    <Workbook.Column label="Created By"  value="createdBy"/>
                                    <Workbook.Column label="Total # of Aliquot"  value="aliquot"/>
                                </Workbook.Sheet>
                            </Workbook>
                        </div>
                        <div className="col-sm-2">
                            <button className="btn btn-primary" disabled={!this.state.statusFlag[2]}>QC Scan</button>
                        </div>
                        <div className="col-sm-2">
                            <button className="btn btn-primary" disabled={!this.state.statusFlag[3]}>Create Aliquot</button>
                        </div>
                        <div className="col-sm-2">
                            <button className="btn btn-primary" disabled={!this.state.statusFlag[4]}>Create Batch</button>
                        </div>

                    </div>
                </div>
            </div>
        );
    }
}

const styles = ({
    //Bottom Container style
    fStyle: {
        marginTop: '35px'
    }
});

export default SearchWorkOrder;