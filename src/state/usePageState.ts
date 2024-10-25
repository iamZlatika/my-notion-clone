import { useImmer } from "use-immer";
import { TNodeData, TPage } from "../types";

export const usePageState = (initialState: TPage) => {
    const [page, setPage] = useImmer<TPage>(initialState);

    const setTitle = (title: string) => {
        setPage((draft) => {
            draft.title = title;
        });
    }
    const addNode = (node: TNodeData, index: number) => {
        setPage((draft) => {
            draft.nodes.splice(index, 0, node);
        });
    }

    return {
        nodes: page.nodes,
        title: page.title,
        cover: page.cover,
        setTitle,
        addNode
    }
}