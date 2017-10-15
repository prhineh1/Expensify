import expensesTotal from '../../selectors/expenses-total';
import expenses from '../fixtures/expenses';

test('should return 0 of no expesnes', () => {
    const result = expensesTotal([]);
    expect(result).toBe(0);
});

test('should correctly add up a single expense', () => {
    const result = expensesTotal([expenses[1]]);
    expect(result).toBe(10095);
});

test('should correctly add up multiple expenses', () => {
    const result = expensesTotal(expenses);
    expect(result).toBe(14790);
});