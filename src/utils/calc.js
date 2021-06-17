export const monthCalc = (state, mounth) => {
    let adultViews = 0
    let kidViews = 0
    let oldViews = 0
    let undefinedViews = 0
    let youngViews = 0
    for (let i = 0; i < state.modifiedData.availableDevicesId.length; i++) {
        if (state.modifiedData.devicesArr[i].datesArr[0].date === mounth) {
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
}

export const monthCalcForOneDevice = (state, mounth, ...deviceId) => {
    let adultViews = 0
    let kidViews = 0
    let oldViews = 0
    let undefinedViews = 0
    let youngViews = 0
    for (let i = 0; i < state.modifiedData.availableDevicesId.length; i++) {
        if (state.modifiedData.devicesArr[i].datesArr[0].date === mounth && state.modifiedData.devicesArr[i].deviceId === deviceId[0]) {
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
}


/*
import {useSelector} from "react-redux";


const Calc = () => {

    const data = useSelector(state => state.main.requestData)

    return null;
}

export default Calc;*/