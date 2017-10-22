import React from 'react';
import { shallow } from 'enzyme';
import { EditExpensePage } from '../../components/EditExpensePage';
import expenses from '../fixtures/expenses';

let editExpense, history, wrapper, uid;

beforeEach(() => {
     uid = 'abc123';
     editExpense = jest.fn();
     history =  { push: jest.fn() };
     wrapper = shallow(<EditExpensePage   
        editExpense={editExpense} 
        history={history} 
        expense={expenses[1]}
        uid={uid} />);
});

test('should render EditExpensePage', () => {
    expect(wrapper).toMatchSnapshot();
});

test('should handle editExpense', () => {
    wrapper.find('ExpenseForm').prop('onSubmit')(expenses[1]);
    expect(history.push).toHaveBeenLastCalledWith('/');
    expect(editExpense).toHaveBeenLastCalledWith(expenses[1].id, expenses[1], uid);
});

test('should handle toggleModal', () => {
    wrapper.find('button').simulate('click');
    expect(wrapper.state('isOpen')).toBe(true);
});