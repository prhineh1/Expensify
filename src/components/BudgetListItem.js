import React from 'react';
import { Link } from 'react-router-dom';
import numeral from 'numeral';
import moment from 'moment';

const BudgetListItem = (props) => {
    const expensesTotal = props.expenses.reduce((sum, { amount }) => sum + amount, 0);
    const listItemClass = expensesTotal > props.budget.amount ? 'list-item list-item--over' : 'list-item';
    return ( 
        <Link className={listItemClass} to={'/edit/budget/'+ props.budget.id}>
            <div>
                <h3 className='list-item__title'>{props.budget.description}</h3>
            </div>
            <h4 className='list-item__budget'>
                <span className='list-item__budget__mobile'>Expenses: {numeral(expensesTotal / 100).format('$0,0.00')}</span>
                <span className='list-item__budget__desktop'>{numeral(expensesTotal / 100).format('$0,0.00')}</span>
            </h4>
            <h3 className='list-item__data'>
                <span className='list-item__data__mobile'>Budget: {numeral(props.budget.amount / 100).format('$0,0.00')}</span>
                <span className='list-item__data__desktop'>{numeral(props.budget.amount / 100).format('$0,0.00')}</span>
            </h3>
        </Link>
    )
};

export default BudgetListItem