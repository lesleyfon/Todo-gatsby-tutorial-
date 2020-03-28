import Actions from "./../actionTypes/actiontypes";
const { ADD_TODO, EDIT_TODO, DELETE_TODO } = Actions;
const intState ={
    todo: [{
        name: "",
        completed: false,
        date: "",
        category: "",
        farvorite: false,
      }]
}

export function todoreducer (state = intState, action) {
    switch (action.type) {
      case ADD_TODO:
        return {
          ...state,
          todo: [
              ...state.todo,
              action.payload            
          ]
        }
      case EDIT_TODO:
        return {
            ...state,
            todo: [
                ...state.todo,
                action.payload            
            ]
          }
      case DELETE_TODO:
        return {
            ...state,
            todo: [
                ...state.todo,
                action.payload            
            ]
          }
      default:
        return state
    }
  }