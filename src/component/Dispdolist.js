import React from 'react';
import {useSelector} from 'react-redux';
import {finaltodo} from '../redux/state';
function Dispdolist(){
    let itemlist = useSelector(finaltodo=>finaltodo);
    return(
        <div>
            <lu>
            {itemlist.map((todo)=>{return(
                <li>{todo.name}</li>
            )})}
            </lu>
        </div>
    );
}
export default Dispdolist;