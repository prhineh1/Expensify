import React from 'react';
import { shallow } from 'enzyme';
import { EditBudgetPage } from '../../components/EditBudgetPage';
import budget from '../fixtures/budgets';

let wrapper, editBudget, history, uid, removeBudget;

beforeEach(() => {
  editBudget = jest.fn();
  history = { push: jest.fn() };
  uid = 'abc123';
  removeBudget = jest.fn();
  wrapper = 
    shallow(<EditBudgetPage 
      editBudget={editBudget}
      history={history}
      uid={uid}u
      removeBudget={removeBudget}
      budget={budget}
    />)
});

test('should render editBudgetPage', () => {
  expect(wrapper).toMatchSnapshot();
});

test('should handle toggleModal', () => {
  wrapper.find('button').simulate('click');
  expect(wrapper.state('isOpen')).toBe(true);
});

test('should handle editBudget', () => {
  wrapper.find('BudgetForm').prop('onSubmit')(budget);
  expect(history.push).toHaveBeenLastCalledWith('/dashboard/budgets');
  expect(editBudget).toHaveBeenLastCalledWith(budget.id, budget, uid);
});
