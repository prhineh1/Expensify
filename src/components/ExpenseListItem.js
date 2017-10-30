import React from 'react';
import { Link } from 'react-router-dom';
import numeral from 'numeral';
import moment from 'moment';

export const ExpenseListItem = (props) => (
    <Link className='list-item' to={'/edit/'+ props.expense.id}>
        <div>
            <h3 className='list-item__title'>{props.expense.description}</h3>
            <span className='list-item__sub-title'>{moment(props.expense.createdAt).format('MMMM Do, YYYY')}</span>
        </div>
        <h4 className='list-item__budget'>{
            props.expense.budgetId ? 
            <span>{(props.budgets.find(budget => budget.id === props.expense.budgetId).description)}</span> : 
            <span>none</span> 
            }</h4>
        <h3 className='list-item__data'>
            {numeral(props.expense.amount / 100).format('$0,0.00')}
         </h3>
    </Link>
);

export default ExpenseListItem