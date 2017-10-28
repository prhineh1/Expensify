import React from 'react';
import { shallow } from 'enzyme';
import { ExpenseListItem } from '../../components/ExpenseListItem';
import expenses from '../fixtures/expenses';
import budget from '../fixtures/budgets';

test('should render ExpenseListItem with an expense', () => {
    const wrapper = shallow(<ExpenseListItem expense={expenses[1]} budgets={[budget]} />);
    expect(wrapper).toMatchSnapshot();
});