import moment from 'moment';

const filters = {
    text: '',
    sortBy: 'date',
    startDate: undefined,
    endDate: undefined,
    pagination: 5,
    expensesPartitionIndex: 0
}

const altFilters = {
    text: 'bills',
    sortBy: 'amount',
    startDate: moment(0),
    endDate: moment(0).add(3, 'days'),
    pagination: 25,
    expensesPartitionIndex: 1
}

export { filters, altFilters };