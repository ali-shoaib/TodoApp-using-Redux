const initialState = {
    items: [],
}
const todos = (todos = initialState, action) => {
    switch(action.type){
        case 'ADD_TODO':
            return { ...todos, 
                items: [...todos.items, {name: action.name, id: action.id}]
            }
        case 'DEL_TODO':
            const del_state= todos.items.filter(todo => todo.id !== action.id)
            return {...todos, items: del_state}
        case 'DEL_ALL':
            return {...todos, items: []}
        default: 
        return todos;    
    }
}

export default todos;