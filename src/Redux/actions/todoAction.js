import Actions from "./../actionTypes/actiontypes";
const { ADD_TODO, COMPLETE_TODO } = Actions;

export function addTodo (todo){

    return {
        type: ADD_TODO,
        payload: todo
    }
}

export function completedTodo (payload){
    return {
        type: COMPLETE_TODO,
        payload
    }
}