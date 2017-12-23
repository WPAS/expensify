import filtersReducer from '../../reducers/filters';
import moment from 'moment';

test('should setup default filter values', () => {
    const state = filtersReducer(undefined, {type: '@@INIT' });
    expect(state).toEqual({
        text: '',
        sortBy: 'date',
        startDate: moment().startOf('month'),
        endDate: moment().endOf('month')
    })
});

test('should set sortBy to amount', () => {
    const state = filtersReducer(undefined, { type: 'SET_AMOUNT_FILTER' });
    expect(state.sortBy).toEqual('amount');
});

test('should set sortBy to date', () => {
    const currentState = {
        text: '',
        sortBy: 'amount',
        startDate: moment().startOf('month'),
        endDate: moment().endOf('month')
    };
    const action = { type: 'SET_DATE_FILTER' };
    const state = filtersReducer(currentState, action)

    expect(state.sortBy).toBe('date');
});

test('should set text filter', () => {
    const action = { type: 'SET_TEXT_FILTER', text: 'rent' };
    const state = filtersReducer(undefined, action);

    expect(state.text).toBe('rent');
});

test('should set start date filter', () => {
    const action = { type: 'SET_START_DATE', date: moment().startOf('month') };
    const state = filtersReducer(undefined, action);

    expect(state.startDate).toEqual(moment().startOf('month'));
});

test('should set end date filter', () => {
    const action = { type: 'SET_END_DATE', date: moment().endOf('month') };
    const state = filtersReducer(undefined, action);

    expect(state.endDate).toEqual( moment().endOf('month'));
});