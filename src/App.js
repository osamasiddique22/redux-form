import React from 'react';
import Form from './screens/form/Form';
import { Route, Routes } from 'react-router-dom';
import PatientList from './screens/patientData/PatientList';
import './App.css';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Form />} />
        <Route path="/PatientList" element={<PatientList />} />
      </Routes>
    </div>
  );
}

export default App;
