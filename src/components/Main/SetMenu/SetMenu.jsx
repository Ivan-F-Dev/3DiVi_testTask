import s from './SetMenu.module.scss';
import {useState} from "react";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Button from "@material-ui/core/Button";
import {addRenderededCustomData, addRenderededData} from "../../../reduxStore/actionCreators";
import {useDispatch} from "react-redux";
import {getPickedDevices} from "../../../utils/getPickedDevices";

const SetMenu = ({mData}) => {

    const dispatch = useDispatch()
    const [state, setState] = useState({
            checkedA: true,
            checkedB: true,
            checkedC: true,
            checkedD: true,
            checkedE: true,
            checkedF: true,
            checkedG: true,
            checkedH: true,
        }
    );

    // const getPickedDevices = (state, mData) => {
    //     let pickedDevices = new Array(mData.availableDevicesId)
    //     for (let i = 0; i < pickedDevices.length; i++) {
    //         switch (i) {
    //             case 0:
    //                 state.checkedA ? pickedDevices[0] = mData.availableDevicesId[0] : pickedDevices[0] = " "
    //
    //             case 1:
    //                 state.checkedB ? pickedDevices[1] = mData.availableDevicesId[1] : pickedDevices[1] = " "
    //
    //             case 2:
    //                 state.checkedC ? pickedDevices[2] = mData.availableDevicesId[2] : pickedDevices[2] = " "
    //
    //             case 3:
    //                 state.checkedD ? pickedDevices[3] = mData.availableDevicesId[3] : pickedDevices[3] = " "
    //
    //             case 4:
    //                 state.checkedE ? pickedDevices[4] = mData.availableDevicesId[4] : pickedDevices[4] = " "
    //
    //             case 5:
    //                 state.checkedF ? pickedDevices[5] = mData.availableDevicesId[5] : pickedDevices[5] = " "
    //
    //             case 6:
    //                 state.checkedG ? pickedDevices[6] = mData.availableDevicesId[6] : pickedDevices[6] = " "
    //
    //             case 7:
    //                 state.checkedG ? pickedDevices[7] = mData.availableDevicesId[7] : pickedDevices[7] = " "
    //         }
    //     }
    //     return pickedDevices
    // }

    const pickedDevices = getPickedDevices(state, mData)

    const handleChange = (event) => {
        setState({...state, [event.target.name]: event.target.checked});
    };

    const onClickMainSet = () => {
        dispatch(addRenderededData(pickedDevices))
    }

    const onClickCustomSet = () => {
        dispatch(addRenderededCustomData(pickedDevices))
    }

    return (
        <div className={s.setMenu}>
            <div className={s.checkBoxes}>
                <FormGroup row>
                    <FormControlLabel label={mData.availableDevicesId[0]}
                                      control={<Checkbox checked={state.checkedA} onChange={handleChange}
                                                         name='checkedA'
                                                         color="primary"/>}/>
                    <FormControlLabel label={mData.availableDevicesId[1]}
                                      control={<Checkbox checked={state.checkedB} onChange={handleChange}
                                                         name="checkedB"
                                                         color="primary"/>}/>
                    <FormControlLabel label={mData.availableDevicesId[2]}
                                      control={<Checkbox checked={state.checkedC} onChange={handleChange}
                                                         name="checkedC"
                                                         color="primary"/>}/>
                    <FormControlLabel label={mData.availableDevicesId[3]}
                                      control={<Checkbox checked={state.checkedD} onChange={handleChange}
                                                         name="checkedD"
                                                         color="primary"/>}/>
                    <FormControlLabel label={mData.availableDevicesId[4]}
                                      control={<Checkbox checked={state.checkedE} onChange={handleChange}
                                                         name="checkedE"
                                                         color="primary"/>}/>
                    <FormControlLabel label={mData.availableDevicesId[5]}
                                      control={<Checkbox checked={state.checkedF} onChange={handleChange}
                                                         name="checkedF"
                                                         color="primary"/>}/>
                    <FormControlLabel label={mData.availableDevicesId[6]}
                                      control={<Checkbox checked={state.checkedG} onChange={handleChange}
                                                         name="checkedG"
                                                         color="primary"/>}/>
                    <FormControlLabel label={mData.availableDevicesId[7]}
                                      control={<Checkbox checked={state.checkedH} onChange={handleChange}
                                                         name="checkedH"
                                                         color="primary"/>}/>
                </FormGroup>
            </div>
            <div className={s.buttons}>
                <Button onClick={() => onClickMainSet()} variant="contained" color="primary">Main Set</Button>
                <Button onClick={() => onClickCustomSet()} variant="contained" color="primary">Custom Set</Button>
            </div>
        </div>
    );
}

export default SetMenu;
