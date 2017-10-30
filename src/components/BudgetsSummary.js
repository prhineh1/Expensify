import React from 'react';
import { Link } from 'react-router-dom';

const BudgetsSummary = () => (
  <div className='page-header'>
      <div className='content-container'>
          <h1 className='page-header__title'>Budgets</h1>
          <p className='page-header__subtitle'>Note: Budgeted expenses are tracked monthly.</p>
          <div className='page-header__actions'>
              <Link className='button' to='/create/budget'>Add Budget</Link>
              <Link className='button' to='/dashboard/expenses'>View Expenses</Link>
          </div>
      </div>
  </div>
);

export default BudgetsSummary;