import s from './Main.module.scss';
import Description from "./Description/Description";
import Header from "./Header/Header";
import {useDispatch, useSelector} from "react-redux";
import {initializeApp} from "../../reduxStore/thunkCreators";
import {useEffect} from "react";
import MyChart from "./MyChart/MyChart";
import SetMenu from "./Menu/SetMenu";

const Main = () => {

    const dispatch = useDispatch()
    const loadData = useSelector(state => state.main.loadData)
    const data = useSelector(state => state.main.requestData)
    const mData = useSelector(state => state.main.modifiedData)
    const rData = useSelector(state => state.main.renderedData)

    useEffect(() => {
        dispatch(initializeApp())
    }, [])

    return (
        <div>
            {loadData
                ? "Loading..."
                : <div className={s.Main}>
                    <div>{rData && <SetMenu mData={mData}/>}</div>
                    <Header/>
                    <Description mData={mData} rData={rData}/>
                    <div>{rData && <MyChart rData={rData}/>}</div>
                </div>
            }
        </div>
    )
}

export default Main;
