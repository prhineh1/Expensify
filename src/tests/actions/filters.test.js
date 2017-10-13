import * as filters from '../../actions/filters';
import moment from 'moment';

test('should generate set start date action object', () => {
    const action = filters.setStartDate(moment(0));
    expect(action).toEqual({
        type: 'SET_START_DATE',
        date:  moment(0)
    })
});

test ('should generate end date action object', () => {
    const action = filters.setEndDate(moment(0));
    expect(action).toEqual({
        type: 'SET_END_DATE',
        date: moment(0)
    })
});

test('should generate sort by date action object', () => {
    const action = filters.sortByDate();
    expect(action).toEqual({
        type: 'SORT_BY_DATE'
    })
});

test('should generate sort by amount action object', () => {
    const action = filters.sortByAmount();
    expect(action).toEqual({
        type: 'SORT_BY_AMOUNT'
    })
});

test('should generate set text filter object with arguments', () => {
    const action = filters.setTextFilter('Rent');
    expect(action).toEqual({
        type: 'SET_TEXT_FILTER',
        text: 'Rent' 
    })
});

test('should generate set text filter action object with default value', () => {
    const action = filters.setTextFilter();
    expect(action).toEqual({
        type: 'SET_TEXT_FILTER',
        text: ''
    })
});