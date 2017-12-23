import expensesReducer from '../../reducers/expenses';
import expenses from '../fixtures/expenses';


const expense = { 
    id: expect.any(String),
    description: 'rent',
    note: '',
    amount: 20000,
    createdAt: 1111
}

test('should set default state', () => {
    const state = expensesReducer(undefined, { type: '@@INIT' });
    expect(state).toEqual([]);
});

test('should add expense', () => {
    const state = expensesReducer(expenses, { type: 'ADD_EXPENSE', expense });
    expect(state).toEqual([...expenses, expense]);
});

test('should remove expense by id', () => {
    const action = {
        type: 'REMOVE_EXPENSE',
        id: expenses[1].id
    }

    const state = expensesReducer(expenses, action);
    expect(state).toEqual([expenses[0], expenses[2]]);
});

test('shouldn\'t change state when there is no expenses with passed id', () => {
    const action = {
        type: 'REMOVE_EXPENSE',
        id: 234
    }

    const state = expensesReducer(expenses, action);
    expect(state).toEqual(expenses);
});

test('should edit expenses by id', () => {
    const action = { 
        type: 'EDIT_EXPENSE',
        id: expenses[0].id,
        updates: { 
            description: 'rent',
            amount: 20000,
        }
    };

    const updatedExpense = {
        id: expenses[0].id,
        description: 'rent',
        note: '',
        amount: 20000,
        createdAt: 0
    }

    const state = expensesReducer(expenses, action);
    expect(state).toEqual([updatedExpense, expenses[1], expenses[2]]);    
    //expect(state[1].amount).toBe(amount)      //thats from AM solution, when he changed just amount using variable amount
});

test('shouldn\'t edit when there is no expense with passed id', () => {
    const action = {
        type: 'EDIT_EXPENSE',
        id: 234,
        updates: {
            note: 'I shall not be in the state!'
        }
    }

    const state = expensesReducer(expenses, action);
    expect(state).toEqual(expenses);
});