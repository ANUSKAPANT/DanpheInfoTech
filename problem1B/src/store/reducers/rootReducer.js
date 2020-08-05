const initState = {
    
    colors: ['red', 'green', 'blue', 'black', 'orange'],
    pastColors:[],
    className: '' 
  }
  
const rootReducer = (state = initState, action) => {
    if(action.type === 'Click_Button'){
        let randomColor = state.colors[Math.floor(Math.random() * 5)];
        if(state.className === 'blue'){
            randomColor = 'green';
        }
        return {
          ...state,
          pastColors:[...state.pastColors,randomColor],
          className: randomColor
        }
       }
    return state;
}

export default rootReducer