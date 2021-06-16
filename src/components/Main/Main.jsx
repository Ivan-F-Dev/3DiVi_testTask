import s from './Main.module.scss';
import Chart from "./Сhart/Chart";
import Description from "./Description/Description";
import Header from "./Header/Header";
import {addData} from "../../reduxStore/actionCreators";
import {useDispatch, useSelector} from "react-redux";
import {getData} from "../../reduxStore/thunkCreators";

const Main = () => {

    const dispatch = useDispatch()
    const data = useSelector(state => state.main.requestData)

    dispatch(addData('qwe'))
    const onClick = () => {
        dispatch(getData())
    }


    return (
        <div className={s.Main}>
            <button onClick={onClick}>Get Data</button>
            <span>{data}</span>
            <Header/>
            <Chart/>
            <Description/>
        </div>
    );
}

export default Main;
