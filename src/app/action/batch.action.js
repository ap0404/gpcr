import * as types from '../constants/ActionTypes';
import axios from 'axios';

const loadingResults = (res) =>({
    type: types.BATCH_RESULT_LOADING,
    res
});

export const getResultSucess = (res) => ({
    type: types.BATCH_RESULT_SUCCESS,
    res
});

const getResultError = (res) => ({
    type: types.BATCH_RESULT_ERROR,
    res
});

const getSucessTemp = (res)=>{
    getResultSucess(res)
}

const getBatchResult = (req) => dispatch => {
    dispatch(loadingResults());
    debugger
    const request = formatRequest(req);
    return axios.post('http://localhost:8081/gclportal/api/find',request).then(res => {
        dispatch(getResultSucess(res));
    });

};


export const fetchPostsIfNeeded = req => (dispatch, getState) => {
    const t = getState();
    return dispatch(getBatchResult(req));
}

const formatRequest = (rawRequest) => {
    const client = [];

    const requestObject = {
        "gsdSavedCriteriaNo": "",
        "criteriaName": "",
        "criterialType": "",
        "createdDate":"",
        "createdBy":"",
        "modifiedDate":"",
        "modifiedBy":"",
        "isDeleted":"",
        "node": {
            "CLIENT": [rawRequest.sponsorData],
            "TEST": "GSK_PnMOPA_v1_IK",
            "PRE_DILUTION_OF_IK_TEST":"1",
            "UNIT_OF_MEASURE": [],
            "SAMPLE_TYPE": [],
            "RECEIVED_DATE": {
                "fromReceivedDate": "08-Sep-2016 00:00:00",
                "toReceivedDate": "10-Sep-2016 23:59:59"
            },
            "VIAL_LOCATION": [rawRequest.vialData],
            "FREEZER_LOCATION": [rawRequest.freezerLocationData],
            "INCLUDE_ITEMS_WITH_OPEN_EXCEPTIONS": false,
            "ONLY_ITEMS_WITH_PREREQUISITES_MET": true,
            "STUDIES": [rawRequest.studyData],
            "PRE_DILUTION_OF_TITER_TEST": [rawRequest.preDulData],
            "SCAN_BARCODE":[],
            "PASTE_BARCODE":[],
            "BOX_BARCODES":[],
            "VISIT": [rawRequest.visitData],
            "SITE": [rawRequest.siteData],
            "SCREENID": [rawRequest.screenData],
            "RANDID": [rawRequest.randData],
            "PATIENT_ACCESSION": [rawRequest.patientData],
            "FREEZER": [rawRequest.freezerData],
            "FREEZER_SHELF": [rawRequest.freezerShelfData],
            "FREEZER_RACK": [rawRequest.freezerRackData],
            "FREEZER_BOX": [rawRequest.freezerBoxData],
            "labLocationNumber": "30"
        }

    }
    return requestObject;
}




