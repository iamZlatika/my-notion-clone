import styled from 'styled-components';

export const CoverContainer = styled.div`
    position: relative;
    height: 295px;
    border-bottom: 2px solid #eaeaea;
    display: flex;
    justify-content: center;
    align-items: center;

    img {
        width: 100%;
        max-height: 295px;
        object-fit: cover;
    }

    button {
        position: absolute;
        bottom: 20px;
        right: 90px;
        padding: 6px;
        opacity: 0;
        transition: opacity 0.2s ease-in-out;
        background: white;
        border: 2px solid #888;
        border-radius: 4px;
        color: #6f6f6f;
        font-weight: bold;
        cursor: pointer;
    }

    &:hover button {
        opacity: 1;
    }

    input {
        display: none;
    }

`;