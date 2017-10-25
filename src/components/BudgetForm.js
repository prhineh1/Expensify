import React from 'react';

export default class BudgetForm extends React.Component {
  state = {
    description: this.props.budget ? this.props.budget.description : '',
    amount: this.props.budget ? (this.props.budget.amount / 100).toString() : '',
    error: ''
  };
  onDescriptionChange = (e) => {
    const description = e.target.value;
    this.setState(() => ({ description }))
  }
  onAmountChange = (e) => {
    const amount = e.target.value;
    if(!amount || amount.match(/^((([1-9])\d*)|0)(\.\d{0,2})?$/)) {
      this.setState(() => ({ amount }));
    }
  }
  onSubmit = e => {
    e.preventDefault();

    if (!this.state.description || !this.state.amount) {
      this.setState(() => ({ error: 'Please enter a description and amount.' }));
    }
    else {
      this.setState(() => ({ error: '' }));
      this.props.onSubmit({
        description: this.state.description,
        amount: parseFloat(this.state.amount, 10) * 100
      });
    }
  }
  render() {
    return (
      <div>
        <form onSubmit={this.onSubmit}>
          {this.state.error && <p>{this.state.error}</p>}
          <input
            type='text'
            placeholder='Budget Description'
            autoFocus
            value={this.state.description}
            onChange={this.onDescriptionChange}
           />
          <input
            type="text"
            placehoder='Budgeted Amount'
            value={this.state.amount}
            onChange={this.onAmountChange}
           />
        </form>
      </div>
    )
  }
}