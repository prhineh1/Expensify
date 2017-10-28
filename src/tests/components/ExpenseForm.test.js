import React from 'react';
import { shallow } from 'enzyme';
import moment from 'moment';
import ExpenseForm from '../../components/ExpenseForm';
import Expenses from '../fixtures/expenses';
import budget from '../fixtures/budgets';

let budgets;

beforeEach(() => {
    budgets = [budget];
});

test('should render ExpenseForm', () => {
    const wrapper = shallow(<ExpenseForm budgets={budgets} />);
    expect(wrapper).toMatchSnapshot();
});

test('should render ExpenseForm with an expense', () => {
    const wrapper = shallow(<ExpenseForm budgets={budgets} expense={Expenses[2]} />);
    expect(wrapper).toMatchSnapshot();
});

test('should render error for invalid form submission', () => {
    const wrapper = shallow(<ExpenseForm budgets={budgets} />);
    expect(wrapper).toMatchSnapshot();    
    wrapper.find('form').simulate('submit', {
        preventDefault: () => { }
    });
    expect(wrapper.state('error').length).toBeGreaterThan(0);
    expect(wrapper).toMatchSnapshot();
});

test('should set description on input change', () => {
    const value = 'New description';
    const wrapper = shallow(<ExpenseForm budgets={budgets} />);
    wrapper.find('input').at(0).simulate('change', {
        target: { value }
    });
    expect(wrapper.state('description')).toBe(value);
});

test('should set note on text area change', () => {
    const value = 'New note';
    const wrapper = shallow(<ExpenseForm budgets={budgets} />);
    wrapper.find('textarea').simulate('change', {
        target: { value }
    });
    expect(wrapper.state('note')).toBe(value);
});

test('should set amount if valid input', () => {
    const value = '45.32';
    const wrapper = shallow(<ExpenseForm budgets={budgets} />);
    wrapper.find('input').at(1).simulate('change', {
        target: { value }
    });
    expect(wrapper.state('amount')).toBe(value);
});

test('should not set amount if invalid input', () => {
    const value = '45.321';
    const wrapper = shallow(<ExpenseForm budgets={budgets} />);
    wrapper.find('input').at(1).simulate('change', {
        target: { value }
    });
    expect(wrapper.state('amount')).toBe('');
});

test('should set BudgetId on select value change', () => {
    const value = 'a;skjdflaj3';
    const wrapper = shallow(<ExpenseForm budgets={budgets} />);
    wrapper.find('select').simulate('change', {
        target: { value }
    });
    expect(wrapper.state('budgetId')).toBe(value);
});

test('should call onSubmit prop for valid form submission', () => {
    const onSubmitSpy = jest.fn();
    const wrapper = shallow(<ExpenseForm budgets={budgets} expense={Expenses[0]} onSubmit={onSubmitSpy} />);
    wrapper.find('form').simulate('submit', {
        preventDefault: () => { }
    });
    expect(wrapper.state('error')).toBe('');
    expect(onSubmitSpy).toHaveBeenLastCalledWith({
        description: Expenses[0].description,
        amount: Expenses[0].amount,
        note: Expenses[0].note,
        createdAt: Expenses[0].createdAt,
        budgetId: Expenses[0].budgetId
    });
});

test('should set new date on date change', () => {
    const now = moment();
    const wrapper = shallow(<ExpenseForm budgets={budgets} />);
    wrapper.find('SingleDatePicker').prop('onDateChange')(now);
    expect(wrapper.state('createdAt')).toEqual(now);
});

test('should set calendar focus on change', () => {
    const focused = true;
    const wrapper = shallow(<ExpenseForm budgets={budgets} />);
    wrapper.find('SingleDatePicker').prop('onFocusChange')({ focused });
    expect(wrapper.state('calendarFocused')).toBe(focused);
});