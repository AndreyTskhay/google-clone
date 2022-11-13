import React, { createContext, useContext, useReducer} from "react";

//Preparing the data layer
export const Statecontext = createContext();

export const StateProvider = ({ reducer, initialState, children }) => (
    <Statecontext.Provider value={useReducer(reducer, initialState)}>
        {children}
    </Statecontext.Provider>
);

// Hook which allows us to pull information from the data layer
export const useStateValue = () => useContext(Statecontext);