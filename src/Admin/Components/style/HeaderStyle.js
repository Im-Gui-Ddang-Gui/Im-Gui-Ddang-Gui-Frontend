import styled from 'styled-components';

export const HeaderStyle = styled.div`
    width: 100%;
    height: 70px;
`;

export const HeaderBox = styled.div`
    width: 900px;
    height: 100%;
    margin: 0 auto;
    text-align: center;
    align-items: center;
    display: flex;
`

export const HeaderContainer = styled.div`
    width: 300px;
    cursor: pointer;
    text-align: center;
    align-items: center;
    color: ${({ linkColor }) => linkColor}
`