import {createStore, combineReducers} from 'redux';
import { v1 as uuidv1 } from 'uuid';

// Add Expense
const addExpense = (
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
const removeExpense = ({id} = {}) => ( {
    type : 'REMOVE_EXPENSE',
    id
});

// EDIT_EXPENSE
const editExpense = (id,updates) => ( {
    type: 'EDIT_EXPENSE',
    id,
    updates
});

// SET_TEXT_FILTER
const setTextFilter = ( text = "") => ( {
    type : 'SET_TEXT_FILTER',
    text
});

// SORT_BY_DATE
const sortByDate = () => ( {
    type : 'SORT_BY_DATE'
});

// SORT_BY_AMOUNT
const sortByAmount = () => ( {
    type : 'SORT_BY_AMOUNT'
});

//SET_START_DATE
const setStartDate = (startDate) => ( {
    type : 'SET_START_DATE',
    startDate
});

// SET_END_DATE
const setEndDate = (endDate) => ( {
    type : 'SET_END_DATE',
    endDate
});

const expensesReducerDefaultState = [];
// Expenses Reducer
const expensesReducer = (state = expensesReducerDefaultState, action) => {
    switch(action.type) {
        case 'ADD_EXPENSE' :
            return [
                ...state,
                action.expense
            ];
        case 'REMOVE_EXPENSE' :
            return state.filter( ({id}) => action.id !== id);    
        case 'EDIT_EXPENSE' :
            return state.map( (expense) => {
                if(expense.id = action.id) {
                    return {
                        ...expense,
                        ...action.updates
                    };
                }  
                else
                    return expense;        
            })
        default:
            return state;
    }
};

const filtersReducerDefaultState = {
    text : "",
    sortBy : 'date',
    startDate : undefined,
    endDate : undefined
}

// Filters Reducer
const filtersReducer = (state = filtersReducerDefaultState, action) => {
    switch(action.type){
        case 'SET_TEXT_FILTER':
            return {
                ...state,
                text : action.text
            };
        case 'SORT_BY_DATE'   :
            return {
                ...state,
                sortBy : 'date'
            };
        case 'SORT_BY_AMOUNT' :
            return {
                ...state,
                sortBy : 'amount'
            };
        case 'SET_START_DATE'  :
            return {
                ...state,
                startDate : action.startDate
            };
        case 'SET_END_DATE'  :
            return {
                ...state,
                endDate : action.endDate
            };
        default:
            return state;
    }
};


// Get visible Expenses 
const getVisibleExpenses = (expenses, {text ,sortBy, startDate, endDate} ) => {
    return expenses.filter( (expense) => {
        const startDateMatch = typeof startDate !== 'number' || expense.createdAt >= startDate;
        const endDateMatch   = typeof endDate !== 'number' || expense.createdAt <= endDate;
        const textMatch = expense.description.toLowerCase().includes(text.toLowerCase());

        return startDateMatch && endDateMatch && textMatch;
    }).sort((a,b) => {
        if(sortBy === 'date'){
            return a.createdAt < b.createdAt ? 1 : -1;
        }
        else if(sortBy === 'amount' ){
            return a.amount < b.amount ? 1 : -1;
        }
    });
}

// Store Creation
const store = createStore(
    combineReducers( {
        expenses : expensesReducer,
        filters : filtersReducer
    })
);

store.subscribe( () => {
    const state = store.getState();
    const visibleExpenses = getVisibleExpenses(state.expenses , state.filters);
    console.log(visibleExpenses); 
});

const expenseOne = store.dispatch(addExpense({ description : 'Rent', amount: 100, createdAt : -1000}));
const expenseTwo = store.dispatch(addExpense({ description : 'Coffee', amount: 50, createdAt : -100 }));

//store.dispatch(removeExpense( {id : expenseOne.expense.id}));
//store.dispatch(editExpense(expenseTwo.expense.id, { amount : 26}));


//store.dispatch(setTextFilter('rent'));
//store.dispatch(setTextFilter());

store.dispatch(sortByAmount());
//store.dispatch(sortByDate());

//store.dispatch(setStartDate(0));
// store.dispatch(setStartDate());
//store.dispatch(setEndDate(1000));
// store.dispatch(setEndDate()); 


const demoState = {
    expenses : [ {
        id : 'dsa',
        description: 'Data Structure ',
        note: 'This was the final payment for that address',
        amount : 54450,
        createdAt: 0
    }],
    filters : {
        text : 'rent',
        sortBy : 'amount', // Date or amount
        startDate : undefined,
        endDate : undefined
    }
};
