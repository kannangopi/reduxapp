import React,{useState} from 'react';
import {useDispatch} from 'react-redux';
import {addtodo} from '../redux/action';
// import {finaltodo} from '../redux/state';
 function Todoinput(){
    const [input,setInput]=useState();
    const dispatch=useDispatch();
    const addTodo=()=>{
        dispatch( addtodo({name:input}));
    }
    return(
        <div>
            <h1>
                ...TOLIST...
                
            </h1>
            <input type="text" value={input} onChange={(event)=>{setInput(event.target.value)}}/>
            <button onClick={addTodo}>Submit</button>
        </div>
    )
}
export default Todoinput;