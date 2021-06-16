//INITIAL STATE FOR REDUCER
import {ADD_DATA} from "../actionTypes";

const initialState = {
    requestData: 'start value'

}
//REDUCER
export let mainReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_DATA:
            const data = action.payload
            return {
                ...state,
                requestData: data,
            }
        default :
            return state
    }
}