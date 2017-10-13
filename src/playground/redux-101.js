import {createStore} from 'redux';

// Action generators

const incrementCount = ({incrementBy = 1} = {}) => ({
    type: 'INCREMENT',
    incrementBy
});

const decrementCount = ({decrementBy = 1} = {}) => ({
    type: 'DECREMENT',
    decrementBy
});

const resetCount = ({count} = {}) => ({
    type: 'RESET',
    count
});

//Reducers

const countReducer = (state = {count: 0}, action) => {
    switch (action.type) {
        case 'INCREMENT':
        return {
            count: state.count + action.incrementBy
        };
        case 'DECREMENT':
        const decrementBy = typeof action.decrementBy === 'number' ? action.decrementBy : 1;
        return {
            count: state.count - decrementBy
        };
        case 'RESET':
        return {
            count: 0
        };
        default:
        return state;
    }
};

const store = createStore(countReducer);

const unsubscribe = store.subscribe(() => {   
    console.log(store.getState());
});

store.dispatch(incrementCount({incrementBy: 5}));

// store.dispatch({
//     type: 'INCREMENT',
//     incrementBy: 5
// });

store.dispatch(incrementCount());

store.dispatch(decrementCount({decrementBy: 10}));

store.dispatch(resetCount({count: 0}));
