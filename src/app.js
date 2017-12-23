import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import 'normalize.css/normalize.css';
import './styles/styles.scss';
import 'react-dates/lib/css/_datepicker.css';

import configureStore from './store/configureStore';
import AppRouter from './routers/AppRouter';
import { addExpense } from './actions/expenses';
import getVisibleExpenses from './selectors/expenses';

const store = configureStore();

store.dispatch(addExpense({ description: 'water bill', amount: 5000, createdAt: 100}));
store.dispatch(addExpense({ description: 'gas bill', amount: 2440, createdAt: 200}));
store.dispatch(addExpense({ description: 'rent', amount: 112440, createdAt: 50}));

const state = store.getState();

const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

ReactDOM.render(jsx, document.getElementById('app'));
