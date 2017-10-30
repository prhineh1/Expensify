import React from 'react';
import { shallow } from 'enzyme';
import BudgetListItem from '../../components/BudgetListItem';
import expenses from '../fixtures/expenses';
import budget from '../fixtures/budgets';

test('should render BudgetListItem with an expense', () => {
  const wrapper = shallow(<BudgetListItem budget={budget} expenses={[expenses[1]]} />);
  expect(wrapper).toMatchSnapshot();
});

test('should render BudgetListItem without an expense', () => {
  const wrapper = shallow(<BudgetListItem budget={budget} expenses={[]} />);
  expect(wrapper).toMatchSnapshot();
});