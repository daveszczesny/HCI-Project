

/**
 * Function to fetch api rxterms drug list based on parameters
 * Returns a json
 * 
 * @param {String}
 * @returns 
 */
function FetchMedication({drugName}) {
    return fetch(`https://clinicaltables.nlm.nih.gov/api/rxterms/v3/search?terms=${drugName}&ef=STRENGTHS_AND_FORMS`)
        .then(response => response.json())
        
}

export default FetchMedication;