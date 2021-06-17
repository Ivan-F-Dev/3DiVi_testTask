//INITIAL STATE FOR REDUCER
import {ADD_DATA, ADD_MODIFIED_DATA} from "../actionTypes";
import {forwardRef} from "react";

const initialState = {
    requestData: null,
    modifiedData: {
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
    },
    renderData: {
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

    }
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
                            /*datesArr: state.requestData.data.o[0].o.map(datesEl => {
                                return {
                                    date: datesEl.n
                                }
                            })*/

                        }
                    })
                }
            }
        default :
            return state
    }
}