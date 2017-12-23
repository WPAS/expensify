export const setTextFilter = (text = '') => ({
  type: 'SET_TEXT_FILTER',
  text
});

export const sortByAmount = () => ({
  type: 'SET_AMOUNT_FILTER'
});

export const sortByDate = () => ({
  type: 'SET_DATE_FILTER'
});

export const setStartDate = (date = null) => ({
  type: 'SET_START_DATE',
  date
});

export const setEndDate = (date = null) => ({
  type: 'SET_END_DATE',
  date
});
