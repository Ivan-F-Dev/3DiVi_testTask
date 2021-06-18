import {API} from "../api/api";
import {addData, addModifiedData, addRenderededData, setLoadData} from "./actionCreators";

export const initializeApp = () => async dispatch => {
    dispatch(setLoadData(true))
    let response = await API.getData()
    if (response) {
        await dispatch(addData(response))
        await dispatch(addModifiedData())
        await dispatch(addRenderededData("default"))
        console.log(response)
        console.log("thunkCreators getData is ok")
    } else {
        console.log("thunkCreators getData is fail")
    }
    dispatch(setLoadData(false))
}