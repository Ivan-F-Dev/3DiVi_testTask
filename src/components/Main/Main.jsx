import s from './Main.module.scss';
import Header from "./Header/Header";
import {useDispatch, useSelector} from "react-redux";
import {initializeApp} from "../../reduxStore/thunkCreators";
import {useEffect} from "react";
import MyChart from "./MyChart/MyChart";
import SetMenu from "./SetMenu/SetMenu";
import Preloader from "../../utils/Preloader";

const Main = () => {

    const dispatch = useDispatch()
    const loadData = useSelector(state => state.main.loadData)
    const mData = useSelector(state => state.main.modifiedData)
    const rData = useSelector(state => state.main.renderedData)

    useEffect(() => {
        dispatch(initializeApp())
    }, [dispatch])

    return (
        <div>
            {loadData
                ? <Preloader/>
                : <div className={s.Main}>
                    <div className={s.headerWrap}><Header/></div>
                    <div className={s.chartWrap}>{rData && <MyChart rData={rData}/>}</div>
                    <div className={s.menuWrap}>{rData && <SetMenu mData={mData}/>}</div>
                </div>
            }
        </div>
    )
}

export default Main;
