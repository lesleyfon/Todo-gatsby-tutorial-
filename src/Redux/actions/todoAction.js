import Actions from "./../actionTypes/actiontypes";
const { ADD_TODO, EDIT_TODO, DELETE_TODO } = Actions;

export function addTodo (todo){

    return {
        type: ADD_TODO,
        payload: todo
    }
}