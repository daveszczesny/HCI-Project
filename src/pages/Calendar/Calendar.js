import './Calendar.css'; // Import default styles provided by react-calendar
import { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';


const CalendarPage = () => {
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

    const markedDays = {
        "2023-11-06": 0, // Assuming Monday is represented as 0 in your data
        "2023-11-08": 2, // Wednesday is represented as 2, etc.
    };

    const insertScheduleIntoCalendar = ({date, view}) => {
        const day = date.getDay();
        const dateKey = date.toISOString().split('T')[0];
        const firebaseValue = markedDays[dateKey];
        console.log(markedDays[dateKey]);


            if (firebaseValue == day) {
                console.log("yes");
                return <div className="dot"></div>; 
            } else {
                console.log(day);
            }
    return null;
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
        </>
    );
};


export default CalendarPage;