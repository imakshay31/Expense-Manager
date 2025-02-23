import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import {addExpense} from './actions/expenses';
import getVisibleExpenses from './selectors/expenses';
import '../node_modules/normalize.css/normalize.css';
import './styles/styles.scss';
import 'react-dates/lib/css/_datepicker.css';
 
const store = configureStore();

const jsx = ( 
    <Provider store = {store}>
        <AppRouter />
    </Provider>
);

const appRoot = document.getElementById('app');
ReactDOM.render(jsx ,appRoot);

