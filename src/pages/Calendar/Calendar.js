import './Calendar.css'; // Import default styles provided by react-calendar
import { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';


const CalendarPage = () => {

    alert("This is sample data, used to show proof of concept!");

    const [date, setDate] = useState(new Date()); // Set initial date

    // Options for the Calendar
    const options = {
        showNeighboringMonth: false,
        showNavigation: false,
        next2Label: null,
        prev2Label: null,
        defaultView: "month",
        onClickDay: console.log("hi")
    };

    // Function to get the current month 
    const getCurrentMonth = (date) => {
        return new Intl.DateTimeFormat('en-US', { month: 'long' }).format(date);
    };

    const isEverySecondDay = (date) => date.getDate() % 2 === 0;
    const isOnceAWeek = (date) => date.getDay() === 0; // 0 is Sunday

    const insertScheduleIntoCalendar = ({date, view}) => {
        const dateKey = date.toISOString().split('T')[0];
        const elements = [];

        // Pill to take every day
        elements.push(<div className='dot red'></div>);

        // Pill to take every second day
        if (isEverySecondDay(date)) {
            elements.push(<div className='dot blue'></div>);
        }

        // Pill to take once a week
        if (isOnceAWeek(date)) {
            elements.push(<div className='dot green'></div>);
        }

        // Refill day on the 10th
        if (date.getDate() === 10) {
            elements.push(<div className='triangleRed'></div>);
        }

        // Refill day on the last day of the month
        const nextDay = new Date(date.getTime() + 24 * 60 * 60 * 1000);
        if (nextDay.getMonth() !== date.getMonth()) {
            elements.push(<div className='triangleBlue'></div>);
        }

        return elements;
    };

    return (
        <>
        <h1>Monthly Planner</h1>
        <h4>{getCurrentMonth(date)}</h4>
        <div className='calendar-container'>
            <Calendar
                value={date} // Set the active start date by controlling the value
                onChange={setDate} // Handle date changes
                tileContent={insertScheduleIntoCalendar}
                {...options}
            />
        </div>
            <h4>Legend</h4>
        <table className='legend'>
            <tr>
                <td><div className='dot red'></div></td>
                <td>The Pill</td>
            </tr>
            <tr>
                <td><div className='dot blue'></div></td>
                <td>Back Pain Pill</td>
            </tr>
            <tr>
                <td><div className='dot green'></div></td>
                <td>Dementia Pill</td>
            </tr>
            <tr>
                <td><div className='triangle'></div></td>
                <td>Refill Day</td>
            </tr>
        </table>
        </>
    );
};


export default CalendarPage;