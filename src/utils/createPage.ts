import { nanoid } from "nanoid";
import { TPage } from "../types";


export const createPage = (): TPage => {
    const slug = nanoid()
    const id = nanoid()

    return {
        title: "Untitled",
        id,
        slug,
        nodes: [],
        cover: 'ztm-notes.png'
    }
}