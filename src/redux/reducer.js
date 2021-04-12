import {finaltodo} from './state';

export default function reducer(state=finaltodo,action){
    let newdo;
    switch(action.type){
        case 'addtodolist':
             newdo = [...state];
            newdo.push(action.payload);
            console.log(newdo);
            return newdo;
        case 'deletetodo' :
            newdo=[...state];
            newdo.splice(action.payload,1);
            console.log(state);
            return newdo;
        default:
            return state;
    }
}