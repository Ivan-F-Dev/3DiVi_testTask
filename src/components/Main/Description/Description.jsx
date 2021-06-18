import s from './Description.module.scss';
import {useState} from "react";
import {addModifiedData, addRenderededCustomData, addRenderededData} from "../../../reduxStore/actionCreators";
import {useDispatch} from "react-redux";

const Description = ({mData, rData}) => {

    const dispatch = useDispatch()
    const [device, setdevice] = useState(["default"])

    const devices = ["6769", "7061"]

    const onClickModified = () => {
        dispatch(addModifiedData())

    }

    const onClickLogM = () => {
        console.log(mData)
    }

    const onClickRendered = () => {
        dispatch(addRenderededData(device))
    }

    const onClickRenderedCustom = () => {
        dispatch(addRenderededCustomData(devices))
    }

    const onClickLogR = () => {
        console.log(rData)
    }

  return (
    <div className={s.description}>
        <div>Description</div>
        <button onClick={onClickModified}>Modified Data</button>
        <button onClick={onClickLogM}>LogM</button>
        <button onClick={onClickRendered}>Rendered Data</button>
        <button onClick={onClickRenderedCustom}>Rendered Custom Data</button>
        <button onClick={onClickLogR}>LogR</button>
        <div style={{display:"flex",justifyContent:"space-around"}}>
            <div>Все устройства<input onClick={(e) => setdevice(e.target.value)} type="radio" name="browser" value="default"/></div>
            <div>{mData ? mData.availableDevicesId[0] : 'no'}<input onClick={(e) => setdevice(e.target.value)} type="radio" name="browser" value={mData ? mData.availableDevicesId[0] : 'no'}/></div>
            <div>{mData ? mData.availableDevicesId[1] : 'no'}<input onClick={(e) => setdevice(e.target.value)} type="radio" name="browser" value={mData ? mData.availableDevicesId[1] : 'no'}/></div>
            <div>{mData ? mData.availableDevicesId[2] : 'no'}<input onClick={(e) => setdevice(e.target.value)} type="radio" name="browser" value={mData ? mData.availableDevicesId[2] : 'no'}/></div>
            <div>{mData ? mData.availableDevicesId[3] : 'no'}<input onClick={(e) => setdevice(e.target.value)} type="radio" name="browser" value={mData ? mData.availableDevicesId[3] : 'no'}/></div>
            <div>{mData ? mData.availableDevicesId[4] : 'no'}<input onClick={(e) => setdevice(e.target.value)} type="radio" name="browser" value={mData ? mData.availableDevicesId[4] : 'no'}/></div>
            <div>{mData ? mData.availableDevicesId[5] : 'no'}<input onClick={(e) => setdevice(e.target.value)} type="radio" name="browser" value={mData ? mData.availableDevicesId[5] : 'no'}/></div>
            <div>{mData ? mData.availableDevicesId[6] : 'no'}<input onClick={(e) => setdevice(e.target.value)} type="radio" name="browser" value={mData ? mData.availableDevicesId[6] : 'no'}/></div>
            <div>{mData ? mData.availableDevicesId[7] : 'no'}<input onClick={(e) => setdevice(e.target.value)} type="radio" name="browser" value={mData ? mData.availableDevicesId[7] : 'no'}/></div>
        </div>
    </div>
  );
}

export default Description;
