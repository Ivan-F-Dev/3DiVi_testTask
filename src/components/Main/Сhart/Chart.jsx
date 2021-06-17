import s from './Chart.module.scss';

const Chart = ({data, mData, rData}) => {
    return (
        <div className={s.chart}>
            <div>Chart</div>
            <div style={{display: "flex", justifyContent: "space-around", width: '100%'}}>
                <div style={{width: "10%"}}>maxValue</div>
                <div style={{width: "90%",display: "flex", justifyContent: "space-around"}} className={s.mouths}>
                    <div>
                        <div>{rData && rData.march.adultViews + rData.march.kidViews + rData.march.oldViews + rData.march.undefinedViews + rData.march.youngViews}</div>
                        <div>March</div>
                    </div>
                    <div>
                        <div>{rData && rData.april.adultViews + rData.april.kidViews + rData.april.oldViews + rData.april.undefinedViews + rData.april.youngViews}</div>
                        <div>April</div>
                    </div>
                    <div>
                        <div>{rData && rData.may.adultViews + rData.may.kidViews + rData.may.oldViews + rData.may.undefinedViews + rData.may.youngViews}</div>
                        <div>May</div>
                    </div>
                    <div>
                        <div>{rData && rData.june.adultViews + rData.june.kidViews + rData.june.oldViews + rData.june.undefinedViews + rData.june.youngViews}</div>
                        <div>June</div>
                    </div>
                    <div>
                        <div>{rData && rData.july.adultViews + rData.july.kidViews + rData.july.oldViews + rData.july.undefinedViews + rData.july.youngViews}</div>
                        <div>July</div>
                    </div>
                    <div>
                        <div>{rData && rData.august.adultViews + rData.august.kidViews + rData.august.oldViews + rData.august.undefinedViews + rData.august.youngViews}</div>
                        <div>August</div>
                    </div>
                    <div>
                        <div>{rData && rData.september.adultViews + rData.september.kidViews + rData.september.oldViews + rData.september.undefinedViews + rData.september.youngViews}</div>
                        <div>September</div>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default Chart;
