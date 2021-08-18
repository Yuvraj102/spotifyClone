import React from "react";
import { useContext, useReducer, createContext } from "react";

export const DataLayerContext = createContext();

export const DataLayer = ({ initialState, reducer, children }) => (
  <DataLayerContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </DataLayerContext.Provider>
);

export const useDataLayerValue = () => useContext(DataLayerContext);
// Our datalayercontext has value that is returned by useReducer which is [state,dispatch]
