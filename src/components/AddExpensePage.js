import React from 'react';
import ExpenseForm from './ExpenseForm';
import {connect} from 'react-redux';
import {addExpense} from '../actions/expenses';

export class AddExpensePage extends React.Component {
    onSubmit = (expense) => {
        //props.dispatch(addExpense(expense));
        this.props.addExpense(expense);
        this.props.history.push('/');
    };
    render(){
        return (
            <div>
                <h1>Add Expense</h1>
                <ExpenseForm 
                    onSubmit = {this.onSubmit}   
                /> 
            </div>
        );
    }
}

const mapsDispatchToProps = (dispatch) => ({
    addExpense: (expense) => dispatch(addExpense(expense))
});
        

export default connect(undefined, mapsDispatchToProps)(AddExpensePage);