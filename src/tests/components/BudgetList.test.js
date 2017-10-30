import React from 'react';
import { shallow } from 'enzyme';
import { BudgetList } from '../../components/BudgetList';
import expenses from '../fixtures/expenses';
import budget from '../fixtures/budgets';


test('should render BudgetList without budgets', () => {
  const wrapper = shallow(<BudgetList expenses={[]} budgets={[[]]} />);
  expect(wrapper).toMatchSnapshot();
});

test('should render BudgetList with budgets', () => {
  const wrapper = shallow(<BudgetList expenses={expenses} budgets={[[budget]]} />);
  expect(wrapper).toMatchSnapshot();
});

test('should handle filterExpenses', () => {
  const wrapper = shallow(<BudgetList expenses={expenses} budgets={[[budget]]} />);
  const prop = wrapper.find('BudgetListItem').prop('expenses');
  expect(prop).toEqual([ expenses[1] ]);
});
