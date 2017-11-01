import React from 'react';
import { shallow } from 'enzyme';
import { AddBudgetPage } from '../../components/AddBudgetPage';
import budget from '../fixtures/budgets';

let wrapper, addBudget, history, uid;

beforeEach(() => {
  uid = 'abc123';
  addBudget = jest.fn();
  history =  { push: jest.fn() };
  wrapper = shallow(<AddBudgetPage addBudget={addBudget} history={history} uid={uid} />);
});

test('should render AddBudgetPage', () => {
  expect(wrapper).toMatchSnapshot();
});

test('should handle addBudget', () => {
  wrapper.find('BudgetForm').prop('onSubmit')(budget);
  expect(history.push).toHaveBeenLastCalledWith('/dashboard/budgets');
  expect(addBudget).toHaveBeenLastCalledWith(budget, uid);
});