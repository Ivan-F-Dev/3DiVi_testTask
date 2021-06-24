const monNamesArr = [ 'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December',
    'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']

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

export const createRenderedData = (monCount, monBegin, state, changedDeviceId) => {
    const renderedData = {}
    for (let i = 0; i < monCount; i++) {
        renderedData[`${monNamesArr[monBegin - 1 + i]}`] = monthCalcForOneDevice(state, monBegin + i, ...changedDeviceId)
    }
    return renderedData
}

export const monthDiff = (d1, d2) => {
    var months;
    months = (d2.getFullYear() - d1.getFullYear()) * 12;
    months -= d1.getMonth();
    months += d2.getMonth();
    return months + 1;
}

export const getMonthsLabels = (monCount, monBegin) => {
    const monthsLabels = []
    for (let i = 0; i < monCount; i++) {
        monthsLabels.push(monNamesArr[monBegin - 1 + i])
    }
    return monthsLabels
}

export const getSpendsData = (ageCat ,mData, rData) => {
    let beginMonth = new Date(mData.begin).getMonth() + 1
    let count = mData.monthsCount
    let spendsData = []

    for (let i = 0; i < count; i++) {
        let md = rData[monNamesArr[beginMonth - 1 + i]]
        let amd = md[ageCat]
        spendsData.push(amd)
    }
    return spendsData
}