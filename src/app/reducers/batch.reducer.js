import { BATCH_RESULT_ERROR,
    BATCH_RESULT_LOADING,
    BATCH_RESULT_SUCCESS,FIND_BATCH_RESULT } from '../constants/ActionTypes';

const initialState = {
    result: {},
    loading: false
}

export const getBatchResultReducer = (state = initialState,action) =>{
    switch(action.type){
        case BATCH_RESULT_LOADING :
            return  {...state,  loading: true,result: action.res} ;
            break;
        case BATCH_RESULT_SUCCESS :
            return  {...state,  loading: true,result: action.res} ;
            break;
        case BATCH_RESULT_ERROR :
            return {...state,  loading: true,result: action.res} ;
            break;
        default :
            return state;
            break;
    }
}


