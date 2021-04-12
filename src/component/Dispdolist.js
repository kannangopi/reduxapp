import React from 'react';
import {useSelector,useDispatch} from 'react-redux';
import {deleteItem} from '../redux/action';
// import {finaltodo} from '../redux/state';
function Dispdolist(){
    let itemlist = useSelector(finaltodo=>finaltodo);
    const dispatch = useDispatch( );
    const deleteitem =(index)=>{
        dispatch(deleteItem(index))
    }
    return(
        <div>
            <lu>
            {itemlist.map((todo,index)=>{return(
                <li>{todo.name}  <button onClick={(index)=>{deleteitem(index)}}>delete</button><button>Edit</button></li>
                
            )})}
            </lu>
        </div>
    );
}
export default Dispdolist;