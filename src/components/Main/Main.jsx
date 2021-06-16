import s from './Main.module.scss';
import Chart from "./Сhart/Chart";
import Description from "./Description/Description";
import Header from "./Header/Header";

const Main = () => {
    return (
        <div className={s.Main}>
            <Header/>
            <Chart/>
            <Description/>
        </div>
    );
}

export default Main;
