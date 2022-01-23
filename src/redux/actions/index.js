import { todoConstants } from '../constants';
import TodoServices from "../../services/TodoServices";

export const retrieveTodos = () => async (dispatch) => {
  try {
    const res = await TodoServices.getAllTodos();    
    dispatch({
      type: todoConstants.TODO_LIST,
      payload: res.data,
    });
  } catch (err) {
    console.log(err);
  }
};

export const addTodo = (todo) => async(dispatch) => {
	try{
		const {data} = await TodoServices.createTodo(todo);
		dispatch({type:todoConstants.ADD_TODO,payload:data.todo});
	} catch(error){
		console.log(error);
	}
};

export const deleteTodo = (todo) => async(dispatch) => {
	try{
		await TodoServices.removeTodo(todo.id);
		dispatch({type:todoConstants.DELETE_TODO,payload:todo});
	} catch(error){
		console.log(error);
	}
};

export const updateTodo = (id,todo) => async (dispatch) => {
  try {

  	const res = await TodoServices.updateTodo(id, todo);
  	const {task} = todo;
    dispatch({
      type:todoConstants.UPDATE_TODO,
      payload: {id,task}
    });

    return Promise.resolve(res.data);
  } catch (err) {
    return Promise.reject(err);
  }
};


export const changeStatusTodo = (id,todo) => async (dispatch) => {
  try {
    
    const res = await TodoServices.changeStatus(id, todo);
    const {task,complete} = todo;
    dispatch({
      type:todoConstants.COMPLETE_TODO,
      payload: {id,task,complete}
    });

    return Promise.resolve(res.data);
  } catch (err) {   
    return Promise.reject(err);
  }
};

export const filterTodo = (filter) =>({
		type:todoConstants.SET_VISIBILITY_FILTER,
		filter
	}
);

export const logIn = () =>({
    type:todoConstants.LOGGED_IN
  }
);

export const logOut = () => (dispatch) => {

    

};

