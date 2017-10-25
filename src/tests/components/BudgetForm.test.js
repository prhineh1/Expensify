import React from 'react';
import { shallow } from 'enzyme';
import BudgetForm from '../../components/BudgetForm';
import budgets from '../fixtures/budgets';

test('should render BudgetForm', () => {
  const wrapper = shallow(<BudgetForm />);
  expect(wrapper).toMatchSnapshot();
});

test('should render BudgetForm with a budget', () => {
  const wrapper = shallow(<BudgetForm budget={budgets} />);
  expect(wrapper).toMatchSnapshot();
});

test('should render error for invalid form submission', () => {
  const wrapper = shallow(<BudgetForm />);
  wrapper.find('form').simulate('submit', {
    preventDefault: () => {}
  });
  expect(wrapper.state('error').length).toBeGreaterThan(0);
  expect(wrapper).toMatchSnapshot(); 
});

test('should set description on input change', () => {
  const value = 'budget description';
  const wrapper = shallow(<BudgetForm />);
  wrapper.find('input').at(0).simulate('change', {
    target: { value }
  });
  expect(wrapper.state('description')).toBe(value);  
});

test('should set amount if valid input', () => {
  const value = '45.32';
  const wrapper = shallow(<BudgetForm />);
  wrapper.find('input').at(1).simulate('change', {
      target: { value }
  });
  expect(wrapper.state('amount')).toBe(value);
});

test('should not set amount if invalid input', () => {
  const value = '00.23';
  const wrapper = shallow(<BudgetForm />);
  wrapper.find('input').at(1).simulate('change', {
      target: { value }
  });
  expect(wrapper.state('amount')).toBe('');
});

test('should handle onSubmit for valid form submission', () => {
  const onSubmit = jest.fn();
  const wrapper = shallow(<BudgetForm budget={budgets} onSubmit={onSubmit} />);
  wrapper.find('form').simulate('submit', {
      preventDefault: () => { }
  });
  expect(wrapper.state('error')).toBe('');
  expect(onSubmit).toHaveBeenLastCalledWith({
      description: budgets.description,
      amount: budgets.amount
  });
});