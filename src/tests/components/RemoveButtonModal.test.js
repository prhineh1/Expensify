import React from 'react';
import { shallow } from 'enzyme';
import RemoveButtonModal from '../../components/RemoveButtonModal';

let isOpen, removeExpense, toggleModal, wrapper;

beforeEach(() => {
    isOpen = true;
    removeExpense = jest.fn();
    toggleModal = jest.fn()
    wrapper = shallow(<RemoveButtonModal
        isOpen={isOpen}
        removeExpense={removeExpense}
        toggleModal={toggleModal}
     />);
});

test('should render RemoveButtonModal', () => {
    expect(wrapper).toMatchSnapshot();
});

test('should handle RemoveButtonModal', () => {
    wrapper.find('button').at(0).simulate('click');
    expect(removeExpense).toHaveBeenCalled();
});

test('should handle toggleModal', () => {
    wrapper.find('button').at(1).simulate('click');
    expect(toggleModal).toHaveBeenCalled();
});