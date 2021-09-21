export const addToList = (inputData) => {
    return {
        type: "ADD_TO_LIST",
        payload : {
            id : new Date().getTime().toString(),
            data: inputData        
        }
    }
}

export const removeFromList = (id) => {
    return {
        type: "REMOVE_FROM_LIST",
        id: id
    }
}