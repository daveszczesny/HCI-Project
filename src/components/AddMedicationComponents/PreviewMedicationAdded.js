
import './PreviewMedicationAdded.css'

const PreviewMedicationAdded = ({ medication, values }) => {

    const sum = values.reduce((acc, currentValue) => acc + currentValue, 0);

    return(
        <div className="preview-container-values">
            <p>{medication}<br /> <span style={{marginLeft: '13vw'}}>taken {sum} times a week</span></p>
        </div>
    )

}


export default PreviewMedicationAdded;