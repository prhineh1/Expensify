import React from 'React';
import { shallow } from 'enzyme';
import BudgetsSummary from '../../components/BudgetsSummary';

test('should render BudgetsSummary', () => {
  const wrapper = shallow(<BudgetsSummary />);
  expect(wrapper).toMatchSnapshot();
});