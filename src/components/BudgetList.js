import React from 'react';
import { connect } from 'react-redux';
import BudgetListItem from './BudgetListItem';
import moment from 'moment'; 
import partition from 'js-partition';

export class BudgetList extends React.Component {
    state = {
        displayIndex: 0
    };
    next = () => this.setState(prevstate => ({ displayIndex: prevstate.displayIndex + 1 }));
    prev = () => this.setState(prevstate => ({ displayIndex: prevstate.displayIndex - 1 }));
    render() {
        return(
            <div className='content-container'>
                <div className='list-header'>
                    <div className='show-for-mobile'>Budgets</div>
                    <div className='show-for-desktop'>Description</div>
                    <div className='show-for-desktop'>Expenses Total</div>
                    <div className='show-for-desktop'>Budgeted Amount</div>
                </div>
                <div className='list-body'>
                    {
                        this.props.budgets[this.state.displayIndex].length === 0 ? (
                            <div className='list-item list-item--message'>
                                <span>No budgets</span>
                            </div>
                        ) : (
                            this.props.budgets[this.state.displayIndex].map((budget) => 
                            <BudgetListItem 
                                key={budget.id} 
                                budget={budget} 
                                expenses={
                                    this.props.expenses.filter(expense => expense.budgetId === budget.id && 
                                    moment(expense.createdAt).isBetween(moment().startOf('month'), moment().endOf('month'), 'day'))
                                } 
                            />
                            )
                        )
                    }
                </div>
                {
                    !!this.props.budgets && (
                        <div className='list-nav'>
                            {
                                this.props.budgets[this.state.displayIndex + 1] && (
                                    <button className='button button--nav' onClick={this.next}>Next</button>
                                )
                            }
                            {  
                                this.props.budgets[this.state.displayIndex - 1] && (
                                    <button className='button button--nav' onClick={this.prev}>Previous</button>
                                )
                            }
                        </div>
                    )
                }
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    let partitionedBudgets;
    
    if (state.budgets.length % 10 === 0 && state.budgets.length > 0) {
        partitionedBudgets = partition(10, 10, state.budgets);
    }
    else {
        partitionedBudgets = partition(10, 10, [], state.budgets);        
    }
  return {
      expenses: state.expenses,
      budgets: partitionedBudgets
  };
};

export default connect(mapStateToProps)(BudgetList);