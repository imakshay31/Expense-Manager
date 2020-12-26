import { v1 as uuidv1 } from 'uuid';

// Add Expense
export const addExpense = (
    { 
        description = '',
        note = '',
        amount = 0,
        createdAt = 0
    } = {}
) => ( {
    type : 'ADD_EXPENSE',
    expense : {
        id: uuidv1(),
        description,
        note,
        amount,
        createdAt
    }
});

// Remove Expense
export const removeExpense = ({id} = {}) => ( {
    type : 'REMOVE_EXPENSE',
    id
});

// EDIT_EXPENSE
export const editExpense = (id,updates) => ( {
    type: 'EDIT_EXPENSE',
    id,
    updates
});