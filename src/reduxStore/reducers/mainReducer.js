import {
    ADD_DATA,
    ADD_MODIFIED_DATA,
    ADD_RENDERED_CUSTOM_DATA,
    ADD_RENDERED_DATA,
    SET_LOAD_DATA,
    SET_MODE
} from "../actionTypes";
import {monthCalcForOneDevice} from "../../utils/calc";
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
            const variant = action.payload
            return {
                ...state, renderedData: {
                    march: monthCalcForOneDevice(state.modifiedData, 3, ...variant),
                    april: monthCalcForOneDevice(state.modifiedData, 4, ...variant),
                    may: monthCalcForOneDevice(state.modifiedData, 5, ...variant),
                    june: monthCalcForOneDevice(state.modifiedData, 6, ...variant),
                    july: monthCalcForOneDevice(state.modifiedData, 7, ...variant),
                    august: monthCalcForOneDevice(state.modifiedData, 8, ...variant),
                    september: monthCalcForOneDevice(state.modifiedData, 9, ...variant),
                }
            }
        case ADD_RENDERED_CUSTOM_DATA:
            const variantC = action.payload
            return {
                ...state, renderedData: {
                    march: monthCalcForOneDevice(state.customData, 3, ...variantC),
                    april: monthCalcForOneDevice(state.customData, 4, ...variantC),
                    may: monthCalcForOneDevice(state.customData, 5, ...variantC),
                    june: monthCalcForOneDevice(state.customData, 6, ...variantC),
                    july: monthCalcForOneDevice(state.customData, 7, ...variantC),
                    august: monthCalcForOneDevice(state.customData, 8, ...variantC),
                    september: monthCalcForOneDevice(state.customData, 9, ...variantC),
                }
            }
        default :
            return state
    }
}