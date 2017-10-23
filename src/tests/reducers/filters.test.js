import filtersReducer from '../../reducers/filters';
import moment from 'moment';

test('should setup default filter values', () => {
    const state = filtersReducer(undefined, { type: '@@INIT' });
    expect(state).toEqual({
        text: '',
        sortBy: 'date',
        startDate: moment().startOf('month'),
        endDate: moment().endOf('month'),
        pagination: 5,
        expensesPartitionIndex: 0
    });
});

test('should set sortBy to amount', () => {
    const state = filtersReducer(undefined, { type: 'SORT_BY_AMOUNT' });
    expect(state.sortBy).toBe('amount');
});

test('should set sortBy to date', () => {
    const currentState = {
        text: '',
        sortBy: 'amount',
        startDate: undefined,
        endDate: undefined
    };
    const action = { type: 'SORT_BY_DATE' };
    const state = filtersReducer(currentState, action);
    expect(state.sortBy).toBe('date');
});

test('should set text filter', () => {
    const state = filtersReducer(undefined, { type: 'SET_TEXT_FILTER', text: 'test'});
    expect(state.text).toBe('test');
});

test('should set startDate filter', () => {
    const date = moment();
    const action = {
        type: 'SET_START_DATE',
        date
    };
    const state = filtersReducer(undefined, action);
    expect(state.startDate).toEqual(date);
});

test('should set endDate filter', () => {
    const date = moment();
    const action = {
        type: 'SET_END_DATE',
        date
    };
    const state = filtersReducer(undefined, action);
    expect(state.endDate).toEqual(date);
});

test('should set pagination filter', () => {
    const state = filtersReducer(undefined, { type: 'SET_PAGINATION', pagination: 10});
    expect(state.pagination).toBe(10);
});

test('should set expenses partition filter', () => {
    const state = filtersReducer(undefined, { type: 'SET_PARTITION_INDEX', index: 1});
    expect(state.expensesPartitionIndex).toBe(1);
});

