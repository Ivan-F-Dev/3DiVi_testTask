import s from './SetMenu.module.scss';
import {useEffect, useState} from "react";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import {addRenderededData} from "../../../reduxStore/actionCreators";
import {useDispatch} from "react-redux";
import {getPickedDevices} from "../../../utils/getPickedDevices";

const SetMenu = ({mData}) => {

    const dispatch = useDispatch()

    const [state, setState] = useState([
        true, true, true, true, true, true, true, true, true, true, true, true]
    );

    const pickedDevices = getPickedDevices(state, mData)

    useEffect(() => {
        dispatch(addRenderededData(pickedDevices))
    }, [dispatch, state])

    const handleChanget = (event) => {
        let newArr = [...state]
        newArr[event.target.name] = event.target.checked
        setState(newArr);
    };

    let checkBoxes = mData.availableDevicesId.map((e, index) =>
        <FormControlLabel key={(index +4) * 13} label={e} control={<Checkbox checked={state[index]} onChange={handleChanget} name={index} color="primary"/>}/>)

    return (
        <div className={s.setMenu}>
            <div className={s.checkBoxes}>
                <FormGroup row>
                    {checkBoxes}
                </FormGroup>
            </div>
        </div>
    );
}

export default SetMenu;
