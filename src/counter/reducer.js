const initialState = {
    count: 0
}

export const reducer = (state = initialState, action) => {
    switch(action.type) {
        case 'INCREMENT':
          return {
            count: state.count + Math.random()
          };
        case 'DECREMENT':
          return {
            count: state.count - Math.random()
          };
        case 'RESET':
            return{
                count: 0
            }  
        default:
          return state;
      }
}