import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const { budget, currency, dispatch } = useContext(AppContext);
    const [newBudget, setNewBudget] = useState(budget);

    const handleBudgetChange = (event) => {
        const value = parseFloat(event.target.value);
        if (!isNaN(value)) {
            if (value <= 20000) {
                setNewBudget(value);
                dispatch({ type: 'SET_BUDGET', payload: value });
            } else {
                alert("Budget cannot exceed £20000.");
            }
        } else {
            alert("Please enter a valid number for budget.");
        }
    }

    return (
        <div className='alert alert-secondary'>
            <span>Budget: {currency} {budget}</span>
            <input type="number" step="10" value={newBudget} onChange={handleBudgetChange}></input>
        </div>
    );
};

export default Budget;
