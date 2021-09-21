const initialState = {
    list: []
}

const todoReducer = (state = initialState, action ) => {
    switch (action.type) {
        case "ADD_TO_LIST":
            // Push the action payload to state list
            state.list.push(action.payload);

            return state;
        
        case "REMOVE_FROM_LIST":
            let newList = state.list.filter((item) => item.id !== action.id);
            return {...state, list: newList};

        default: return state;
    }
}

export default todoReducer;