import TodoItem from "./todoItem"
import {getAllTodos} from "../Redux/todoSlice"
import {useDispatch, useSelector} from "react-redux"
import { useEffect } from "react"


const TodoList = () => {
    const dispatch= useDispatch();
    const {allTodos, newTodo, deletedTodo, loading} = useSelector((state)=> state.TodoReducer);

    useEffect(()=> {
        dispatch(getAllTodos());
    }, [newTodo, deletedTodo]);
  return (
    <div className="mt-4"> 
    {loading? "...Loading": 
     allTodos?.map((el)=>(
        <TodoItem key={el._id} todoInfo={el}/>
     ))}
    </div>
  )
};

export default TodoList