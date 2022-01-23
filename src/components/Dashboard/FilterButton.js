import {useDispatch} from 'react-redux';
import {filterTodo} from  '../../redux/actions';

const FilterButton = ({
  filter,
  currentFilter,
  children,
  filterName,
  filterAction
}) => {

  let dispatch = useDispatch();

  if (filter === currentFilter) {
    return (
      <button className="btn btn-outline-secondary mr-3 ml-3 active">
         {filterName}
      </button>
    );
  }

  return (
    <button className="btn btn-outline-secondary mr-3 ml-3"
      onClick={() => dispatch(filterTodo(filter))}
      >
       {filterName}
    </button>
  );
};

export default FilterButton;