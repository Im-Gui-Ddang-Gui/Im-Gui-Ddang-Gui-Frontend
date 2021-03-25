import styled from 'styled-components';
import {userStyledComponent} from '../../../interfaces/interfaces'

export const CommentModalStyle = styled.div<userStyledComponent>`
    position: fixed;
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

export const CommentModal = styled.div<userStyledComponent>`
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

export const Comment = styled.form`
    width: 90%;
    margin: 0 auto;
`

export const ContainerBox = styled.div`
    margin-top: 30px;
    width: 100%;
    height: 315px;
    overflow: auto;
`

export const CommentContainer = styled.div`
    margin: 0 auto;
    margin-bottom: 25px;
    height: 60px;
    background-color: #ECECEC;
    border-radius: 10px;
    display: flex;
`

export const CommentHeader = styled.div`
    
    align-items: center;
    width: 30%;
    padding: 20px 10px;
`

export const CommentBody = styled.div`
    width: 70%;
    padding: 10px 10px;
    overflow: auto;
`

export const CommentWrite = styled.div`
    margin-top: 25px;
    width: 100%;
    height: 60px;
`

export const WriteBox = styled.form`
    width: 100%;
    margin-left: 40px;
    display: flex;
`

export const WriteInputBox = styled.div`
    width: 70%;
`

export const NickNameInput = styled.input`
    display: block;
    margin-bottom: 20px;
    width: 100px;
    height: 30px;
    padding: 5px;
    outline: none;
    border: none;
    border-bottom: 1px solid black;
`

export const ContentInput = styled.input`
    display: block;
    width: 400px;
    height: 30px;
    padding: 5px;
    outline: none;
    border: none;
    border-bottom: 1px solid black;
`

export const WriteButtonBox = styled.div`
    width: 30%;
`

export const WriteButton = styled.div`
    background-color: #ECECEC;
    width: 100px;
    height: 30px;
    text-align: center;
    align-items: center;
    margin-bottom: 20px;
    padding: 6px;
    margin-left: 20px;
    border: none;
    border-radius: 10px;
    cursor: pointer;
`