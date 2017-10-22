import React from 'react';
import { shallow } from 'enzyme';
import RemoveExpenseModal from '../../components/RemoveExpenseModal';

let isOpen, removeExpense, toggleModal, wrapper;

beforeEach(() => {
    isOpen = true;
    removeExpense = jest.fn();
    toggleModal = jest.fn()
    wrapper = shallow(<RemoveExpenseModal
        isOpen={isOpen}
        removeExpense={removeExpense}
        toggleModal={toggleModal}
     />);
});

test('should render RemoveExpensemodal', () => {
    expect(wrapper).toMatchSnapshot();
});

test('should handle removeExpense', () => {
    wrapper.find('button').at(0).simulate('click');
    expect(removeExpense).toHaveBeenCalled();
});

test('should handle toggleModal', () => {
    wrapper.find('button').at(1).simulate('click');
    expect(toggleModal).toHaveBeenCalled();
});