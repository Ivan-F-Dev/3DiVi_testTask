import s from './SetMenu.module.scss';
import {useEffect, useState} from "react";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Button from "@material-ui/core/Button";
import {addRenderededCustomData, addRenderededData, setMode} from "../../../reduxStore/actionCreators";
import {useDispatch, useSelector} from "react-redux";
import {getPickedDevices} from "../../../utils/getPickedDevices";

const SetMenu = ({mData}) => {

    const dispatch = useDispatch()

    const [mainVariant, setMainVariant] = useState(true)
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

    const pickedDevices = getPickedDevices(state, mData)

    const onClickMainSet = () => {
        dispatch(addRenderededData(pickedDevices))
        setMainVariant(true)
    }

    const onClickCustomSet = () => {
        dispatch(addRenderededCustomData(pickedDevices))
        setMainVariant(false)
    }

    const handleChange = (event) => {
        setState({...state, [event.target.name]: event.target.checked});
        mainVariant ? dispatch(addRenderededData(pickedDevices)) : dispatch(addRenderededCustomData(pickedDevices))
    };

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
                <Button onClick={() => onClickMainSet()} variant="contained" color="primary">Render Main Data</Button>
                <Button onClick={() => onClickCustomSet()} variant="contained" color="primary">Render Custom Data</Button>
            </div>
        </div>
    );
}

export default SetMenu;
