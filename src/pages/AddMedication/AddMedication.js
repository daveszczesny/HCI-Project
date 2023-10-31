
import { useEffect, useState } from "react"
import FetchMedication from "../../script/fetch_data_url";
import './AddMedication.css'

import AutocompleteMedication from "../../components/AddMedicationComponents/AutocompleteMedication";
import PreviewMedicationAdded from "../../components/AddMedicationComponents/PreviewMedicationAdded";
import FirestoreSetup from "../../script/firestore_doc_setup";
import { useNavigate } from "react-router-dom";

const AddMedication = () => {


    const navigate = useNavigate();

    const [drugName, setDrugName] = useState("");
    const [optionList, setOptionList] = useState([""]);
    const [medications, setMedications] = useState([null]); // Store selected medications for each form
    const [checkboxes, setCheckboxes] = useState([false, false, false, false, false, false, false]);
    const [checboxValues, setCheckboxValues] = useState([0, 0, 0, 0, 0, 0, 0]); // Store amount to take per given day

    const [previewMedications, setPreviewMedications] = useState([]);

    const [dataMedication, setDataMedication] = useState([]);

    const [email, setEmail] = useState(null);

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


    useEffect(() => {

        const loggedInUserEmail = localStorage.getItem("userEmail");
        
        setEmail(loggedInUserEmail);

    }, [email]);

    const addMedicationForm = () => {
        if (medications.length <= 0) {
            setMedications([...medications, null]);
            return;
        }

        const sum = checboxValues.reduce((acc, currentValue) => acc + currentValue + 0);
        if(sum <= 0){
            alert("Cannot add a medication you don't take");
            return;
        }

        const medData = {
            name: medications[0],
            values: checboxValues
        }

        setDataMedication([...dataMedication, medData]);

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


    const UploadMedication = () => {
        console.log("Uploading medication to cloud");

        if (dataMedication.length <= 0) {
            console.log("No medications added");
            return;
        }


        for(const med of dataMedication){
            const sum = med.values.reduce((acc, currentValue) => acc + currentValue, 0);

            if(sum <= 0){
                alert("One of your medications is empty; cannot add an empty medication");
                return;
            }
        }
        FirestoreSetup({
            email: email,
            medication: dataMedication
        }).then(() => {
            navigate("/home");
        })

    }

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
                <p style={{ marginRight: '3vw' }}>When you're finished press</p>
                <button onClick={UploadMedication}>Next</button>
            </div>

        </>
    )
}

export default AddMedication;