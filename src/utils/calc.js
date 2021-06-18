export const monthCalcForOneDevice = (state, mounth, ...deviceId) => {
    let adultViews = 0
    let kidViews = 0
    let oldViews = 0
    let undefinedViews = 0
    let youngViews = 0
    for (let i = 0; i < state.availableDevicesId.length; i++) {
        if (state.devicesArr[i].datesArr[0].date === mounth && deviceId.includes(state.devicesArr[i].deviceId) ) {
            adultViews = adultViews + state.devicesArr[i].datesArr[0].agesArr[0].views
            kidViews = kidViews + state.devicesArr[i].datesArr[0].agesArr[1].views
            oldViews = oldViews + state.devicesArr[i].datesArr[0].agesArr[2].views
            undefinedViews = undefinedViews + state.devicesArr[i].datesArr[0].agesArr[3].views
            youngViews = youngViews + state.devicesArr[i].datesArr[0].agesArr[4].views
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