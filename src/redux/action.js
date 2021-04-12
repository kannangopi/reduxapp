export function addtodo(item){
    return{
        type: 'addtodolist',
        payload: item
    }
}
export function deleteItem(id){
    return{
        type:'deletetodo',
        payload:id
    }
}