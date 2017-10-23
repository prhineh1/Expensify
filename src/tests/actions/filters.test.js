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

test('should generate set pagination filter object with arguments', () => {
    const action = filters.setPagination(15);
    expect(action).toEqual({
        type: 'SET_PAGINATION',
        pagination: 15
    });
});

test('should generate set pagination filter object with default values', () => {
    const action = filters.setPagination();
    expect(action).toEqual({
        type: 'SET_PAGINATION',
        pagination: 5
    });
});

test('should generate set partition index filter object with arguments', () => {
    const action = filters.setPartitionIndex(2);
    expect(action).toEqual({
        type: 'SET_PARTITION_INDEX',
        index: 2
    });
});

test('should generate set partition index filter object with arguments', () => {
    const action = filters.setPartitionIndex();
    expect(action).toEqual({
        type: 'SET_PARTITION_INDEX',
        index: 0
    });
});
