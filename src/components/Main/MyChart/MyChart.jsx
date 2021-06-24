import React, {useRef} from "react";
import {Bar} from "react-chartjs-2";
import {getMonthsLabels, getSpendsData} from "../../../utils/calc";

const MyChart = React.memo(({mData ,rData}) => {
        const chRef = useRef(null);

        const mocked_data = {
            labels: ["Brand 1", "Brand 2", "Brand 3", "Brand 4", "Brand 5"],
            spend_per_channel: {
                spends: [
                    {
                        label: "Undefined",
                        data: getSpendsData("undefinedViews", mData, rData)
                    },
                    {
                        label: "Kids",
                        data: getSpendsData("kidViews", mData, rData)
                    },
                    {
                        label: "Young Adult",
                        data: getSpendsData("youngViews", mData, rData)
                    },
                    {
                        label: "Adult",
                        data: getSpendsData("adultViews", mData, rData)
                    },
                    {
                        label: "Senior",
                        data: getSpendsData("oldViews", mData, rData)
                    }
                ]
            }
        };

        const CHART_COLORS = [
            '#9a9a9a',
            '#179414',
            '#3399fe',
            '#3266cc',
            '#dc3912'
        ];

        const spendsdata = mocked_data.spend_per_channel.spends.map(
            (spend, index) => {
                return {
                    label: spend.label,
                    backgroundColor: CHART_COLORS[index],
                    data: spend.data,
                    stack: 1
                };
            }
        );

        const newdataset = [spendsdata];
        const spnedperchanneldata = newdataset.flat();

        const data = {
            labels: getMonthsLabels(mData.monthsCount,new Date(mData.begin).getMonth() + 1),
            //labels: ["March", "April", "May", "June", "July", "August", "September"],
            datasets: spnedperchanneldata
        };

        const options = {
            legend: {
                position: "bottom",
                labels: {
                    generateLabels: function (chart) {
                        return chart.defaults.global.legend.labels.generateLabels
                            .apply(this, [chart])
                            .filter(function (item, i) {
                                return i > 4;
                            });
                    },
                    boxWidth: 10,
                    usePointStyle: true
                },
            }
        };

        return (
            <div style={{display: "flex"}}>
                <div style={{width: "20%"}}></div>
                <div style={{width: "60%"}}><Bar data={data} width={100} height={50} options={options} ref={chRef}/></div>
            </div>

        );
    }
)
export default MyChart;