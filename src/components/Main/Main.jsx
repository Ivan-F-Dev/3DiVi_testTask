import s from './Main.module.scss';
import Chart from "./Сhart/Chart";
import Description from "./Description/Description";
import Header from "./Header/Header";
import {useDispatch, useSelector} from "react-redux";
import {getData} from "../../reduxStore/thunkCreators";
import {addModifiedData, addRenderededData} from "../../reduxStore/actionCreators";
import {useState} from "react";
import MyChart from "./MyChart/MyChart";

const Main = () => {

    const dispatch = useDispatch()
    const data = useSelector(state => state.main.requestData)
    const mData = useSelector(state => state.main.modifiedData)
    const rData = useSelector(state => state.main.renderedData)
    const [device, setdevice] = useState(["default"])

    const onClickGet = () => {
        dispatch(getData())
    }

    const onClickModified = () => {
        dispatch(addModifiedData())
    }

    const onClickLogM = () => {
        console.log(mData)
    }

    const onClickRendered = () => {
        dispatch(addRenderededData(device))
    }

    const onClickLogR = () => {
        console.log(rData)
    }


    let m = "2020-05-13".split('-')[1]


    return (
        <div className={s.Main}>
            <button onClick={onClickGet}>Get Data</button>
            <button onClick={onClickModified}>Modified Data</button>
            <button onClick={onClickLogM}>LogM</button>
            <div>
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
            <button onClick={onClickRendered}>Rendered Data</button>
            <button onClick={onClickLogR}>LogR</button>
            <Header/>
            <Chart data={data} mData={mData} rData={rData} />
            <Description/>
            <hr/>
            <div style={{display:"flex"}}>
                <div style={{width:"20%"}}></div>
                <div style={{width:"60%"}}><MyChart/></div>

            </div>

        </div>
    );
}

export default Main;
