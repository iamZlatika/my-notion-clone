import React, { FormEvent, useEffect, useRef, KeyboardEvent } from 'react'
import { TitleContainer } from "./title.styles";

interface ITitle {
    title: string,
    changePageTitle: (title: string) => void;
}

const Title = ({title, changePageTitle}: ITitle) => {
    const titleRef = useRef<HTMLHeadingElement | null>(null);
    console.log("title212", title)
    useEffect(() => {
        if (titleRef.current) {
            titleRef.current.textContent = title
        }
    }, [title]);

    const handleKeyDown = (event: KeyboardEvent<HTMLHeadingElement>) => {
        if (event.key === "Enter") {
            event.preventDefault();
        }
    };
    const handleChangeTitle = (event: FormEvent<HTMLHeadingElement>) => {
        changePageTitle(event.currentTarget.textContent || '');
    };

    return (
        <TitleContainer><h1
            ref={titleRef}
            contentEditable
            suppressContentEditableWarning
            onInput={handleChangeTitle}
            onKeyDown={handleKeyDown}
            // onBlur={handleChangeTitle}
        /></TitleContainer>
    )
}

export default Title