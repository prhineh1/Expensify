import React from 'react';
import { connect } from 'react-redux';
import { editBudget, removeBudget } from '../actions/budgets';
import BudgetForm from './BudgetForm';
import RemoveButtonModal from './RemoveButtonModal';

export class EditBudgetPage extends React.Component {
  state = {
      isOpen: false
  };
  onSubmit = (budget) => {
      this.props.editBudget(this.props.budget.id, budget, this.props.uid);
      this.props.history.push('/dashboard/budgets');
  };
  removeBudget = () => {
      this.props.removeBudget(this.props.budget.id, this.props.uid );
      this.props.history.push('/dashboard/budgets');
  };
  toggleModal = () => this.setState((prevState) => ({ isOpen: !prevState.isOpen }));
  render() {
      return (
      <div>
          <div className='page-header'>
              <div className='content-container'>
                  <h1 className='page-header__title'>Edit Budget</h1>
              </div>
          </div>
          <div className='content-container'>
              <BudgetForm
                  budget={this.props.budget}
                  onSubmit={this.onSubmit}
              />
              <button className='button button--secondary button--nav' onClick={this.toggleModal} >
                      Remove Budget
              </button>
          </div>
          <RemoveButtonModal 
              toggleModal={this.toggleModal} 
              removeBudget={this.removeBudget}
              isOpen={this.state.isOpen} 
          />
      </div>
      );
  }
};

const mapStateToProps = (state, props) => ({
  uid: state.auth.uid,
  budget: state.budgets.find(budget => budget.id === props.match.params.id)
});

export default connect(mapStateToProps, { editBudget, removeBudget })(EditBudgetPage);