
import { useEffect, useState } from "react"
import { Navigate, useNavigate } from "react-router-dom";
import FetchMedication from "../../script/fetch_data_url";
import { Autocomplete, TextField } from "@mui/material";
import './AddMedication.css'
import TimePicker from "../../components/AddTime";

const AddMedication = () => {

    const [drugName, setDrugName] = useState("");
    const [optionList, setOptionList] = useState([""]);
    const [medications, setMedications] = useState([null]); // Store selected medications for each form


    const handleSelectedValue = (event, newValue, index) => {
        const newMedications = [...medications];
        newMedications[index] = newValue;
        setMedications(newMedications);
    }

    const handleChange = (event, value) => {
        setDrugName(value);
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

    const addMedicationForm = () => {
        setMedications([...medications, null]);
    }

    const removeMedicationForm = (index) => {
        const newMedications = [...medications];
        newMedications.splice(index, 1);
        setMedications(newMedications);
    }

    const generateMedicationsForms = () => {
        return medications.map((medication, index) => (
            <div key={index} style={{ display: 'flex', flexDirection: 'row', marginTop: '-3vh', overflow: "visible" }} className={"new-medication-form"}>
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
        ));
    }

    return (
        <>
            <div className="add-medication-container">
                {generateMedicationsForms()}
                <div className="add-medication-button-container">
                    <button onClick={addMedicationForm}>Add Medication</button>
                </div>
            </div>


            <div className="next-button-container">
                <button>Next</button>
            </div>
        </>
    )
}

export default AddMedication;