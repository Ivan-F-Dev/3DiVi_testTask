import s from './MyChart.module.scss';
import React, {useRef} from "react";
import {Bar} from "react-chartjs-2";

const mocked_data = {
    labels: ["Brand 1", "Brand 2", "Brand 3", "Brand 4", "Brand 5"],
    spend_per_channel: {
        spends: [
            {
                label: "Undefined",
                data: [56, 23, 55, 56, 57, 23, 55]
            },
            {
                label: "Kids",
                data: [22, 17, 32, 47, 62, 17, 32]
            },
            {
                label: "Young Adult",
                data: [46, 73, 25, 76, 27, 73, 25]
            },
            {
                label: "Adult",
                data: [26, 40, 80, 50, 62, 40, 80]
            },
            {
                label: "Senior",
                data: [36, 13, 35, 46, 67, 13, 35]
            }
        ]
    }
};

const MyChart = () => {
    const chRef = useRef(null);

    const CHART_COLORS = [
        "red",
        "orange",
        "yellow",
        "green",
        "blue",
        "darkblue",
        "purple",
        // "#337484",
        // "#fde76e",
        // "#fced86",
        // "#ffffb7",
        // "#fefeeb"
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
            onClick: (e, legendItem) => {
                let i = legendItem.datasetIndex;
                let ci = chRef.current.chartInstance;
            }
        }
    };

    return (
        <Bar data={data} width={100} height={50} options={options} ref={chRef}/>
    );
};

export default MyChart;

