import Actions from "./../actionTypes/actiontypes";
const { ADD_TODO_CATEGORY, EDIT_TODO_CATEGORY, DELETE_TODO_CATEGORY } = Actions;

const initState = {
  category: [
    {
      name: "Inbox",
      date: "09/09/2019",
    },
    {
      name: "Today",
      date: "09/09/2019",
    },
  ],
}
export function todocategories(state = initState, action) {
  switch (action.type) {
    case ADD_TODO_CATEGORY:
      return {
        ...state,
        category: {
          ...state.category,
          ...action.payload,
        },
      }
    case EDIT_TODO_CATEGORY:
      return {
        ...state,
        category: {
          ...state.category,
          ...action.payload,
        },
      }
    case DELETE_TODO_CATEGORY:
      return {
        ...state,
        category: {
          ...state.category,
          ...action.payload,
        },
      }
    default:
      return state
  }
}
