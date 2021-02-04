import styled from 'styled-components';

export const CategoryStyle = styled.div`
    display: flex;
    width: 100%;
    cursor: pointer;
`;

export const TagStyle = styled.div`
    width: 87px;
    height: 30px;
    text-align: center;
    display: table-cell; 
    vertical-align: middle;
    border-top: ${({borderColor}) => borderColor};
    border-bottom: ${({borderColor}) => borderColor};
    color: ${({ tagColor }) => tagColor};
`;