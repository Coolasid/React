const addCount = {type: "INC_COUNT", payload: 1};
const decCount = { type: "DEC_COUNT", payload: 1 };

class Store{
    constructor(reducer, init){
        this.reducer = reducer;
        this.state = init;
    }

    getState(){
        return this.state;
    }

    dispatch(action){
        //
        this.state = this.reducer(this.state, action);
    }
}



const reducer = (store, action) =>{
    switch(action.type){
        case "INC_COUNT":
            return {...store, count: store.count + action.payload }
        case "DEC_COUNT":
            return {...store, count: store.count - action.payload}
        case "ADD_TODO":
            return {...store, todo: [...store.todo, action.payload]}
        default:
            return store;
    }

    

};

//--------------------reducer init

const init = { count: 0, todo: [] };

const store = new Store(reducer, init);
console.log(store.getState());

store.dispatch({type: "INC_COUNT", payload:1})
console.log(store.getState());

store.dispatch({ type: "DEC_COUNT", payload: 1 });
console.log(store.getState());

store.dispatch({
    type: "ADD_TODO",
    payload: { id: 1, state: false, }
})