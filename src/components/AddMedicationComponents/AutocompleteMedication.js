import React from "react";
import { Autocomplete, TextField } from "@mui/material";
import GenerateWeekForm from "./GenerateWeekForm";

const AutocompleteMedication = 
    ({medications, 
        optionList,
        handleSelectedValue,
        handleChange,
        removeMedicationForm,
        checkboxes,
        setCheckboxes,
        handleNumberChange,
        }) => {
    return medications.map((medication, index) => (
        <div key={index} style={{ display: 'flex', flexDirection: 'column', marginTop: '-3vh', overflow: "visible" }} className={"new-medication-form"}>
            <div style={{ display: 'flex', justifyContent: 'center', flexDirection: 'row' }}>
                <div className="autocomplete-container">
                    <Autocomplete
                        disablePortal
                        id={`combo-box-demo-${index}`}
                        className="autocomplete-form"
                        options={optionList}
                        value={medication}
                        onChange={(event, newValue) => handleSelectedValue(event, newValue, index)}
                        onInputChange={handleChange}
                        sx={{
                            width: '60vw',
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
                <div className="remove-button">
                    <button onClick={() => removeMedicationForm(index)}>x</button>
                </div>
            </div>
            <div>
                {medication && GenerateWeekForm({
                    checkboxes: checkboxes,
                    setCheckboxes: setCheckboxes,
                    handleNumberChange: handleNumberChange,
                })}
            </div>
        </div>
    ));
}


export default AutocompleteMedication;