import styled from 'styled-components';
import {userStyledComponent} from '../../../interfaces/interfaces'

export const CategoryStyle = styled.div`
    display: flex;
    width: 100%;
    cursor: pointer;
`;

export const TagStyle = styled.div<userStyledComponent>`
    width: 87.4px;
    height: 30px;
    text-align: center;
    display: table-cell; 
    vertical-align: middle;
    border-top: ${({ borderColor }) => borderColor};
    border-bottom: ${({ borderColor }) => borderColor};
    color: ${({ tagColor }) => tagColor};
`;