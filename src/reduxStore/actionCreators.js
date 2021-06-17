// ACTION TYPES
import {ADD_DATA, ADD_MODIFIED_DATA} from "./actionTypes";

//ACTION CREATORS

//mainReducer
export const addData = (payload) => ({type: ADD_DATA, payload});
export const addModifiedData = (payload) => ({type: ADD_MODIFIED_DATA, payload});