import React, {Component} from 'react';
import './InputSearchCriteria.css';
import LiveSearch from '../searchWorkOrder/LiveSearch';
import Header from "../header/Header";
import DatePicker from 'react-datepicker';
import moment from 'moment';
import 'react-datepicker/dist/react-datepicker.css';
 // import axios from 'axios';
 import SponsorList from './SponsorList';
import StudyList from "./StudyList";
import TestList from "./TestList";
import SampleTypeList from "./SampleTypeList";
import FreezerLocationList from "./FreezerLocationList";
import FreezerList from "./FreezerList";
import VialLocationList from "./VialLocationList"
import FreezerShelfList from "./FreezerShelfList";
import FreezerRackList from "./FreezerRackList";
import FreezerBoxList from "./FreezerBoxList";
import VisitList from "./VisitList";
import SiteList from "./SiteList";
import ScreenIDList from "./ScreenIDList";
import RandIDList from "./RandIDList";
import PatientAccessionList from "./PatientAccessionList";
import PreDulTestList from "./PreDulTestList";
import {Link} from "react-router-dom";

//import { BrowserRouter as Router, Route } from "react-router-dom";

const liveLocationSearchData = ["Mustard", "Ketchup", "Relish"];
const liveStatusSearchData = ["ml", "ul", "g", "mg", "ug","ng"];



class InputSearchCriteria extends Component {
    constructor(props) {
        super(props);
        this.state = {
            drawDateFrom : '',
            drawDateTo : '',
            receivedDateFrom: '',
            receivedDateTo: '',
            sponsorData: {},
            studyData: {},
            testData : {},
            vialData : {},
            SampleTypeData:{},
            preDulData:{},
            visitData: {},
            freezerLocationData : {},
            freezerData: {},
            freezerShelfData: {},
            freezerRackData:{},
            freezerBoxData:{},
            siteData:{},
            screenData:{},
            randData:{},
            patientData:{},
            INCLUDE_ITEMS_WITH_OPEN_EXCEPTIONS : false,
            ONLY_ITEMS_WITH_PREREQUISITES_MET : false
        };
        this.notifyParent = this.notifyParent.bind(this);
        this.getSelectedSponsorData = this.getSelectedSponsorData.bind(this);
        this.getSelectedStudyData = this.getSelectedStudyData.bind(this);
        this.getSelectedTestData = this.getSelectedTestData.bind(this);
        this.getSelectedVialData = this.getSelectedVialData.bind(this);
        this.getSelectedSampleTypeData = this.getSelectedSampleTypeData.bind(this);
        this.getSelectedPreDulTestData = this.getSelectedPreDulTestData(this);
        this.getSelectedVisitData= this.getSelectedVisitData.bind(this);
        this.getSelectedSiteData = this.getSelectedSiteData.bind(this);
        this.getSelectedScreenID_Data = this.getSelectedScreenID_Data.bind(this);
        this.getSelectedRandID_Data = this.getSelectedRandID_Data.bind(this);
        this.getSelectedPatientAccessionData = this.getSelectedPatientAccessionData.bind(this);
        this.getSelectedFreezerLocationData = this.getSelectedFreezerLocationData.bind(this);
        this.getSelectedFreezerData = this.getSelectedFreezerData.bind(this);
        this.getSelectedFreezerShelfData = this.getSelectedFreezerShelfData.bind(this);
        this.getSelectedFreezerRackData = this.getSelectedFreezerRackData.bind(this);
        this.getSelectedFreezerBoxData = this.getSelectedFreezerBoxData.bind(this);
        this.handleIncludeItemsCheckbox = this.handleIncludeItemsCheckbox.bind(this);
        this.handleOnlyItemsCheckbox = this.handleOnlyItemsCheckbox.bind(this);
        this.handleDrawDateFrom = this.handleDrawDateFrom.bind(this);
        this.handleDrawDateTo = this.handleDrawDateTo.bind(this);
        this.handleReceivedDateFrom = this.handleReceivedDateFrom.bind(this);
        this.handleReceivedDateTo = this.handleReceivedDateTo.bind(this);
    }

    handleDrawDateFrom(date) {
        this.setState({
            drawDateFrom : date
        });
    }

    handleDrawDateTo(date) {
        this.setState({
            drawDateTo : date
        });
    }

    handleReceivedDateFrom(date) {
        this.setState({
            receivedDateFrom: date
        });
    }

    handleReceivedDateTo(date) {
        this.setState({
            receivedDateTo: date
        });
    }

    getSelectedSponsorData = function(sponsorData) {
        this.setState({
            sponsorData
        });
    };

    getSelectedStudyData = function(studyData) {
        this.setState({
            studyData
        });
    };

    getSelectedTestData = function(testData) {
        this.setState({
            testData
        });
    };

    getSelectedVialData = function(vialData) {
        this.setState({
            vialData
        });
        // this.props.router.push({
        //     pathName :'/batchSearchResults',
        //     state : this.state.vialId
        // })
    };
    handleOnlyItemsCheckbox = function () {
        this.setState({
            ONLY_ITEMS_WITH_PREREQUISITES_MET: !this.state.ONLY_ITEMS_WITH_PREREQUISITES_MET
        });
    };

    handleIncludeItemsCheckbox = function () {
      this.setState({
          INCLUDE_ITEMS_WITH_OPEN_EXCEPTIONS: !this.state.INCLUDE_ITEMS_WITH_OPEN_EXCEPTIONS
      });
    };

    getSelectedSampleTypeData = function( SampleTypeData) {
        this.setState({
            SampleTypeData
        });
    };

    getSelectedPreDulTestData= function( preDulData) {
        this.setState({
            preDulData
        });
    };

    getSelectedVisitData = function( visitData) {
        this.setState({
            visitData
        });
    };

    getSelectedSiteData = function( siteData) {
        this.setState({
            siteData
        });
    };

    getSelectedScreenID_Data = function( screenData) {
        this.setState({
            screenData
        });
    };

    getSelectedRandID_Data = function( randData) {
        this.setState({
            randData
        });
    };

    getSelectedPatientAccessionData = function( patientData) {
        this.setState ({
            patientData
        });
    };

    getSelectedFreezerLocationData = function(freezerLocationData) {
        this.setState({
            freezerLocationData
        });
    };

    getSelectedFreezerData= function(freezerData) {
        this.setState({
            freezerData
        });
    };

    getSelectedFreezerShelfData = function(freezerShelfData) {
        this.setState({
            freezerShelfData
        });
    };

    getSelectedFreezerRackData = function(freezerRackData) {
        this.setState({
            freezerRackData
        });
    };

    getSelectedFreezerBoxData = function(freezerBoxData) {
        this.setState({
            freezerBoxData
        });
    };

    notifyParent = function(name, selectedField) {
        console.log(name,selectedField);

    };
    // onChange = date => this.setState({date})

    render() {

        return (
            <div>

                <Header headerTitle="Batch Creation - Input Search Criteria"/>
                <div className="container input-search-container">

                    <div className="row">
                        <div className='col-md-6'>
                            <SponsorList getSelectedSponsorData={this.getSelectedSponsorData}/>

                            <StudyList getSelectedStudyData={this.getSelectedStudyData} sponsorId={this.state.sponsorData.id}/>

                            <TestList getSelectedTestData={this.getSelectedTestData} studyId={this.state.studyData.id}/>

                            <PreDulTestList getSelectedPreDulTestData={this.getSelectedPreDulTestData} studyId={this.state.studyData.id}/>

                            <div className="form-inline">
                                <label className="col-sm-4 col-form-label" id="batch-search-label">volume|uom</label>
                                <div className="col-xl1">
                                    <input type="text" id="volume-text" className="form-control" aria-label="Small"/>
                                    <LiveSearch
                                        liveSearchData={liveStatusSearchData}
                                        notifyParent={this.notifyParent}/>
                                </div>
                            </div>

                            <VisitList getSelectedVisitData={this.getSelectedVisitData} studyId={this.state.studyData.id} />

                            <SiteList getSelectedSiteData={this.getSelectedSiteData} studyId={this.state.studyData.id}/>

                            <ScreenIDList getSelectedScreenID_Data={this.getSelectedScreenID_Data} studyId={this.state.studyData.id}/>

                            <RandIDList getSelectedRandID_Data={this.getSelectedRandID_Data} studyId={this.state.studyData.id}/>

                            <PatientAccessionList getSelectedPatientAccessionData={this.getSelectedPatientAccessionData} studyId={this.state.studyData.id}/>

                            <SampleTypeList getSelectedSampleTypeData={this.getSelectedSampleTypeData} testId={this.state.testData.id}/>

                            <VialLocationList getSelectedVialData={this.getSelectedVialData} testId={this.state.testData.id}/>

                            <FreezerLocationList getSelectedFreezerLocationData={this.getSelectedFreezerLocationData} testId={this.state.testData.id}/>

                            <FreezerList getSelectedFreezerData={this.getSelectedFreezerData} freezerLocationId={this.state.freezerLocationData.id}/>

                            <FreezerShelfList getSelectedFreezerShelfData={this.getSelectedFreezerShelfData} freezerId={this.state.freezerData.id}/>

                            <FreezerRackList getSelectedFreezerRackData={this.getSelectedFreezerRackData} freezerShelfId={this.state.freezerShelfData.id}/>

                            <FreezerBoxList getSelectedFreezerBoxData={this.getSelectedFreezerBoxData} freezerRackId={this.state.freezerRackData.id}/>


                        </div>

                        <div className='col-md-6'>

                            <div id="row-top" className="row" >
                                <div id="Alight-text-start" className="col-md-4" >
                                    <label >Draw Date</label>
                                </div>
                                <div id="row-top"  className="col-md" >
                                    <div className="date-style">
                                        <label className="col-sm-3 col-form-label">From:</label>
                                        <DatePicker
                                            dateFormat="MM/DD/YYYY"
                                            selected={this.state.drawDateFrom}
                                            onChange={this.handleDrawDateFrom}
                                            placeholderText="mm/dd/yyyy"
                                        />
                                    </div>
                                    <div className="date-style">
                                        <label className="col-sm-3 col-form-label">To:
                                        </label>
                                        <DatePicker
                                            dateFormat="MM/DD/YYYY"
                                            selected={this.state.drawDateTo}
                                            onChange={this.handleDrawDateTo}
                                            placeholderText="mm/dd/yyyy"
                                        />
                                    </div>
                                </div>
                            </div>

                            <div className="row" id="row-top" >
                                <div id="Alight-text-start" className="col-md-4" >
                                    <label >Recieved Date</label>
                                </div>
                                <div  id="Alight-text-start" className="col-md" >
                                    <div className="date-style">
                                        <label className="col-sm-3 col-form-label">From:
                                        </label>
                                        <DatePicker
                                            dateFormat="MM/DD/YYYY"
                                            selected={this.state.receivedDateFrom}
                                            onChange={this.handleReceivedDateFrom}
                                            placeholderText="mm/dd/yyyy"
                                        />
                                    </div>
                                    <div className="date-style">
                                        <label className="col-sm-3 col-form-label">To:</label>
                                        <DatePicker
                                            dateFormat="MM/DD/YYYY"
                                            selected={this.state.receivedDateTo}
                                            onChange={this.handleReceivedDateTo}
                                            placeholderText="mm/dd/yyyy"
                                        />
                                    </div>
                                </div>
                            </div>

                            <div className="row" id="row-top" >
                                <div id="Alight-text-start" className="col-md-5" >
                                    <label >Sequence Number
                                    </label>
                                </div>
                                <div className="col-md-2" style={styles.sequenceNo}>
                                    <div>
                                        <div className="col-md seq-no" >
                                        <label >From:</label>
                                        <input type="text" id="sequence-text" className="form-control" aria-label="Small"/>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="col-md-2 seq-no" >
                                        <label >To:</label>
                                        <input type="text" id="sequence-text" className="form-control" aria-label="Small" />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="row" id="row-top" >
                                <div id="Alight-text-start" className="col-md-5" >
                                    <label> Barcodes </label>
                                </div>
                                <div >
                                    <input className="Parent-barcode-batch-creation" type="text"/>
                                    <button>Go</button>
                                </div>
                            </div>

                            <div className="row" id="row-top" >
                                <div id="Alight-text-start" className="col-md-5" >
                                    <label>Paste Barcodes</label>
                                </div>
                                <textarea className="form-control Paste-text-area"  rows="3"></textarea>
                            </div>

                            <div className="row" id="row-top" >
                                <div id="Alight-text-start" className="col-md-5" >
                                    <label>Paste Box Barcodes</label>
                                </div>
                                <textarea className="form-control Paste-text-area"  rows="3"></textarea>
                            </div>

                            <div className="row" id="row-top" >
                                <div id="Alight-text-start" className="col-md-2" >
                                    <div className="form-check">
                                        <input type="checkbox"  checked={this.state.INCLUDE_ITEMS_WITH_OPEN_EXCEPTIONS} onChange={this.handleIncludeItemsCheckbox}className="form-check-input"></input>
                                    </div>
                                </div>
                                <label className="form-check-label">Include items with open exceptions?</label>
                            </div>

                            <div className="row" id="row-top" >
                                <div id="Alight-text-start" className="col-md-2" >
                                    <div className="form-check">
                                        <input type="checkbox" checked={this.state.ONLY_ITEMS_WITH_PREREQUISITES_MET} onChange={this.handleOnlyItemsCheckbox} className="form-check-input"></input>
                                    </div>
                                </div>
                                <label className="form-check-label">Only items with prerequistes met</label>
                            </div>

                            <div className="row" id="row-top" >
                                <div id="Alight-text-start" className="col-md-2" >
                                    <div className="form-check">
                                        <input type="checkbox" className="form-check-input" ></input>
                                    </div>
                                </div>
                                <label className="form-check-label">Only items with HI in last
                                    <span id="only-item-span"> <input id="only-item-input"
                                     type="text"/></span>
                                    days</label>
                            </div>

                            <div className="form-inline" style={styles.rowTop1}>
                                <label className="col-sm-5 col-form-label" id="batch-search-label">My Saved Searches</label>
                                <div className="col-sm-5">
                                    <LiveSearch
                                        notifyParent={this.notifyParent}
                                        liveSearchData={liveLocationSearchData}/>
                                </div>
                            </div>
                            <div className="row" id="save-search-field">
                                <div className="col-md-5"></div>
                                    <div className="form-check">
                                        <input type="checkbox" className="form-check-input" id="exampleCheck1"></input>
                                    </div>
                                <label className="form-check-label">Show other user's searches</label>
                            </div>


                            <div className="row" id="batch-row-buttons">
                                <div className="col-sm-2">
                                    <button id='reset-button'className="btn btn-primary">Reset</button>
                                </div>
                                <div className="col-sm-2">
                                    <button  className="btn btn-success">
                                        <Link style={styles.findButton} to='/batchSearchResults' state={this.state.vialId}>Find</Link>
                                    </button>
                                </div>
                                <div className="col-sm-2">
                                    <button id='save-button'className="btn btn-secondary">Save</button>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

            </div>
        );
    }
}
const styles = ({
    rowTop1: {
        marginTop: '20px',
        marginLeft:'-12px'
    },
    findButton:{
        color:'white'
    },
    sequenceNo :{
        display:'flex',
        marginLeft:'-44px'
    }
});

export default InputSearchCriteria;