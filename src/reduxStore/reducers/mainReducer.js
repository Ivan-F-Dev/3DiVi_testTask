import {ADD_DATA, ADD_MODIFIED_DATA, ADD_RENDERED_DATA} from "../actionTypes";
import {monthCalc, monthCalcForOneDevice} from "../../utils/calc";

//INITIAL STATE FOR REDUCER
const initialState = {
    requestData: null,
    modifiedData: null,
    renderedData: null
    /*modifiedData: {
        begin: null,
        end: null,
        devicesArr: [
            {
                diviceId: null,
                views: null,
                dateArr: [
                    {
                        date: null,
                        ageArr: [
                            {
                                ageGroup: null,
                                views: null
                            }
                        ]
                    },
                ]
            },
        ]
    },*/
    /*renderData: {
        maxViews: null,
        devices: [
            {
                device: null,
                months: [
                    {
                        month: 'march',
                        totalViewsMarch: null,
                        ageGroups: [
                            {
                                group: 'adult',
                                views: null
                            },
                            {
                                group: 'kid',
                                views: null
                            },
                            {
                                group: 'old',
                                views: null
                            },
                            {
                                group: 'undefined',
                                views: null
                            },
                            {
                                group: 'young',
                                views: null
                            },
                        ]
                    },
                ]
            }
        ]

    }*/
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
            if (variant === "default") {
                return {
                    ...state, renderedData: {
                        /*marchCalc: () => {
                            let adultViews = 0
                            let kidViews = 0
                            let oldViews = 0
                            let undefinedViews = 0
                            let youngViews = 0
                            for (let i = 0; i < state.modifiedData.availableDevicesId.length; i++) {
                                if (state.modifiedData.devicesArr[i].datesArr[0].date === "03") {
                                    adultViews = adultViews + state.modifiedData.devicesArr[i].datesArr[0].agesArr[0].views
                                    kidViews = kidViews + state.modifiedData.devicesArr[i].datesArr[0].agesArr[1].views
                                    oldViews = oldViews + state.modifiedData.devicesArr[i].datesArr[0].agesArr[2].views
                                    undefinedViews = undefinedViews + state.modifiedData.devicesArr[i].datesArr[0].agesArr[3].views
                                    youngViews = youngViews + state.modifiedData.devicesArr[i].datesArr[0].agesArr[4].views
                                }
                            }
                            return {
                                adultViews:  adultViews,
                                kidViews:  kidViews,
                                oldViews:  oldViews,
                                undefinedViews:  undefinedViews,
                                youngViews:  youngViews
                            }
                        },*/
                        march: monthCalc(state, "03"),
                        april: monthCalc(state, "04"),
                        may: monthCalc(state, "05"),
                        june: monthCalc(state, "06"),
                        july: monthCalc(state, "07"),
                        august: monthCalc(state, "08"),
                        september: monthCalc(state, "09"),
                    }
                }
            } else {
                return {
                    ...state, renderedData: {
                        march: monthCalcForOneDevice(state, "03", variant),
                        april: monthCalcForOneDevice(state, "04", variant),
                        may: monthCalcForOneDevice(state, "05", variant),
                        june: monthCalcForOneDevice(state, "06", variant),
                        july: monthCalcForOneDevice(state, "07", variant),
                        august: monthCalcForOneDevice(state, "08", variant),
                        september: monthCalcForOneDevice(state, "09", variant),
                    }
                }
            }
        default :
            return state
    }
}