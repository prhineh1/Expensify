import moment from 'moment';
import partition from 'js-partition';

//Get visible expenses

export default (expenses, {text, sortBy, startDate, endDate, pagination, expensesPartitionIndex}) => {
    let partitionedExpenses = expenses.filter((expense) => {
        const createdAtMoment = moment(expense.createdAt);
        const startDateMatch = startDate ? startDate.isSameOrBefore(createdAtMoment, 'day') : true;
        const endDateMatch = endDate ? endDate.isSameOrAfter(createdAtMoment, 'day') : true;
        const textMatch = expense.description.toLowerCase().includes(text.toLowerCase());

        return startDateMatch && endDateMatch && textMatch;
    }).sort((a, b) => {
        if (sortBy === 'date') {
            return b.createdAt - a.createdAt;
        } else if (sortBy === 'amount') {
            return b.amount - a.amount;
        }
    });

    //parition(n, [step], [pad], coll)
    if (partitionedExpenses.length % pagination === 0 && partitionedExpenses.length > 0) {
        partitionedExpenses = partition(pagination, pagination, partitionedExpenses);
    }
    //when the pagination isn't a factor of partionedExpenses, add an empty array as
    //padding to ensure the remaining elements are correctly partitioned
    //if partiionedExpenses is empty, the padding ensures we get a jagged array
    else {
        partitionedExpenses = partition(pagination, pagination, [], partitionedExpenses);        
    }

    //first return value is a jagged array with all the expenses partitioned according to 'pagination'
    //second return value is the partion that will be displayed in ExpenseList.js
    return [partitionedExpenses, partitionedExpenses[expensesPartitionIndex]];
};