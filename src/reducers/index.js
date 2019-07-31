//pawsnfind will be using combine reducers for featured based reducers
import { combineReducers } from "redux";
import { userReducer } from './userReducer.js';
import { shelterReducer } from './shelterReducer.js';
import { applicationReducer } from './applicationReducer.js';
 
import { animalReducer } from './animalReducer.js'
 


export default combineReducers({
    userReducer,
    shelterReducer,
    applicationReducer,
    animalReducer
});