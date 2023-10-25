
import { useEffect, useState } from "react"
import { Navigate, useNavigate } from "react-router-dom";
import FetchMedication from "../../script/fetch_data_url";
import { Autocomplete, TextField } from "@mui/material";
import './AddMedication.css'
import TimePicker from "../../components/AddTime";

const AddMedication = () => {

    const [drugName, setDrugName] = useState("");
    const [optionList, setOptionList] = useState([""]);
    const [selectedValue, setSelectedValue] = useState(null);
    const [dailyDosage, setDailyDosage] = useState(null);
    const [times, setTime] = useState("1");


    var timeHourOptions = [
        "00", "01", "02", "03", "04", "05", "06", "07", "08", "09",
        "10", "11", "12", "13", "14", "15", "16", "17", "18", "19",
        "20", "21", "22", "23"
    ];

    var timeMinOptions = [
        "00", "01", "02", "03", "04", "05", "06", "07", "08", "09",
        "10", "11", "12", "13", "14", "15", "16", "17", "18", "19",
        "20", "21", "22", "23", "24", "25", "26", "27", "28", "29",
        "30", "31", "32", "33", "34", "35", "36", "37", "38", "39",
        "40", "41", "42", "43", "44", "45", "46", "47", "48", "49",
        "50", "51", "52", "53", "54", "55", "56", "57", "58", "59"
    ];

    const [hour, setHour] = useState(Array(times).fill(null));
    const [min, setMin] = useState(Array(times).fill(null));

    const handleTimeChange = (index, field, value) => {
        if (field === 'hour') {
            const newHour = [...hour];
            newHour[index] = value;
            setHour(newHour);
        } else if (field === 'min') {
            const newMin = [...min];
            newMin[index] = value;
            setMin(newMin);
        }
    };

    const handleSelectedValue = (event, newValue) => {
        setSelectedValue(newValue);
    }


    const handleChange = (event, value) => {
        setDrugName(value);
    }

    const handleTimesChange = (e) => {
        setTime(e.target.value);
        console.log(times);
    }

    useEffect(() => {

        async function foo() {
            return FetchMedication({
                drugName: drugName
            })
        }
        foo().then((data) => {
            setOptionList(data[1]);
        })

    }, [drugName]);


    const generateTimers = () => {
        const timerComponents = [];
        for (let i = 0; i < times; i++) {
            timerComponents.push(
                <div key={i}>
                    <span style={{ display: 'flex', alignItems: 'center', whiteSpace: 'nowrap', marginBottom: '2vh' }}>
                        Reminder {i + 1}
                        <TimePicker
                            options={timeHourOptions}
                            value={hour[i]}
                            onChange={(newHour) => handleTimeChange(i, 'hour', newHour)}
                            label="Hr"
                        />
                        :
                        <TimePicker
                            options={timeMinOptions}
                            value={min[i]}
                            onChange={(newMin) => handleTimeChange(i, 'min', newMin)}
                            label="Min"
                        />
                    </span>
                </div>
            );
        }
        return timerComponents;
    }

    return (
        <>
            <div className="add-medication-container">
                <div className="autocomplete-container">
                    <Autocomplete
                        disablePortal
                        id="combo-box-demo"
                        className="autocomplete-form"
                        options={optionList}
                        value={selectedValue}
                        onChange={handleSelectedValue}
                        onInputChange={handleChange}
                        sx={{
                            width: '80vw',
                            '& .MuiOutlinedInput-root': {
                                '& fieldset': {
                                    border: 'none', // Remove the border
                                },
                                '&:hover fieldset': {
                                    border: 'none', // Remove the border on hover
                                },
                                '&.Mui-focused fieldset': {
                                    border: 'none', // Remove the border on focus
                                },
                                '&.Mui-focused': {
                                    boxShadow: 'none', // Remove the box-shadow on focus
                                },
                            },
                        }}
                        renderInput={(params) => <TextField {...params} label="Medication" />}
                    />
                </div>

                <div className="add-medication-para-container">
                    <p>I take this medication <input type="text" value={times} onChange={handleTimesChange} placeholder="2" /> times a day</p>
                </div>


                <div className="add-medication-reminder-section">
                    <p>
                        I want to be reminded to take this medication at
                    </p>
                </div>
                {generateTimers()}

                <p>Selected value = {selectedValue}</p>
                <p>Selected times = {hour[0]} : {min[0]}</p>
            </div>

        </>
    )
}


export default AddMedication;