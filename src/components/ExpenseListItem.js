import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import numeral from 'numeral';
import moment from 'moment';

export const ExpenseListItem = ({ id, description, createdAt, amount}) => (
    <div>
        <Link to={'/edit/'+ id}><h3>{description}</h3></Link>
        <p>
            {numeral(amount / 100).format('$0,0.00')}
             - 
             {moment(createdAt).format('MMMM Do, YYYY')}
        </p>
    </div>
);

export default ExpenseListItem