import React from 'react';
import CanvasJSReact from '@canvasjs/react-charts';
import './Stats.css';

const CanvasJSChart = CanvasJSReact.CanvasJSChart;

const Stats = () => {
    // Hardcoded data for Xanax and Xanaxr for each day of the week
    const xanaxData = [
        { label: 'Monday', y: 2 },
        { label: 'Tuesday', y: 4 },
        { label: 'Wednesday', y: 6 },
        { label: 'Thursday', y: 3 },
        { label: 'Friday', y: 5 },
        { label: 'Saturday', y: 7 },
        { label: 'Sunday', y: 9 },
    ];

    const thePill = [
        { label: 'Monday', y: 1 },
        { label: 'Tuesday', y: 3 },
        { label: 'Wednesday', y: 5 },
        { label: 'Thursday', y: 2 },
        { label: 'Friday', y: 4 },
        { label: 'Saturday', y: 6 },
        { label: 'Sunday', y: 8 },
    ];

    const chartOptions = {
        height: 115,
        width: 350,
        backgroundColor: "rgba(126, 220, 241, 1)",
        axisY: {
            interval: 2,
        },
        data: [
            {
                type: 'line',
                dataPoints: xanaxData,
            },
        ],
    };


    const chartOptionsXanaxr = {
        height: 115,
        width: 350,
        backgroundColor: "rgba(126, 220, 241, 1)",
        axisY: {
            interval: 2,
        },
        data: [
            {
                type: 'line',
                dataPoints: thePill,
            },
        ],
    };

    return (
        <div className='statsContainer'>
            <h1>Stats</h1>
            <h3>Medication Consumption Frequency</h3>

            <div className='StatsDiv'>
                <h3>Xanax</h3>
                <div className='StatsGraphDiv'>
                    <CanvasJSChart options={chartOptions}/>
                </div>
            </div>

            <div className='StatsDiv'>
                <h3>The Pill</h3>
                <div className='StatsGraphDiv'>
                    <CanvasJSChart options={chartOptionsXanaxr} />
                </div>
            </div>

            <div className='StatsDiv'>
                <h3>Back Pain Medication</h3>
                <div className='StatsGraphDiv'>
                    <CanvasJSChart options={chartOptionsXanaxr} />
                </div>
            </div>
        </div>
    );
};

export default Stats;
