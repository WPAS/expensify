import { createStore, combineReducers } from 'redux';
import uuid from 'uuid';

//action generators

const addExpense = (
  { description = '', note = '', amount = 0, createdAt = 0 } = {}
) => ({
  type: 'ADD_EXPENSE',
  expense: {
    id: uuid(),
    description,
    note,
    amount,
    createdAt
  }
});

const removeExpense = ({ id } = {}) => ({
  type: 'REMOVE_EXPENSE',
  id
});

const editExpense = (id, updates) => ({
  type: 'EDIT_EXPENSE',
  id,
  updates
})

const setTextFilter = (text = '') => ({
  type: 'SET_TEXT_FILTER',
  text
});

const sortByAmount = () => ({
  type: 'SET_AMOUNT_FILTER'
});

const sortByDate = () => ({
  type: 'SET_DATE_FILTER'
});

const setStartDate = (date = null) => ({
  type: 'SET_START_DATE',
  date
});

const setEndDate = (date = null) => ({
  type: 'SET_END_DATE',
  date
});

//reducers

const expensesReducerDefaultState = [];
const filtersReducerDefaultState = {
  text: '',
  sortBy: 'amount', //date or amount
  startDate: null,
  endDate: null
};

const expensesReducer = (state = expensesReducerDefaultState, action) => {
  switch(action.type) {
    case 'ADD_EXPENSE':
      return [...state, action.expense];  //es5 version state.concat.(action.expense)
    case 'REMOVE_EXPENSE':
      return state.filter((expense) => expense.id !== action.id);
    case 'EDIT_EXPENSE':
      return state.map((expense) => {
        if (expense.id === action.id) {
          return {...expense, ...action.updates}
        } else {
          return expense;
        }
      })
    default:
     return state;
  }
};

const filtersReducer = (state = filtersReducerDefaultState, action) => {
  switch(action.type) {
    case 'SET_TEXT_FILTER':
      return { ...state, text: action.text };
    case 'SET_AMOUNT_FILTER':
      return { ...state, sortBy: 'amount' };
    case 'SET_DATE_FILTER':
      return { ...state, sortBy: 'date' };
    case 'SET_START_DATE':
      return { ...state, startDate: action.date };
    case 'SET_END_DATE':
      return { ...state, endDate: action.date };
    default:
      return state;
  }
};

//get visible expenses

const getVisibleExpenses = (expenses, { text, sortBy, startDate, endDate }) => {
  return expenses.filter((expense) => {
    const startDateMatch = typeof startDate !== 'number' || expense.createdAt >= startDate;
    const endDateMatch = typeof endDate !== 'number' || expense.createdAt <= endDate;
    const textMatch = expense.description.toLowerCase().includes(text.toLowerCase());

    return startDateMatch && endDateMatch && textMatch;
  }).sort((a, b) => {
    if (sortBy === 'date') {
      return a.createdAt < b.createdAt ? 1 : -1;
    } else if (sortBy === 'amount') {
      return a.amount < b.amount ? 1 : -1;
    }
  });
}


//Store creation

const store = createStore(
  combineReducers({
    expenses: expensesReducer,
    filters: filtersReducer
  })
);

store.subscribe(() => {
  const state = store.getState();
  const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
  console.log(visibleExpenses);
})

const expenseOne = store.dispatch(addExpense({description: 'rent', amount: 100000, createdAt: 1300 }));
const expenseTwo = store.dispatch(addExpense({description: 'subscription', note: 'one month', amount: 1500, createdAt: 150 }));
const expenseThree = store.dispatch(addExpense({description: 'grocery', amount: 4500, createdAt: 450 }));
//store.dispatch(removeExpense({id: expenseOne.expense.id}));

store.dispatch(editExpense(
  expenseTwo.expense.id, {
    amount: 5000,
    note: '4 months with bonus'
  }
));

store.dispatch(setTextFilter(''));
//store.dispatch(setTextFilter(''));

store.dispatch(sortByAmount());
store.dispatch(sortByDate());

store.dispatch(setStartDate(125));
//store.dispatch(setStartDate());

store.dispatch(setEndDate(1250));
//store.dispatch(setEndDate());

const demoState = {
  expenses: [
    {
      id: 'uwhgfjsadg',
      description: 'January Rent',
      note: 'blablabla',
      amount: 54500,
      createAt: 0
    }
  ],
  filters: {
    text: 'rent',
    sortBy: 'amount', //date or amount
    startDate: null,
    endDate: null
  }
}
