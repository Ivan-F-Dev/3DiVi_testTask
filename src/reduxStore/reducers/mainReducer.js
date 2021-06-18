import {ADD_DATA, ADD_MODIFIED_DATA, ADD_RENDERED_CUSTOM_DATA, ADD_RENDERED_DATA, SET_LOAD_DATA} from "../actionTypes";
import {monthCalc, monthCalcForOneDevice} from "../../utils/calc";
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
            const modifiedData = action.payload
            return {
                ...state,
                modifiedData: {
                    begin: state.requestData.begin,
                    end: state.requestData.end,
                    availableDevicesId: state.requestData.data.o.map(devicesEl => devicesEl.n),
                    devicesArr: state.requestData.data.o.map(devicesEl => {
                        return {
                            deviceId: devicesEl.n,
                            totalViews: devicesEl.v,
                            datesArr: state.requestData.data.o[state.requestData.data.o.indexOf(devicesEl)].o.map(datesEl => {
                                return {
                                    date: datesEl.n.split('-')[1],
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
            const variant = action.payload
            return {
                ...state, renderedData: {
                    march: monthCalcForOneDevice(state.modifiedData, "03", ...variant),
                    april: monthCalcForOneDevice(state.modifiedData, "04", ...variant),
                    may: monthCalcForOneDevice(state.modifiedData, "05", ...variant),
                    june: monthCalcForOneDevice(state.modifiedData, "06", ...variant),
                    july: monthCalcForOneDevice(state.modifiedData, "07", ...variant),
                    august: monthCalcForOneDevice(state.modifiedData, "08", ...variant),
                    september: monthCalcForOneDevice(state.modifiedData, "09", ...variant),
                }
            }
        case ADD_RENDERED_CUSTOM_DATA:
            const variantC = action.payload
            return {
                ...state, renderedData: {
                    march: monthCalcForOneDevice(state.customData, "03", ...variantC),
                    april: monthCalcForOneDevice(state.customData, "04", ...variantC),
                    may: monthCalcForOneDevice(state.customData, "05", ...variantC),
                    june: monthCalcForOneDevice(state.customData, "06", ...variantC),
                    july: monthCalcForOneDevice(state.customData, "07", ...variantC),
                    august: monthCalcForOneDevice(state.customData, "08", ...variantC),
                    september: monthCalcForOneDevice(state.customData, "09", ...variantC),
                }
            }
        default :
            return state
    }
}