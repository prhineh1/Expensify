import React from 'react';
import { connect } from 'react-redux';
import BudgetForm from './BudgetForm';
import { addBudget } from '../actions/budgets';

export class AddBudgetPage extends React.Component {
  onSubmit = (Budget) => {
    this.props.addBudget(Budget, this.props.uid);
    this.props.history.push('/');
  }
  render() {
    return (
      <div>
          <div className='page-header'>
              <div className='content-container'>
                  <h1 className='page-header__title'>Add Budget</h1>
                  <p className='page-header__subtitle'>Note: Budgeted expenses are tracked by month.</p>
              </div>
          </div>
          <div className='content-container'>
              <BudgetForm
              onSubmit={this.onSubmit}
              />
            </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({ uid: state.auth.uid });

export default connect(mapStateToProps, { addBudget })(AddBudgetPage);