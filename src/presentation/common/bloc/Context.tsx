import React from "react";
import {Bloc} from ".";

export function createBlocContext<T>() {
    const blocContext = React.createContext<Bloc<T> | undefined>(undefined);

    function useBlocContext() {
        const context = React.useContext(blocContext);
        if (!context) throw new Error("useBlocContext must be inside a Provider with a value");
        return context;
    }
    return [blocContext, useBlocContext] as const;
}
