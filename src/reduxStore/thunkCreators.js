import {API} from "../api/api";
import {addData, addModifiedData, addRenderededData, setLoadData} from "./actionCreators";

export const initializeApp = () => async dispatch => {
    dispatch(setLoadData(true))
    let response = await API.getData()
    if (response) {
        await dispatch(addData(response))
        await dispatch(addModifiedData())
        await dispatch(addRenderededData(["6769", "6771", "6784", "6803", "6848", "7061", "7062", "7063"]))
        console.log(response)
        console.log("thunkCreators getData is ok")
    } else {
        console.log("thunkCreators getData is fail")
    }
    dispatch(setLoadData(false))
}

