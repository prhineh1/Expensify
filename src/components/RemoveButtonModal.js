import React from 'react';
import Modal from 'react-modal';

const RemoveButtonModal = (props) => {
    const removal = props.removeExpense ? props.removeExpense : props.removeBudget;
    return (
        <Modal 
            isOpen={props.isOpen}
            onRequestClose={props.toggleModal}
            contentLabel={'Remove Expense Warning'}
            closeTimeoutMS={200}
            className='modal'
        >
            <h3 className='modal__title'>Are you sure you want to remove this item?</h3>
            <div className='modal__body'>
                <button className='button button--secondary' onClick={removal}>Yes</button>
                <button className='button button--secondary' onClick={props.toggleModal}>No</button>
            </div>
        </Modal>
    )
};

export default RemoveButtonModal;