import {Card,Badge} from 'react-bootstrap';
import {useState} from 'react';
import "./Todo.css";

const Todo = ({todoData,todoId,todoComplete,markComplete,markDelete,updateTodo},...props) => {
	const [isEditing, setIsEditing] = useState(false);
	const [editTask, setEditTask] = useState(todoData); 

	const editTodo = () => {
		setIsEditing(true);
	}

	const setUpdatedTask = (e) =>{
		setEditTask(e.target.value);
	}

	const handleUpdate = () => {
		updateTodo(todoId,editTask);
		setIsEditing(false);
	}

	return(
		<>
			<Card className="shadow">
			  <Card.Body>
			  	<div className="h-20p w-100">
				  	<h6 className="float-right mb-0">
	    				{ todoComplete ? <Badge bg="secondary">DONE</Badge> : ''}
	  				</h6>
  				</div>
			  	<div>
				    {
				    	isEditing ?
				    	<textarea name="todo_description" className="textarea-todo" onChange={setUpdatedTask} defaultValue={todoData}></textarea>
				    	:
				    	<Card.Text className="">
					      {todoData}
					    </Card.Text>
				    }				    
				    
			    </div>
			    <div className="float-right">
			    	<Card.Link className="cursor-pointer" onClick={isEditing ? handleUpdate : editTodo} ><i className={'fa ' + (isEditing ? ' fa-floppy-o' : 'fa-edit')}></i></Card.Link>
			    	<Card.Link className="cursor-pointer" onClick={markComplete} >
			    		<i className={ 'fa ' + (todoComplete ? ' fa-times' : 'fa-check') } aria-hidden="true"></i>
			    	</Card.Link>
			    	<Card.Link className="text-danger cursor-pointer" onClick={e =>
					        window.confirm("Are you sure you wish to delete this item?") &&
					        markDelete()
					    }>
			    		<i className="fa fa-trash"></i>
			    	</Card.Link>
			    </div>
			  </Card.Body>
			</Card>
		</>
		)
}

export default Todo;