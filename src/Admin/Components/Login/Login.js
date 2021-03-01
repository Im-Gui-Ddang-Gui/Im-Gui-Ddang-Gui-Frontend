import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { request } from '../../../utils/axios/axios';
import * as S from '../style/LoginStyle';

const Login = () => {
    const history = useHistory()

    const [ id, setId ] = useState(null);
    const [ message, setMessage ] = useState(null)
    const [ data, setData ] = useState(null);
    const [ error, setError ] = useState(null);
    const [ loading, setLoading ] = useState(false)

    const onId = (e) => {
        setId(e.target.value)
    }

    const onLogin = (e) => {
        e.preventDefault();
        onLoginApi()
    }

    const onLoginApi = async () => {
        const LoginData = {
            id: id
        }
        try{
            setError(null);
            setData(null);
            setLoading(true);

            const response = await request(
                "post",
                "/admin/auth",
                {},
                LoginData
            )
            setData(response.data);
            const statusNumber = Number(response.status)
            

            if(statusNumber === 201){
                localStorage.setItem("access-token", data.accessToken);
                localStorage.setItem("refresh-token", data.refreshTokenExp);
                localStorage.setItem("refresh-exp", data.refreshToken);
                history.push("/admin/approval");
            }else if(statusNumber === 400){
                setMessage("아이디를 확인해주세요")
            }

        }catch(e){
        }
    }

    if(error) return <div>{error}</div>
    if(loading) return <div>Loading...</div>

    return (
        <>
            <S.LoginStyle onSubmit={onLogin}>
                <S.LogoBox>
                    임 귀 당 귀
                </S.LogoBox>
                
                <S.LoginBox>
                    <S.LoginInput type="text" placeholder="아이디" onChange={onId}/>

                    {
                        message === null ?
                        <S.ErrorMessage>
                            {message}
                        </S.ErrorMessage>
                        : null
                    }
                    

                </S.LoginBox>
                <S.LoginButtonBox>
                    <S.LoginButton>
                        로그인
                    </S.LoginButton>
                </S.LoginButtonBox>
                
            </S.LoginStyle>
        </>
    )
}

export default Login;