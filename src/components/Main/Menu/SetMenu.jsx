import s from './SetMenu.module.scss';
import {useState} from "react";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Button from "@material-ui/core/Button";
import {addRenderededCustomData, addRenderededData} from "../../../reduxStore/actionCreators";
import {useDispatch} from "react-redux";

const SetMenu = ({mData, rData}) => {

    const dispatch = useDispatch()
    const [state, setState] = useState({
            checkedA: true,
            checkedB: true,
            checkedC: true,
            checkedD: true,
            checkedE: true,
            checkedF: true,
            checkedG: true,
        }
    );

    const getPickedDevices = () => {
        let pickedDevices = new Array(mData.availableDevicesId)
        for (let i = 0; i < pickedDevices.length; i++) {
            switch (i) {
                case 0:
                    state.checkedA ? pickedDevices[0] = mData.availableDevicesId[0] : pickedDevices[0] = " "

                case 1:
                    state.checkedB ? pickedDevices[1] = mData.availableDevicesId[1] : pickedDevices[1] = " "

                case 2:
                    state.checkedC ? pickedDevices[2] = mData.availableDevicesId[2] : pickedDevices[2] = " "

                case 3:
                    state.checkedD ? pickedDevices[3] = mData.availableDevicesId[3] : pickedDevices[3] = " "

                case 4:
                    state.checkedE ? pickedDevices[4] = mData.availableDevicesId[4] : pickedDevices[4] = " "

                case 5:
                    state.checkedF ? pickedDevices[5] = mData.availableDevicesId[5] : pickedDevices[5] = " "

                case 6:
                    state.checkedG ? pickedDevices[6] = mData.availableDevicesId[6] : pickedDevices[6] = " "
            }
        }
        return pickedDevices
    }

    const pickedDevices = getPickedDevices()

    console.log("gpd", pickedDevices)


    const handleChange = (event) => {
        setState({...state, [event.target.name]: event.target.checked});
        //setTimeout(() => console.log(state), 500)
    };

    const onClickSet = () => {
        dispatch(addRenderededData(pickedDevices))
    }

    const onClickCustomSet = () => {
        dispatch(addRenderededCustomData(pickedDevices))
    }

    // const onClickRendered = () => {
    //     dispatch(addRenderededData(device))
    // }
    //
    // const onClickRenderedCustom = () => {
    //     dispatch(addRenderededCustomData(devices))
    // }

    return (
        <div className={s.setMenu}>
            <div>SetMenu</div>
            <FormGroup row>
                <FormControlLabel label="1"
                                  control={<Checkbox checked={state.checkedA} onChange={handleChange} name='checkedA'
                                                     color="primary"/>}/>
                <FormControlLabel label="2"
                                  control={<Checkbox checked={state.checkedB} onChange={handleChange} name="checkedB"
                                                     color="primary"/>}/>
                <FormControlLabel label="3"
                                  control={<Checkbox checked={state.checkedC} onChange={handleChange} name="checkedC"
                                                     color="primary"/>}/>
                <FormControlLabel label="4"
                                  control={<Checkbox checked={state.checkedD} onChange={handleChange} name="checkedD"
                                                     color="primary"/>}/>
                <FormControlLabel label="5"
                                  control={<Checkbox checked={state.checkedE} onChange={handleChange} name="checkedE"
                                                     color="primary"/>}/>
                <FormControlLabel label="6"
                                  control={<Checkbox checked={state.checkedF} onChange={handleChange} name="checkedF"
                                                     color="primary"/>}/>
                <FormControlLabel label="7"
                                  control={<Checkbox checked={state.checkedG} onChange={handleChange} name="checkedG"
                                                     color="primary"/>}/>
            </FormGroup>
            <Button onClick={() => onClickSet()} variant="text" color="primary">Set</Button>
            <Button onClick={() => onClickCustomSet()} variant="text" color="primary">Custom Set</Button>
        </div>
    );
}

export default SetMenu;
