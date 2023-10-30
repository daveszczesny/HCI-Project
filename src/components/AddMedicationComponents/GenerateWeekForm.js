import React from "react";

const GenerateWeekForm = ({
    checkboxes, 
    handleNumberChange,
    setCheckboxes,
}) => {
    return ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"].map((day, index) => {
        return (
            <div key={index} className={'week-button-container'} style={{display: 'flex', flexDirection: 'row'}}>
                <p>Times on {day}</p>
                <input
                    type="checkbox"
                    checked={checkboxes[index]}
                    onChange={() => {
                        const newChecboxes = [...checkboxes];
                        newChecboxes[index] = !checkboxes[index];
                        setCheckboxes(newChecboxes);
                    }} />
                <input
                    type="number"
                    placeholder="0"
                    onChange={(e) => handleNumberChange(index, parseInt(e.target.value))} />

            </div>
        )
    })
}

export default GenerateWeekForm;