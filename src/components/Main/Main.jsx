import s from './Main.module.scss';
import Chart from "./Сhart/Chart";
import Description from "./Description/Description";
import Header from "./Header/Header";
import {useDispatch, useSelector} from "react-redux";
import {getData} from "../../reduxStore/thunkCreators";
import {addModifiedData} from "../../reduxStore/actionCreators";

const Main = () => {

    const dispatch = useDispatch()
    const data = useSelector(state => state.main.requestData)
    const mData = useSelector(state => state.main.modifiedData)

    const onClickGet = () => {
        dispatch(getData())
    }

    const onClickModified = () => {
        dispatch(addModifiedData())
    }

    const onClickLog = () => {
        console.log(mData)
    }

    let m = "2020-05-13".split('-')[1]


    return (
        <div className={s.Main}>
            <button onClick={onClickGet}>Get Data</button>
            <button onClick={onClickModified}>Modified Data</button>
            <button onClick={onClickLog}>Log</button>
            <Header/>
            <Chart data={data} />
            <Description/>
        </div>
    );
}

export default Main;
