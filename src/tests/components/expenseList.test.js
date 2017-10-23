import React from 'react';
import { shallow } from 'enzyme';
import { ExpenseList } from '../../components/ExpenseList';
import expenses from '../fixtures/expenses';


test('should render ExpenseList with expenses', () => {
    const wrapper = shallow(<ExpenseList expenses={expenses} next={1} prev={-1} partitions={[expenses]} />)
    expect(wrapper).toMatchSnapshot();
});

test('should render ExpenseList with empty message', () => {
    const wrapper = shallow(<ExpenseList expenses={[]} next={1} prev={-1} partitions={[]} />)
    expect(wrapper).toMatchSnapshot();
});

test('should render ExpenseList with partitioned expenses', () => {
    const partitionedExpenses = [ [expenses[0], expenses[1]], [expenses[2]] ];
    const wrapper = shallow(<ExpenseList expenses={expenses} next={1} prev={0} partitions={partitionedExpenses} />);
    expect(wrapper).toMatchSnapshot();  
});

test('should handle next button click event', () => {
    const partitionedExpenses = [ [expenses[0], expenses[1]], [expenses[2]] ]; 
    const setPartitionIndex = jest.fn();
    const wrapper = shallow(<ExpenseList setPartitionIndex={setPartitionIndex} 
                                        expenses={expenses} 
                                        next={1} prev={0} 
                                        partitions={partitionedExpenses} />);
    wrapper.find('button').at(0).simulate('click');   
    expect(setPartitionIndex).toHaveBeenCalledWith(1); 
});

test('should handle previous button click event', () => {
    const partitionedExpenses = [ [expenses[0], expenses[1]], [expenses[2]] ]; 
    const setPartitionIndex = jest.fn();
    const wrapper = shallow(<ExpenseList setPartitionIndex={setPartitionIndex} 
                                        expenses={expenses} 
                                        next={1} prev={0} 
                                        partitions={partitionedExpenses} />);
    wrapper.find('button').at(1).simulate('click');   
    expect(setPartitionIndex).toHaveBeenCalledWith(0); 
});