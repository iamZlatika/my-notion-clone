import { usePageState } from "./usePageState";
import { createContext, ReactNode, useContext } from "react";
import { TPage } from "../types";

type TAppStateContextType = ReturnType<typeof usePageState>

const AppStateContext = createContext<TAppStateContextType>(
    {} as TAppStateContextType
);

interface IAppStateProviderProps {
    children: ReactNode;
    initialState: TPage;
}

export const AppStateProvider = ({children, initialState}: IAppStateProviderProps) => {
    const pageStateHandlers = usePageState(initialState);

    return (
        <AppStateContext.Provider value={pageStateHandlers}>
            {children}
        </AppStateContext.Provider>
    )
}

export const useAppState = () => useContext(AppStateContext);