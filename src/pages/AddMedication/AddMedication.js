
import { useEffect, useState } from "react"
import FetchMedication from "../../script/fetch_data_url";
import './AddMedication.css'

import AutocompleteMedication from "../../components/AddMedicationComponents/AutocompleteMedication";
import PreviewMedicationAdded from "../../components/AddMedicationComponents/PreviewMedicationAdded";

const AddMedication = () => {

    const [drugName, setDrugName] = useState("");
    const [optionList, setOptionList] = useState([""]);
    const [medications, setMedications] = useState([null]); // Store selected medications for each form
    const [checkboxes, setCheckboxes] = useState([false, false, false, false, false, false, false]);
    const [checboxValues, setCheckboxValues] = useState([0, 0, 0, 0, 0, 0, 0]); // Store amount to take per given day


    const [previewMedications, setPreviewMedications] = useState([]);

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
        if (medications.length <= 0) {
            setMedications([...medications, null]);
            return;
        }
        setPreviewMedications(
            [...previewMedications, <PreviewMedicationAdded key={medications[0]} medication={medications[0]} values={checboxValues} />])

        medications.pop();

        // Reset the checkboxes
        setCheckboxes([false, false, false, false, false, false, false]);
        setCheckboxValues([0, 0, 0, 0, 0, 0, 0]);

        setMedications([...medications, null]);
    }

    const removeMedicationForm = (index) => {
        const newMedications = [...medications];
        newMedications.splice(index, 1);
        setMedications(newMedications);
    }


    const handleNumberChange = (index, value) => {
        const newCheckboxes = [...checkboxes];
        newCheckboxes[index] = value > 0;

        const newValue = [...checboxValues];
        newValue[index] = value;
        setCheckboxValues(newValue);
        setCheckboxes(newCheckboxes);
    };

    return (
        <>
            <div className="add-medication-container">

                <h3>Add all your medications</h3>
                {previewMedications}
                {AutocompleteMedication({
                    medications: medications,
                    optionList: optionList,
                    handleSelectedValue: handleSelectedValue,
                    handleChange: handleChange,
                    removeMedicationForm: removeMedicationForm,
                    checkboxes: checkboxes,
                    setCheckboxes: setCheckboxes,
                    handleNumberChange
                })}
                <div className="add-medication-button-container">
                    <button onClick={addMedicationForm}>Add Medication</button>
                </div>
            </div>


            <div className="next-button-container" style={{ display: 'flex' }}>
                <p style={{ marginRight: '3vw' }}>When your finished press</p>
                <button>Next</button>
            </div>

        </>
    )
}

export default AddMedication;