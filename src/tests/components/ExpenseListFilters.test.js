import React from 'react';
import { shallow } from 'enzyme';
import moment from 'moment';
import { ExpenseListFilters } from '../../components/ExpenseListFilters';
import { filters, altFilters } from '../fixtures/filters';

let setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate, wrapper, setPagination, setPartitionIndex;

beforeEach(() => {
    setTextFilter = jest.fn();
    sortByDate = jest.fn();
    sortByAmount = jest.fn();
    setStartDate = jest.fn();
    setEndDate = jest.fn();
    setPagination = jest.fn();
    setPartitionIndex = jest.fn();
    wrapper = shallow(
        <ExpenseListFilters
            filters={filters}
            setTextFilter={setTextFilter}
            sortByDate={sortByDate}
            sortByAmount={sortByAmount}
            setStartDate={setStartDate}
            setEndDate={setEndDate}
            setPagination={setPagination}
            setPartitionIndex={setPartitionIndex}
    />);
});

test('should render ExpenseListFilters', () => {
    expect(wrapper).toMatchSnapshot();
});

test('should render ExpenseListFilters with alt data', () => {
    wrapper.setProps({
        filters: {altFilters}
    });
    expect(wrapper).toMatchSnapshot();
});

test('should handle text change', () => {
    const value = 'test';
    wrapper.find('input').simulate('change', {
        target: { value } 
    });
    expect(setPartitionIndex).toHaveBeenCalled();
    expect(setTextFilter).toHaveBeenLastCalledWith(value);
});

test('should handle sort by date', () => {
    const value = 'date';
    wrapper.find('select').at(1).simulate('change', {
        target: { value } 
    });
    expect(setPartitionIndex).toHaveBeenCalled();    
    expect(sortByDate).toHaveBeenCalled();
});

test('should handle sort by amount', () => {
    const value = 'amount';
    wrapper.find('select').at(1).simulate('change', {
        target: { value } 
    });
    expect(setPartitionIndex).toHaveBeenCalled();    
    expect(sortByAmount).toHaveBeenCalled();
});

test('should handle date changes', () => {
    const startDate = altFilters.startDate;
    const endDate = altFilters.endDate;
    wrapper.find('DateRangePicker').prop('onDatesChange')({startDate, endDate});
    expect(setPartitionIndex).toHaveBeenCalled();    
    expect(setStartDate).toHaveBeenLastCalledWith(startDate);
    expect(setEndDate).toHaveBeenLastCalledWith(endDate);
});

test('should handle date focus changes', () => {
    const calendarFocused = null;
    wrapper.find('DateRangePicker').prop('onFocusChange')(calendarFocused);
    expect(wrapper.state('calendarFocused')).toBe(calendarFocused);    
});

test('should handle pagination changes', () => {
    const value = altFilters.pagination;
    wrapper.find('select').at(0).simulate('change', {
        target: { value }
    });
    expect(setPartitionIndex).toHaveBeenCalled();    
    expect(setPagination).toHaveBeenLastCalledWith(value);
})



