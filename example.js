let store = [];
const MAGIC = "MAGIC";


function reducer(state, action){
    if(action.type ===  MAGIC){
        return[...state, action.payload]
    }
    return state;
}

function dispatch(action){
    if(typeof action === 'function'){
        action(dispatch); // higher order function
    } else {
        store = reducer(store, action);
    }
}

const action1 = {
    type: MAGIC,
    payload: {
        answer: 42
    }
}

dispatch(action1);
dispatch(action1);
dispatch(action1);


const doMagic = (dispatch_) => {
    setTimeout(() => {
        dispatch_({
            type: MAGIC,
            payload: {magic: false}
        })
    }, 100)
}

dispatch(doMagic)

setTimeout(() => {
    console.log(store)
}, 100)

dispatch((dispatch_) => {
    dispatch_({
        type: MAGIC,
        payload: {magic: false}
    })
})
console.log(store);


const upper = (text) => {
    return text[0].toUpperCase() + text.slice(1);
}

const reverse = (text) => {
    return text.split('').reverse().join('');
}

const createSentence = (text, fn) => {
    return fn(text)
}

// console.log(createSentence(upper('roman ma rower'), reverse));
// console.log(createSentence(reverse('roman ma rower'), upper));


// THUNK
// function notThunk(){
//     const x = 42
//     return function thunk() {
//         return x
//     }
// }