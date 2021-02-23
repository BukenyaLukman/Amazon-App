import React, {createContext, useContext, useReducer} from 'react'


// Prepare the data Layer
export const StateContext = createContext();


// Wrap our App and Provide the Data layer
export const StateProvider = ({ reducer, initialState, children }) => (
    <StateContext.Provider value={useReducer(reducer, initialState)}>
        {children}
    </StateContext.Provider>
);

// Pull information from the data Layer
export const useStateValue = () => useContext(StateContext);
