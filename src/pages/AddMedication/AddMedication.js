
import { useEffect, useState } from "react"
import { Navigate, useNavigate } from "react-router-dom";
import FetchMedication from "../../script/fetch_data_url";
import { Autocomplete, TextField } from "@mui/material";

const AddMedication = () => {

    const [drugName, setDrugName] = useState("");
    const [optionList, setOptionList] = useState([""]);
    const [selectedValue, setSelectedValue] = useState(null);

    const [dailyDosage, setDailyDosage] = useState(null);

    const handleSelectedValue = (event, newValue) => {
        setSelectedValue(newValue);
    }

    useEffect(() => {

        async function foo(){
            return FetchMedication({
                drugName: drugName
            })
        }

        foo().then((data)=>{
            setOptionList(data[1]);
        })

    }, [drugName]);


    return (
        <>
            <Autocomplete 
                disablePortal
                id="combo-box-demo"
                options={optionList}
                value={selectedValue}
                onChange={handleSelectedValue}
                sx={{width: 300}}
                renderInput={(params) => <TextField {...params} label="Medication" />}
            />

            <p>I take this medication <input type="text" placeholder="2"/> times a day</p>


            <p>Selected value = {selectedValue}</p>

        </>
    )
}


export default AddMedication;