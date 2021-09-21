import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './todo.css';
import { addToList, removeFromList} from '../action/action';

function ToDo() {
    let [inputTodo , setInputTodo] = useState(' ');
    let dispatch = useDispatch(inputTodo);
    let todolist = useSelector((state) => state.todoReducer.list );

    return (
        <>
            {
                todolist.map((item) => {
                    return (
                        
                        <div className="each_item" key={item.id}> 
                            <h4>{ item.data }</h4>
                            <button className = "btnRem" onClick = {() => dispatch((removeFromList(item.id)), 
                                setInputTodo(' ')) } > <b> - </b></button>
                        </div>
                    )
                })
            }   
            <br/>
            <div className="todoDiv">
                <input type="text" className="inputToDo" placeholder="Add a task" 
                    onChange = {(e) => setInputTodo(e.target.value)} 
                    value={inputTodo} />
                <button className = "btnAdd" onClick = {() => dispatch((addToList(inputTodo)), 
                    setInputTodo(' ')) } > <b> + </b></button>
            </div>
        </>
    )
}


export default ToDo
