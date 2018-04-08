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
    client.push(rawRequest.sponsorData);
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
            "TEST": [rawRequest.testData],
            "PRE_DILUTION_OF_IK_TEST": [rawRequest.preDulData],
            "UNIT_OF_MEASURE": [],
            "SAMPLE_TYPE": [],
            "RECEIVED_DATE": {
                "fromReceivedDate": "08-Sep-2016 00:00:00",
                "toReceivedDate": "10-Sep-2016 23:59:59"
            },
            "VIAL_LOCATION": [rawRequest.vialData],
            "FREEZER_LOCATION": [],
            "INCLUDE_ITEMS_WITH_OPEN_EXCEPTIONS": true,
            "ONLY_ITEMS_WITH_PREREQUISITES_MET": true,
            "STUDIES": [rawRequest.studyData],
            "PRE_DILUTION_OF_TITER_TEST": [],
            "SCAN_BARCODE":["GMOPAEXP0525"],
            "PASTE_BARCODE":[],
            "BOX_BARCODES":[],
            "VISIT": [],
            "SITE": [],
            "SCREENID": [],
            "RANDID": [],
            "PATIENT_ACCESSION": [],
            "FREEZER": [],
            "FREEZER_SHELF": [],
            "FREEZER_RACK": [],
            "FREEZER_BOX": [],
            "labLocationNumber": ""
        }

    }
    return requestObject;
}




