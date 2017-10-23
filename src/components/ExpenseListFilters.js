import React from 'react';
import { connect } from 'react-redux';
import { setTextFilter, 
        sortByAmount, 
        sortByDate, 
        setStartDate, 
        setEndDate,
        setPagination,
        setPartitionIndex } from '../actions/filters';
import { DateRangePicker } from 'react-dates';

export class ExpenseListFilters extends React.Component {
    state = {
        calendarFocused: null
    };
    onDatesChange = ({startDate, endDate}) => {
        this.props.setPartitionIndex();        
        this.props.setStartDate(startDate);
        this.props.setEndDate(endDate);
    };
    onFocusChange = (calendarFocused) => {
        this.setState(() => ({ calendarFocused }));
    };
    onSortChange = (e) => {
        this.props.setPartitionIndex();        
        const sort = e.target.value === 'date' ? this.props.sortByDate() : this.props.sortByAmount();
        sort;
    };
    onTextChange = (e) => {
        this.props.setPartitionIndex();        
        this.props.setTextFilter(e.target.value);
    };
    onPaginationChange = (e) => {
        const pagination = parseInt(e.target.value);
        this.props.setPartitionIndex();
        this.props.setPagination(pagination);
    }
    render() {
        return (
            <div className='content-container'>
                <div className='input-group'>
                    <div className='input-group__item'>
                        <select
                            value={this.props.filters.pagination}
                            onChange={this.onPaginationChange}
                            id='pagination'
                            className='select'
                         >
                            <option value='5'>5 Expenses per page</option>
                            <option value='10'>10 Expenses per page</option>
                            <option value='25'>25 Expenses per page</option>
                            <option value='50'>50 Expenses per page</option>
                         </select>
                    </div>
                    <div className='input-group__item'>
                        <input 
                            placeholder='Search expenses'
                            className='text-input' 
                            type='text' 
                            value={this.props.filters.text} 
                            onChange={this.onTextChange} />
                    </div>
                    <div className='input-group__item'>
                        <select 
                            className='select'
                            value={this.props.filters.sortBy} 
                            onChange={this.onSortChange}
                        >
                            <option value='date'>Date</option>
                            <option value='amount'>Amount</option>
                        </select>
                    </div>
                    <div className='input-group__item input-group__item--datepicker'>
                        <DateRangePicker
                            startDate={this.props.filters.startDate}
                            endDate={this.props.filters.endDate}
                            onDatesChange={this.onDatesChange}
                            focusedInput={this.state.calendarFocused}
                            onFocusChange={this.onFocusChange}
                            numberOfMonths={1}
                            isOutsideRange={() => false}
                            showClearDates={true}
                        />
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        filters: state.filters
    };
};

export default connect(mapStateToProps, { setTextFilter, sortByAmount, sortByDate, setStartDate, setEndDate, setPagination, setPartitionIndex })(ExpenseListFilters);