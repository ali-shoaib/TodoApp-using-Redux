const ADD_TODO="ADD_TODO";
const DEL_TODO="DEL_TODO";
const DEL_ALL= "DEL_ALL";

export const addTodo = (name) =>({
    type: ADD_TODO,
    name: name,
    id: Math.random(),
});

export const delTodo = (id) => ({
    type: DEL_TODO,
    id
})

export const delAll = () => ({
    type: DEL_ALL,
})
