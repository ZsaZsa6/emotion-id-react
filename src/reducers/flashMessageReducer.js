const initialState = {  
    message: null,
    className: null
  }
const flashMessageReducer = (state = initialState, action) => {  
  switch(action.type){
    case "FLASH_MESSAGE":

      return {
          ...state,
         message: [...state.message, action.message]}
  
    default:
      return state;
  }
};
export default flashMessageReducer