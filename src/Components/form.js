import React, { useState } from "react";
import { v4 as uuidv4 } from 'uuid';

const Form = ({ onSubmit }) => {
    let [date, setDate] = useState('');
    const handleDateInput = (e) => {
        setDate(() => e.target.value);
    };

    let [steps, setSteps] = useState('');
    const handleStepsInput = (e) => {
        setSteps(() => e.target.value);
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();
        if (date) {
            onSubmit ({
                id: uuidv4(),
                date: date,
                steps: steps || 0
            });
        }
        setDate('');
        setSteps('');
    };
    
    return (
        <form onSubmit={handleFormSubmit}>
            <input type="date" value={date} onChange={handleDateInput}></input>
            <input type="number" value={steps} onChange={handleStepsInput}></input>
            <input type="submit" value="OK"></input>
        </form>
    );
}

export default Form;