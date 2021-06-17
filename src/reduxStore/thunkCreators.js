import {API} from "../api/api";
import {addData} from "./actionCreators";

export const getData = () => async dispatch => {
    let response = await API.getData()
    if (response) {
        dispatch(addData(response))
        console.log(response)
        console.log("thunkCreators getData is ok")
    } else {
        console.log("thunkCreators getData is fail")
    }
}