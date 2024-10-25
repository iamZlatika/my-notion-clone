import React from 'react';
import Cover from "./components/Cover";
import Title from "./components/Title";
import { AppStateProvider, useAppState } from "./state/AppStateContext";
import { createPage } from "./utils/createPage";
import Page from "./components/Page";


function App() {
    const initialState = createPage()

    return (
        <AppStateProvider initialState={initialState}>
            <Page/>
        </AppStateProvider>
    );
}

export default App;
