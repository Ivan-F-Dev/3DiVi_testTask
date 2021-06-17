import s from './Chart.module.scss';

const Chart = ({data}) => {
    return (
        <div className={s.chart}>
            <div>Chart</div>
            <div style={{display: "flex", justifyContent: "space-around", width: '100%'}}>
                <div style={{width: "10%"}}>maxValue</div>
                <div style={{width: "90%",display: "flex", justifyContent: "space-around"}} className={s.mouths}>
                    <div>
                        <div>1</div>
                        <div>March</div>
                    </div>
                    <div>
                        <div>2</div>
                        <div>April</div>
                    </div>
                    <div>
                        <div>3</div>
                        <div>May</div>
                    </div>
                    <div>
                        <div>4</div>
                        <div>June</div>
                    </div>
                    <div>
                        <div>5</div>
                        <div>July</div>
                    </div>
                    <div>
                        <div>6</div>
                        <div>August</div>
                    </div>
                    <div>
                        <div>7</div>
                        <div>September</div>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default Chart;
