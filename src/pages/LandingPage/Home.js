import './Home.css';
import React from 'react';
import SampleRefillPic from '../../img/sampleRefillPic.png';
import { useState } from 'react';
import WeeklyCalendar from './WeeklyCalendar';
import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom';
import CanvasJSReact from '@canvasjs/react-charts';


var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

function Home() {
    const navigate = useNavigate();

    const events = {
        Today: ['Poop Pills', 'Steroids'],
        Tomorrow: ['Xanex'],
        Next: ['Pills'],
    };

    const options = {
        animationEnabled: true,
        exportEnabled: false,
        interactivityEnabled: false,
        width: 350,
        height: 130,
        theme: "light2",
        backgroundColor: "rgba(126, 220, 241, 1)",
        axisY: {
            title: "No. Taken",
            titleFontColor: "black",
            labelFontColor: "black",
            interval: 2
        },
        axisX: {
            title: "Days",
            titleFontColor: "black",
            labelFontColor: "black",
            interval: 1,
            labelFormatter: function (e) {
                const labels = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
                if (labels[e.value]) {
                    return labels[e.value];
                }
            },
        },
        data: [{
            type: "line",
            toolTipContent: "Day {x}: {y}%",
            dataPoints: [
                { x: 0, y: 5 },
                { x: 1, y: 1 },
                { x: 2, y: 5 },
                { x: 3, y: 4 },
                { x: 4, y: 2 },
                { x: 5, y: 5 },
                { x: 6, y: 5 }
            ],
            lineColor: "darkBlue",
            markerColor: "darkBlue"
        }]
    }

    return (
        <div className='homeDiv'>
            {/* Div for the header */}
            <div className='header'>
                <h1>MediGuardian</h1>
            </div>

            {/* Div to welcome the user to the landing page */}
            <div className='welcomeUser'>
                <h3>
                    Hello user
                </h3>
            </div>

            {/* Div to let the user input if they have taken their meds today */}
            <div className='haveTheyTakenMedsDiv'>
                <div className='takenMedsPrompt'>
                    Have you taken your Meds Today?
                </div>
                <div className='takenMedsButtons'>
                    <button>Yes</button>
                    <button>No</button>
                    {/* popups for congrats and uh oh? */}
                </div>
            </div>

            {/* Div to show the progress graph */}
            <div className='StatsDiv' onClick={() => navigate('/stats')}>
                <div className='StatsTitle'>
                    Medication Adherance Rate By Week
                </div>
                <div className='StatsGraphDiv'>
                    <CanvasJSChart options={options} />
                </div>
            </div>

            {/* Div to show the mini Calendar which will show the current week */}
            <div className='CalendarDiv' onClick={() => navigate('/calendar')}>
                <div className='CalendarTitle'>
                    This Week
                </div>
                <div className='Calendar'>
                    <WeeklyCalendar events={events} />
                </div>
            </div>

            {/* Div for Badges */}
            <div className='BadgesDiv'>
                <div className='BadgesTitle'>
                    Badges
                </div>
                <div className='Badges'>
                    Badges Will go here
                </div>
            </div>

            {/* Div For Refill */}
            <div className='RefillDiv'>
                <div className='RefillIconDiv'>
                    <img src={SampleRefillPic} />
                </div>
                <div className='RefillInfoDiv'>
                    <div className='RefillTextDiv'>
                        Your next Refill is due on 17th October
                    </div>
                    <div className='LogRefillButton'>
                        <button>Log a Refill</button>
                    </div>
                </div>
            </div>

            {/* About Button */}
            <div className='AboutButton'>
                <button onClick={() => navigate('/About')}>
                    ?
                </button>
            </div>

            {/* Button to add new medication */}
            <div className='AddNewMedDiv'>
                <button onClick={() => console.log("Clicked")}>
                    +
                </button>
            </div>
        </div>
    );
}
export default Home;
