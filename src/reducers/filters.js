import moment from 'moment';

const filtersReducerDefaultState = {
  text: '',
  sortBy: 'date', //date or amount
  startDate: moment().startOf('month'),
  endDate: moment().endOf('month')
};

export default (state = filtersReducerDefaultState, action) => {
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
