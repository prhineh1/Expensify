import moment from 'moment';

export default [{
    id: '1',
    description: 'Gum',
    note: '',
    amount: 195,
    createdAt: 0,
    budgetId: 'asf0923'
}, {
    id: '2',
    description: 'Rent',
    note: '',
    amount: 10095,
    createdAt: moment(0).subtract(4, 'days').valueOf(),
    budgetId: 'a;sdlfj2089'
}, {
    id: '3',
    description: 'Credit Card',
    note: '',
    amount: 4500,
    createdAt: moment(0).add(4, 'days').valueOf(),
    budgetId: 'tuq3948tu'
}];