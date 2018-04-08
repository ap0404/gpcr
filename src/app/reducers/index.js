import { combineReducers } from 'redux';
import  {getBatchResultReducer} from './batch.reducer'

const rootReducer = combineReducers({getBatchResultReducer});
export default rootReducer;