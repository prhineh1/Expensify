import React from 'react';
import { connect } from 'react-redux';
import BudgetForm from './BudgetForm';
import { addBudget } from '../actions/budgets';

export class AddBudgetPage extends React.Component {
  onSubmit = (Budget) => {
    this.props.addBudget(Budget, this.props.uid);
    this.props.history.push('/dashboard/budgets');
  }
  render() {
    return (
      <div>
          <div className='page-header'>
              <div className='content-container'>
                  <h1 className='page-header__title'>Add Budget</h1>
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