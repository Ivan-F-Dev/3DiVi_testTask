// ACTION TYPES
import {
    ADD_DATA,
    ADD_MODIFIED_DATA,
    ADD_RENDERED_DATA,
    SET_LOAD_DATA,
} from "./actionTypes";

//ACTION CREATORS

//mainReducer
export const setLoadData = (payload) => ({type: SET_LOAD_DATA, payload});
export const addData = (payload) => ({type: ADD_DATA, payload});
export const addModifiedData = (payload) => ({type: ADD_MODIFIED_DATA, payload});
export const addRenderededData = (payload = "default") => ({type: ADD_RENDERED_DATA, payload});