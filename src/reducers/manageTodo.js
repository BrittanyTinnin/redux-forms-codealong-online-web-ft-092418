export default function manageTodo(state = {
  todos: [],
}, action) {
  switch (action.type) {
    case "ADD_TODO":
      return 
    
      console.log({ todos: state.todos.concat(action.payload.text) });
  
    return state;
  }

}
