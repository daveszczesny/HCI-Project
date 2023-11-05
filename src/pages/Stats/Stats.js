import './Stats.css';
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';
import React, { useEffect, useState } from 'react';
import CanvasJSReact from '@canvasjs/react-charts';
var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

function Stats() {

    const [prescriptions, prescritpionStats] = useState([]);


    // useEffect(() => {
    //     const fetch = async () => {
    //         try {
    //             const prescritpionData = await Firebase.getPrescriptionData();
    //             setPrescriptions(prescritpionData);
    //         } catch (error) {
    //             console.error("Error fetching Prescription Data: ", error);
    //         }
    //     };

    //     fetch();
    // }, []);









    const events = {
        Today: ['Poop Pills', 'Steroids'],
        Tomorrow: ['Xanax'],
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
            data:[{
                type: "line",
                toolTipContent: "Day {x}: {y}%",
                dataPoints: [
                    {x: 0, y: 5},
                    {x: 1, y: 1},
                    {x: 2, y: 5},
                    {x: 3, y: 4},
                    {x: 4, y: 2},
                    {x: 5, y: 5},
                    {x: 6, y: 5}
                ],
                lineColor: "darkBlue", 
                markerColor: "darkBlue"
            }]
        }  
        return(
            <>
            {/* Title Of the Page */}
            <div className='titleDiv'>
                <h1>Stats</h1>
            </div>

            <div>
                {prescriptions.map((prescription, index) => {
                    <div className='StatsDiv' key={index}>
                        <div className='StatsTitle'>
                            {prescription.name}
                        </div>
                        <div className='StatsGraphDiv'>
                            <CanvasJSChart prescritpionData={prescription}/>
                        </div>
                    </div>
                })}
                </div>
            </>
    )
}
export default Stats;
