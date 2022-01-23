import {useState} from 'react';
import {useDispatch,connect} from 'react-redux';
import { toast } from 'react-toastify';
import {addTodo} from  '../../redux/actions';
import FilterButton from './FilterButton';
import './Todo.css';


const TodoInput = (props) => {
	const [task,setTask] = useState('');
	let dispatch = useDispatch();

	//Show Error If Value is Blank
	const notify = () => toast.error("Please Enter Task Detail.", {
							position: "top-right",
							autoClose: 2000,
							hideProgressBar: true,
							closeOnClick: true,
							pauseOnHover: true,
							draggable: true,
							progress: undefined,
						});

	const handleSubmit = (e) =>{
		e.preventDefault();	
		
		if(task.trim() === ""){
			notify();

		}else{
			dispatch(addTodo({task,complete:false}));
			setTask('');
		}
	}

	const handleChange = (e) => {
		setTask(e.target.value);
	}

	
	return(
		<>
			<div>
				<h5 className="mt-4">Todo App with React Redux</h5>
			  	<form className="form-inline justify-content-center mb-2 mt-4" onSubmit={handleSubmit}>
				  <div className="input-group mb-3">
					  <input type="text" className="form-control" placeholder="Enter Detail" value={task} onChange={handleChange}/>
					  <div className="input-group-append">
					    <button className="btn btn-outline-secondary" onClick={handleSubmit} type="button">Add</button>
					  </div>
				  </div>
				</form>
				<div className="form-inline justify-content-center mb-1 mt-1">
				  <div className="input-group status-btn-group mb-3">
				  		<FilterButton
				  			filter='SHOW_ACTIVE'
            				currentFilter={props.currentFilter} 
            				filterName = 'Active'
            			/>

            			<FilterButton
				  			filter='SHOW_COMPLETED'
            				currentFilter={props.currentFilter} 
            				filterName = 'Completed'
            			/>

            			<FilterButton
				  			filter='SHOW_ALL'
            				currentFilter={props.currentFilter} 
            				filterName = 'All'
            			/>					    	 
				  </div>
				</div>
			</div>
		</>
		)
}

const mapStateToProps = (props) => {
	return{
		currentFilter: props.visibilityFilter,
		todoMessage: props.todos.message
	};
};


export default connect(mapStateToProps,null)(TodoInput);