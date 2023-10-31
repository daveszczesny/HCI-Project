import React from 'react';
import './WeeklyCalendar.css'

function WeeklyCalendar({ events }) {
  const daysWeek =["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  const daysOfWeek = ['Today', 'Tomorrow', daysWeek[new Date().getDay() + 2]];


  const day = [
    "Today", "Tomorrow", daysWeek[new Date().getDay() + 2]
  ];

  return (
    <table className="weekly-calendar">
      <thead>
        <tr>
          {day.map((day, index) => (
            <th key={index}>{day}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        <tr>
          {daysOfWeek.map((day, index) => (
            <td key={index}>
              <div className="events">
                {events[day] && events[day].length > 0 ? (
                  events[day].map((event, eventIndex) => (
                    <div key={eventIndex} className="event">
                      {event}
                    </div>
                  ))
                ) : (
                  <div className="no-events">No events</div>
                )}
              </div>
            </td>
          ))}
        </tr>
      </tbody>
    </table>
  );
}

export default WeeklyCalendar;
