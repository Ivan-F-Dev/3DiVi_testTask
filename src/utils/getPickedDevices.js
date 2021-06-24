export const getPickedDevices = (state, mData) => {
    let pickedDevices = new Array(mData.availableDevicesId)
    for (let i = 0; i < pickedDevices.length; i++) {
        switch (i) {
            case 0:
                state[i] ? pickedDevices[0] = mData.availableDevicesId[0] : pickedDevices[0] = " "

            case 1:
                state[i] ? pickedDevices[1] = mData.availableDevicesId[1] : pickedDevices[1] = " "

            case 2:
                state[i] ? pickedDevices[2] = mData.availableDevicesId[2] : pickedDevices[2] = " "

            case 3:
                state[i] ? pickedDevices[3] = mData.availableDevicesId[3] : pickedDevices[3] = " "

            case 4:
                state[i] ? pickedDevices[4] = mData.availableDevicesId[4] : pickedDevices[4] = " "

            case 5:
                state[i] ? pickedDevices[5] = mData.availableDevicesId[5] : pickedDevices[5] = " "

            case 6:
                state[i] ? pickedDevices[6] = mData.availableDevicesId[6] : pickedDevices[6] = " "

            case 7:
                state[i] ? pickedDevices[7] = mData.availableDevicesId[7] : pickedDevices[7] = " "

        }
    }
    return pickedDevices
}