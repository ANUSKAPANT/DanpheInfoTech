import React, { useReducer } from 'react';
import Context from './Context';
import { buttonReducer, BUTTON_CLICK } from './reducers';

const GlobalState = props => {
    const colors = ['red', 'green', 'blue', 'black', 'orange'];

    const [colorsState, dispatch] = useReducer(buttonReducer, { colors: colors, pastColors: [], className: '' });

    const handleClick = () => {
    dispatch({ type: BUTTON_CLICK,  });  
    };


    return (
    <Context.Provider
        value={{
        colors: colorsState.colors,
        pastColors: colorsState.pastColors,
        className: colorsState.className,
        handleClick: handleClick
        }}
    >
        {props.children}
    </Context.Provider>
    );
};

export default GlobalState;