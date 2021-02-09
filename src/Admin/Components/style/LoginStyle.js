import styled from 'styled-components';

export const LoginStyle = styled.form`
    border: 1px solid black;
    margin: 0 auto;
    align-items: center;
    width: 500px;
    height: 650px;
    margin-top: 150px;
`;

export const LogoBox = styled.div`
    margin: 30px auto 10px auto;
    width: 300px;
    height: 175px;
    font-size: 60px;
    text-align: center;
    align-items: center;
`

export const LoginBox = styled.div`
    width: 300px;
    height: 250px;
    margin: 0 auto;
`

export const LoginInput = styled.input`
    width: 300px;
    font-size: 18px;
    height: 40px;
    margin-bottom: 40px;
    border: none;
    border-bottom: 1px solid black;
    cursor: pointer;
    :focus{
        outline: none;
    }
`

export const ErrorMessage = styled.div`
    width: 300px;
    font-size: 15px;
    color: red;
    text-align: center;
`

export const LoginButtonBox = styled.div`
    width: 300px;
    margin: 0 auto;
`

export const LoginButton = styled.button`
    width: 250px;
    height: 40px;
    border: none;
    font-size: 18px;
    background-color: #ECECEC;
    border-radius: 10px;
    margin: 0 25px;
    :focus{
        outline: none;
    }
`