import Actions from "./../actionTypes/actiontypes";
const { ADD_TODO, COMPLETE_TODO, ADD_TODO_CATEGORY } = Actions;

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

export function addCategory (payload){
    return {
        type: ADD_TODO_CATEGORY,
        payload
    }
}