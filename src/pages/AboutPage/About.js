function About() {
    return (
        <>
            <h1>About page</h1>

            <div style={{ display: 'flex', justifyContent: 'center', marginTop: '8vh' }}>
                <p style={{ textAlign: 'center', margin: '0 auto', maxWidth: '600px' }}>
                    MediGuardian is a prototype web application developed for a Human Computer Interaction project. MediGuardian is an application designed to help people track their medications. Medication non-adherence is one of the biggest reasons for treatment failure, and this application was designed to fix it. It allows users to enter their medication, which then displays and prompts users to take them whenever they are due.
                </p>
            </div>
        </>
    )
}

export default About;
