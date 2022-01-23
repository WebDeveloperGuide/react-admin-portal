import { todoConstants } from '../constants';
import {toast} from 'react-toastify';
//import {v4 as uuidv4} from 'uuid';

const initialState = {
	todos:[],
	message:''	
};

const todoReducer = (state = initialState, action) => {
	
	switch(action.type){
		case todoConstants.TODO_LIST:
			return {
				...state,
				todos:action.payload
			}

		case todoConstants.ADD_TODO:
			const newTodoList = [...state.todos,action.payload];
			toast.success("Task Added Successfully.", {
							position: "top-right",
							autoClose: 2000,
							hideProgressBar: true,
							closeOnClick: true,
							pauseOnHover: true,
							draggable: true,
							progress: undefined,
						});
			return {
				...state,
				message:"Task Added Successfully",
				todos:newTodoList
			}

		case todoConstants.UPDATE_TODO:		
		const updatedTodos = state.todos.map((todo) => {
				if(todo.id === action.payload.id){
					return {...action.payload,task: action.payload.task}
				}
				return todo;
			});

		toast.success("Task Updated Successfully.", {
							position: "top-right",
							autoClose: 2000,
							hideProgressBar: true,
							closeOnClick: true,
							pauseOnHover: true,
							draggable: true,
							progress: undefined,
						});

		return {
			...state,
			todos:updatedTodos
		};

		case todoConstants.DELETE_TODO:
		const filteredTodoList = state.todos.filter((todo) => 
				todo.id !== action.payload.id
			);

		toast.success("Task Deleted successfully.", {
							position: "top-right",
							autoClose: 2000,
							hideProgressBar: true,
							closeOnClick: true,
							pauseOnHover: true,
							draggable: true,
							progress: undefined,
						});

		return {
			...state,
			message:"Task Deleted Successfully",
			todos:filteredTodoList
		};
		case todoConstants.ACTIVE_TODO:
		const activefilteredTodoList = state.todos.filter((todo) => 
				todo.complete === false
			);

		return {
			...state,
			todos:activefilteredTodoList
		};
		
		case todoConstants.COMPLETED_TODO:
		const completefilteredTodoList = state.todos.filter((todo) => 
				todo.complete === true
			);

		return {
			...state,
			todos:completefilteredTodoList
		};
		
		case todoConstants.ALL_TODO:
		return {
			...state,
			todos:state.todos
		};
		
		case todoConstants.COMPLETE_TODO:

		const completedTodo = state.todos.map((todo) => (
			todo.id === action.payload.id ?
				{...action.payload,complete: !action.payload.complete}
				:
				todo
			));

		toast.success("Task Status Changed Successfully.", {
							position: "top-right",
							autoClose: 2000,
							hideProgressBar: true,
							closeOnClick: true,
							pauseOnHover: true,
							draggable: true,
							progress: undefined,
						});

		return {
			...state,
			todos:completedTodo
		};
		default:
			return state;
	}
}

export default todoReducer;