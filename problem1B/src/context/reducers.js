
export const BUTTON_CLICK = 'BUTTON_CLICK';

const handleClick = (state) => {
  
  let id = Math.floor(Math.random() * 5);
  let randomColor = state.colors[id];

  if(state.className === 'blue'){
      randomColor = 'green';
  }

  return{
      ...state, 
      pastColors : [...state.pastColors, randomColor],
      className : randomColor
  }
  
};


export const buttonReducer = (state, action) => {
  switch (action.type) {
    case BUTTON_CLICK:
      return handleClick(state);
    default:
      return state;
  }
};