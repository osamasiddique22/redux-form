import React from "react";
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from "react-router-dom";
import { formActions } from "../../redux/store";
import './Form.css'


const Form = () => {
    const nav = useNavigate()
    // const history = useHistory()
    const dispatch = useDispatch();
    const enteredName = useSelector((state) => state.form.enteredName);
    const enteredAge = useSelector((state) => state.form.enteredAge);
    const enteredDisease = useSelector((state) => state.form.enteredDisease);
    const enteredCountry = useSelector((state) => state.form.enteredCountry);
    const enteredPhone = useSelector((state) => state.form.enteredPhone);
    const enteredEmail = useSelector((state) => state.form.enteredEmail);
    const submit = useSelector((state) => state.form.submit);
    const edit = useSelector((state) => state.form.edit);
    const patientId = useSelector((state) => state.form.patientId);
    // console.log("patientData []ksskskk", patientData);
    const enteredNameHandler = (event) => {
        dispatch(formActions.enterName(event))
    }

    const enteredAgeHandler = (event) => {
        dispatch(formActions.enterAge(event))
    }

    const enteredDiseaseHandler = (event) => {
        dispatch(formActions.enterDisaese(event))
    }
    const enteredCountryHandler = (event) => {
        dispatch(formActions.enterCountry(event))
    }
    const enteredPhoneHandler = (event) => {
        dispatch(formActions.enterPhone(event))
    }
    const enteredEmailHandler = (event) => {
        dispatch(formActions.enterEmail(event))
    }


    const submitHandler = () => {
        dispatch(formActions.submit());
        // history.push('/PatientList')
        nav('/PatientList')
        // console.log('Patient []', patientData);
    }
    const editHandler = (id) => {
        dispatch(formActions.editedData({ id: id }))
        nav('/PatientList');
    }


    return (
        <div>
            <h1 className="h1">Patient Data</h1>
            <div className="flex-container">
                <div>
                    <label>Enter Name</label>
                    <input className="input" type="text" value={enteredName} onChange={(event) => enteredNameHandler(event.target.value)} />
                </div>
                <div>
                    <label>Enter Age</label>
                    <input className="input" type="number" value={enteredAge} onChange={(event) => enteredAgeHandler(event.target.value)} />
                </div>
                <div>
                    <label>Enter Disease</label>
                    <input className="input" type="text" value={enteredDisease} onChange={(event) => enteredDiseaseHandler(event.target.value)} />
                </div>
                <div>
                    <label htmlFor="country">Country</label>
                    <input className="input" type="text" value={enteredCountry} onChange={(event) => enteredCountryHandler(event.target.value)} />
                </div>
                <div>
                    <label htmlFor="cellNumber">Cell Number</label>
                    <input className="input" type="tel" value={enteredPhone} onChange={(event) => enteredPhoneHandler(event.target.value)} />
                </div>
                <div>
                    <label htmlFor="email">E-mail</label>
                    <input className="input" type="email" value={enteredEmail} onChange={(event) => enteredEmailHandler(event.target.value)} />
                </div>
            </div>
            <div className="button-flex">
                {submit || < button className="button" onClick={() => { submitHandler() }}> Submit</button>}
                {
                    edit || <button className="button" onClick={() => editHandler(patientId)}>Edit</button>
                }
            </div>
        </div >
    );
}

export default Form;