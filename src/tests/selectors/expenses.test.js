import selectExpenses from '../../selectors/expenses';
import moment from 'moment';
import expenses from '../fixtures/expenses';


test('should filter by pagination and partition index', () => {
    const filters = {
        text: '',
        sortBy: 'date',
        startDate: undefined,
        endDate: undefined,
        pagination: 2,
        expensesPartitionIndex: 1
    };
    const result = selectExpenses(expenses, filters);
    const returnValue = [
        [ [expenses[2], expenses[0]], [expenses[1]] ],
        [ expenses[1] ]
    ];
    expect(result).toEqual(returnValue);
});

test('should filter by text value', () => {
    const filters = {
        text: 'e',
        sortBy: 'date',
        startDate: undefined,
        endDate: undefined,
        pagination: 5,
        expensesPartitionIndex: 0
    };
    const result = selectExpenses(expenses, filters);
    const returnValue = [
        [ [expenses[2], expenses[1]] ],
        [ expenses[2], expenses[1] ]
    ];
    expect(result).toEqual(returnValue);
});

test('should filter by start date', () => {
    const filters = {
        text: '',
        sortBy: 'date',
        startDate: moment(0),
        endDate: undefined,
        pagination: 5,
        expensesPartitionIndex: 0
    };
    const result = selectExpenses(expenses, filters);
    const returnValue = [
        [ [expenses[2], expenses[0]] ],
        [ expenses[2], expenses[0] ]
    ];
    expect(result).toEqual(returnValue);
});

test('should filter by end date', () => {
    const filters = {
        text: '',
        sortBy: 'date',
        startDate: undefined,
        endDate: moment(0).add(2, 'days'),
        pagination: 5,
        expensesPartitionIndex: 0
    };
    const result = selectExpenses(expenses, filters);
    const returnValue = [
        [ [expenses[0], expenses[1]] ],
        [ expenses[0], expenses[1] ]
    ];
    expect(result).toEqual(returnValue);
});

test('should sort by date', () => {
    const filters = {
        text: '',
        sortBy: 'date',
        startDate: undefined,
        endDate: undefined,
        pagination: 5,
        expensesPartitionIndex: 0
    };
    const result = selectExpenses(expenses, filters);
    const returnValue = [
        [ [expenses[2], expenses[0], expenses[1]] ],
        [ expenses[2], expenses[0], expenses[1] ]
    ];
    expect(result).toEqual(returnValue);
});

test('should sort by amount', () => {
    const filters = {
        text: '',
        sortBy: 'amount',
        startDate: undefined,
        endDate: undefined,
        pagination: 5,
        expensesPartitionIndex: 0
    };
    const result = selectExpenses(expenses, filters);
    const returnValue = [
        [ [expenses[1], expenses[2], expenses[0]] ],
        [ expenses[1], expenses[2], expenses[0] ]
    ];
    expect(result).toEqual(returnValue);
});

