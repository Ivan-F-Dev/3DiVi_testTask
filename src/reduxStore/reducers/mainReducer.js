import {
    ADD_DATA,
    ADD_MODIFIED_DATA,
    ADD_RENDERED_DATA,
    SET_LOAD_DATA,
} from "../actionTypes";
import {createRenderedData, monthDiff} from "../../utils/calc";

//INITIAL STATE FOR REDUCER
const initialState = {
    loadData: false,
    requestData: null,
    modifiedData: null,
    renderedData: null

}
//REDUCER
export let mainReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_LOAD_DATA:
            const loadData = action.payload
            return {
                ...state,
                loadData: loadData,
            }
        case ADD_DATA:
            const data = action.payload
            return {
                ...state,
                requestData: data,
            }
        case ADD_MODIFIED_DATA:
            return {
                ...state,
                modifiedData: {
                    begin: state.requestData.begin,
                    end: state.requestData.end,
                    monthsCount: monthDiff(new Date(state.requestData.begin), new Date(state.requestData.end)),
                    availableDevicesId: state.requestData.data.o.map(devicesEl => devicesEl.n),
                    devicesArr: state.requestData.data.o.map(devicesEl => {
                        return {
                            deviceId: devicesEl.n,
                            totalViews: devicesEl.v,
                            datesArr: state.requestData.data.o[state.requestData.data.o.indexOf(devicesEl)].o.map(datesEl => {
                                return {
                                    date: new Date(datesEl.n).getMonth() + 1,
                                    views: datesEl.v,
                                    agesArr: state.requestData.data.o[state.requestData.data.o.indexOf(devicesEl)].o[0].o.map(agesEl => {
                                        return {
                                            age: agesEl.n,
                                            views: agesEl.v
                                        }
                                    })
                                }
                            })
                        }
                    })
                }
            }
        case ADD_RENDERED_DATA:
            const variantt = action.payload
            return {
                ...state, renderedData: createRenderedData(state.modifiedData.monthsCount,new Date(state.modifiedData.begin).getMonth() + 1, state.modifiedData, variantt)
            }
        default :
            return state
    }
}
