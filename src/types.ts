export type TNodeType = 'text' | "image" | "list" | "page" | "heading1" | "heading2" | "heading3";

export type TNodeData = {
    id: string;
    type: TNodeType;
    value: string;
}

export type TPage = {
    id: string;
    slug: string;
    title: string;
    nodes: TNodeData[];
    cover: string;
}