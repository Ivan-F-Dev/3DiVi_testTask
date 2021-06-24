import {
    ADD_DATA,
    ADD_MODIFIED_DATA,
    ADD_RENDERED_CUSTOM_DATA,
    ADD_RENDERED_DATA,
    SET_LOAD_DATA,
    SET_MODE
} from "../actionTypes";
import {createRenderedData, monthCalcForOneDevice, monthDiff} from "../../utils/calc";
import {customData} from "../../utils/customData";

//INITIAL STATE FOR REDUCER
const initialState = {
    loadData: false,
    requestData: null,
    modifiedData: null,
    customData: customData,
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
        case ADD_RENDERED_CUSTOM_DATA:
            const variantC = action.payload
            return {
                ...state, renderedData: {
                    March: monthCalcForOneDevice(state.customData, 3, ...variantC),
                    April: monthCalcForOneDevice(state.customData, 4, ...variantC),
                    May: monthCalcForOneDevice(state.customData, 5, ...variantC),
                    June: monthCalcForOneDevice(state.customData, 6, ...variantC),
                    July: monthCalcForOneDevice(state.customData, 7, ...variantC),
                    August: monthCalcForOneDevice(state.customData, 8, ...variantC),
                    September: monthCalcForOneDevice(state.customData, 9, ...variantC),
                }
            }
        default :
            return state
    }
}
