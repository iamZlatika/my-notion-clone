import React from 'react'
import Cover from "../Cover";
import Title from "../Title";
import { useAppState } from "../../state/AppStateContext";

const Page = () => {
    const {setTitle, title} = useAppState();
    return (
        <div><Cover/>
            <Title title={title} changePageTitle={setTitle}/></div>
    )
}

export default Page