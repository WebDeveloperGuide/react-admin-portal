import Todo from './TodoBox';
import {useEffect} from 'react';
import {Row,Col} from 'react-bootstrap'
import "./Todo.css";
import {useSelector, useDispatch} from 'react-redux';
import {changeStatusTodo, deleteTodo, updateTodo, retrieveTodos} from  '../../redux/actions';
import { todoConstants } from '../../redux/constants';
const {SHOW_ALL, SHOW_COMPLETED, SHOW_ACTIVE} = todoConstants;

const TodoList = () => {

    const state = useSelector((state) => ({...state}));
	let dispatch = useDispatch();

	const updateTodoTask = (id,updatedTask) => {
		dispatch(updateTodo(id,{task:updatedTask}))
	}

	 useEffect(() => {
	    dispatch(retrieveTodos());
	  }, [dispatch]);


	const getVisibleTodos = (
	  todos,
	  filter
	) => {
	  switch (filter) {	  	
	    case SHOW_ALL:
	      return todos;
	    case SHOW_COMPLETED:
	      return todos.filter(
	        t => t.complete
	      );
	    case SHOW_ACTIVE:
	      return todos.filter(
	        t => !t.complete
	      );
	    default:
	    	return todos;
	  }
	}

	const visibleTodos = getVisibleTodos(
      state.todos.todos,
      state.visibilityFilter
    );
	
	return(
		<>
			<Row  md={4} className="mb-5">
			{
				visibleTodos && visibleTodos.map((todo) => {
					return (
						<Col key={todo.id} md={3} className="pr-0 mb-3">
							<Todo 
							todoId={todo.id} 
							todoData={todo.task}
							todoComplete={todo.complete}
							markComplete={() => dispatch(changeStatusTodo(todo.id,todo))}
							markDelete={() => dispatch(deleteTodo(todo))}
							updateTodo = {updateTodoTask}
							/>
						</Col>
						);
				})
			}
		    	
			
		  	</Row>
		</>
		)
}

export default TodoList;