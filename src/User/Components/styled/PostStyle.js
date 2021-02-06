import styled from 'styled-components';

export const PostModalStyle = styled.div`
    position: absolute;
    z-index: 99;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    width: 100%;
    background: rgba(0, 0, 0, 0.3);
    visibility: ${({ visibility }) => visibility};

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
`;

export const PostModal = styled.div`
    transition: all 0.8s;
    height: ${({ height }) => height};
    opacity: 1;
    box-shadow: 8px 10px 30px 0 rgba(0, 0, 0, 0.16);
    overflow: hidden;
    width: 750px;
    border: 1px solid #ffffff;
    border-radius: 5px;
    background-color: #ffffff;
`

export const PostContents = styled.textarea`
    margin: 0 auto;
    font-size: 20px;
    border-radius: 10px;
    background-color: #ECECEC;
    outline: none;
    border: none;
    resize: none;
    &:focus {
        border: none;
    }
`