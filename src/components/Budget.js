import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const { dispatch, budget, expenses, currency } = useContext(AppContext);
    const [newBudget, setNewBudget] = useState(budget);
    const handleBudgetChange = (event) => {
        const budgetInp = event.target.value;
        const totalExpenses = expenses.reduce((total, item) => {
            return (total += item.cost);
        }, 0);
    
        if(budgetInp < totalExpenses) {
            alert(' You cannot reduce budget below spending')
        } else if( budgetInp > 20000) {
            alert(' Bidget cannot be more that 20000')
        } else {
            console.log('event.',)
            setNewBudget(budgetInp);
            const actionObj = {
                type : 'SET_BUDGET',
                payload : budgetInp
            }
            dispatch(actionObj);
            console.log(budget);
        }
    }
    return (
<div className='alert alert-secondary'>
    <span>Budget:{currency}<input type="number" style={{width: '50%'}} step="10" value={newBudget} onChange={handleBudgetChange}></input>
    </span>
</div>
    );
};
export default Budget;