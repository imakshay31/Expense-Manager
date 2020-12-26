import {createStore} from 'redux';

// Action Generator

const incrementCount = ({incrementBy = 1} = {}) => ( {
    type : 'INCREMENT',
    incrementBy
});

const decrementCount = ({decrementBy = 1} = {} ) => ( {
    type : 'DECREMENT',
    decrementBy
});

const setCount = ({count}) => ( {
    type : 'SET',
    count
});

const resetCount = () => ( {
    type : 'RESET'
});

// Reducers 
// 1. Pure function
// 2. Never change state or actition

const countReducer = () => (state = {count : 0}, action) => {
    switch(action.type){
        case 'INCREMENT' :
            const incrementBy = typeof action.incrementBy === 'number' ? action.incrementBy : 1 ;
            return {
                count : state.count + action.incrementBy
            };
        case 'DECREMENT' :
            const decrementBy = typeof action.decrementBy === 'number' ? action.decrementBy : 1 ;
            return {
                count : state.count - action.decrementBy
            };
        case 'SET' :
            return {
                count : action.count
            };
        case 'RESET' :
            return {
                count : 0
            };
        default :
            return state;
    }
};


const store = createStore(countReducer);

// Function call every time state in store changes
const unsubscribe = store.subscribe( () => {
    console.log(store.getState());
});


store.dispatch(incrementCount( {incrementBy : 5}));
store.dispatch(decrementCount({decrementBy : 10}));
store.dispatch(setCount({count : 101}));
store.dispatch(resetCount());


// Action - than a object that gets sent to the store
store.dispatch( {
    type: 'INCREMENT',
    incrementBy : 5
} );

// unsubscribe() when you want to stop subscribe to function 

store.dispatch( {
    type : 'RESET'
})
store.dispatch( {
    type: 'DECREMENT',
    decrementBy : 10
} );

store.dispatch( {
    type : 'SET',
    count : 101
});

console.log(store.getState());