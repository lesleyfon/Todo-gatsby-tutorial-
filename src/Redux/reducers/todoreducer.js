import Actions from "./../actionTypes/actiontypes";
const { ADD_TODO, EDIT_TODO, DELETE_TODO, COMPLETE_TODO } = Actions;
const intState ={
    todo: [{
      name: "Fist Todo",
      completed: false,
      date: "",
      category: "",
      farvorite: false,
    },
    {
      name: "New todo",
      completed: true,
      date: "",
      category: "",
      favorite: false
    },
    {
      name: "New todo",
      completed: false,
      date: "",
      category: "",
      favorite: false
    },
    {
      name: "New todo",
      completed: false,
      date: "",
      category: "",
      favorite: false
    }
  ]
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
      case COMPLETE_TODO: 
          // console.log(action.payload)
      return {
        ...state,
        todo: state.todo.filter((item, index) =>  index !== action.payload.index)
        
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
  
        return {
          ...state,
          todo: state.todo.filter(item => !item.completed)
        }
    }
  }