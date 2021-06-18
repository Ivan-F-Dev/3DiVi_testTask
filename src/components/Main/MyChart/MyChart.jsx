import React, {useRef} from "react";
import {Bar} from "react-chartjs-2";

const MyChart = React.memo(({rData}) => {
        const chRef = useRef(null);

        const mocked_data = {
            labels: ["Brand 1", "Brand 2", "Brand 3", "Brand 4", "Brand 5"],
            spend_per_channel: {
                spends: [
                    {
                        label: "Undefined",
                        data: [rData.march.undefinedViews, rData.april.undefinedViews, rData.may.undefinedViews, rData.june.undefinedViews, rData.july.undefinedViews, rData.august.undefinedViews, rData.september.undefinedViews]
                    },
                    {
                        label: "Kids",
                        data: [rData.march.kidViews, rData.april.kidViews, rData.may.kidViews, rData.june.kidViews, rData.july.kidViews, rData.august.kidViews, rData.september.kidViews]
                    },
                    {
                        label: "Young Adult",
                        data: [rData.march.youngViews, rData.april.youngViews, rData.may.youngViews, rData.june.youngViews, rData.july.youngViews, rData.august.youngViews, rData.september.youngViews]
                    },
                    {
                        label: "Adult",
                        data: [rData.march.adultViews, rData.april.adultViews, rData.may.adultViews, rData.june.adultViews, rData.july.adultViews, rData.august.adultViews, rData.september.adultViews]
                    },
                    {
                        label: "Senior",
                        data: [rData.march.oldViews, rData.april.oldViews, rData.may.oldViews, rData.june.oldViews, rData.july.oldViews, rData.august.oldViews, rData.september.oldViews]
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
            labels: ["March", "April", "May", "June", "July", "August", "September"],
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