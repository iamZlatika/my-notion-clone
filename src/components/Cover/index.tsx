import React, { ChangeEventHandler, useRef } from 'react'
import { CoverContainer } from "./cover.styles";


const Cover = () => {
    const fileInputRef = useRef<HTMLInputElement | null>(null);

    const onChangeCoverImage = () => {
        fileInputRef.current?.click();
    }

    const onCoverImageUpload: ChangeEventHandler<HTMLInputElement> = (event) => {
        const target = event.target;
        console.log(target?.files?.[0])
    }
    return (
        <CoverContainer>
            <img src='./images/ztm-notes.png' alt=""/>
            <button
                onClick={onChangeCoverImage}
            >Change cover
            </button>
            <input
                ref={fileInputRef}
                type="file"
                onChange={onCoverImageUpload}
            />
        </CoverContainer>
    )
}

export default Cover