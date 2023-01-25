import { createSlice, configureStore } from '@reduxjs/toolkit'


const initialState = {
    enteredName: '',
    enteredAge: '',
    enteredDisease: '',
    enteredCountry: '',
    enteredPhone: '',
    enteredEmail: '',
    enteredPatientsData: [],
    edit: true,
    submit: false,
    editedData: [],
    patientId: ''
}

const formSlice = createSlice({
    name: 'form',
    initialState,
    reducers: {
        enterName(state, action) {
            console.log('action', action.payload);
            state.enteredName = action.payload;
        },
        enterAge(state, action) {
            state.enteredAge = action.payload;;
        },
        enterDisaese(state, action) {
            state.enteredDisease = action.payload;;
        },
        enterCountry(state, action) {
            state.enteredCountry = action.payload;;
        },
        enterPhone(state, action) {
            state.enteredPhone = action.payload;;
        },
        enterEmail(state, action) {
            state.enteredEmail = action.payload;
        },
        submit(state) {
            const intialData = {
                name: state.enteredName,
                age: state.enteredAge,
                disease: state.enteredDisease,
                country: state.enteredCountry,
                phone: state.enteredPhone,
                email: state.enteredEmail
            }
            const enteredPatientData = {
                ...intialData,
                id: Math.random().toString(),
            }

            console.log('here')
            state.enteredPatientsData = [...state.enteredPatientsData, enteredPatientData]


            // console.log('patient[]', state.enteredPatientsData);
            state.enteredName = '';
            state.enteredAge = '';
            state.enteredDisease = '';
            state.enteredCountry = '';
            state.enteredEmail = '';
            state.enteredPhone = '';

        },
        delete(state, action) {
            let filterOnStoredData = state.enteredPatientsData.filter(element => element.id !== action.payload.id);
            state.enteredPatientsData = [...filterOnStoredData];
        },
        edit(state, action) {
            state.patientId = action.payload.patientData.id;
            state.enteredName = action.payload.patientData.name;
            state.enteredAge = action.payload.patientData.age;
            state.enteredDisease = action.payload.patientData.disease;
            state.enteredCountry = action.payload.patientData.country;
            state.enteredEmail = action.payload.patientData.email;
            state.enteredPhone = action.payload.patientData.phone;

            state.submit = !state.submit;
            console.log('submitState', state.submit);
            state.edit = !state.edit;
            console.log('editState', state.edit);
            // state.enteredPatientsData
        },
        editedData(state, action) {
            const editedPatient = {
                name: state.enteredName,
                age: state.enteredAge,
                disease: state.enteredDisease,
                country: state.enteredCountry,
                phone: state.enteredPhone,
                email: state.enteredEmail
            }
            const editedPatientData = {
                ...editedPatient,
                id: Math.random().toString()
            }
            let updatedList = state.enteredPatientsData.map((val) => { //apply map on the data that we get from the local stroage and compare the id of each object that we get to the id of the object that navigate through patientRecord

                if (val.id === action.payload.id) return { ...editedPatientData } //if id matches then return the edited object on the same id and after that returne the map array
                return val

            })
            console.log('updatedPatientData[]', updatedList);
            state.editedData = [...updatedList];
            state.enteredPatientsData = [...state.editedData];
            console.log('patientData[]', state.enteredPatientsData);
            state.submit = !state.submit;
            console.log('submitState', state.submit);
            state.edit = !state.edit;
            console.log('editState', state.edit);
            state.enteredName = '';
            state.enteredAge = '';
            state.enteredDisease = '';
            state.enteredCountry = '';
            state.enteredEmail = '';
            state.enteredPhone = '';
        }
    }
});

const store = configureStore({
    reducer: { form: formSlice.reducer }
})

export const formActions = formSlice.actions;
export default store;