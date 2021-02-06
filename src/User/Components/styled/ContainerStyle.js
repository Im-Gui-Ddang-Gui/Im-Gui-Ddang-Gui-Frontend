import styled from 'styled-components';

export const ContainerStyle = styled.div`
    background-color: white;
    width: 100%;
    height: 550px;
`;

export const ContainerHeader = styled.div`
    padding-top: 20px;
    margin: 20px;
    display: flex;
`

export const HeaderId = styled.div`
    width: 10%;
    padding: 5px;
    border: 1px solid black;
    border-right: none;
    text-align: center;
`

export const HeaderTitle = styled.div`
    width: 60%;
    margin-right: 18px;
    padding: 5px;
    border: 1px solid black;
`

export const HeaderTag = styled.div`
    padding: 5px;
    width: 7%;
    margin-right: 18px;
    border: 1px solid black;
    text-align: center;
`

export const HeaderDate = styled.div`
    padding: 5px;
    width: 12%;
    border: 1px solid black;
    text-align: center;
`

export const Contents = styled.div`
    height: 385px;
    margin: 20px;
    overflow: auto;
    border: 1px solid black;
    padding: 10px;
`

export const ReportButton = styled.button`
    width: 70px;
`

export const CommentButton = styled.button`
    width: 70px;
`