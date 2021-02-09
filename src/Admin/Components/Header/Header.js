import React, { useState } from 'react';
import HeaderContainer from './HeaderContainer';
import * as S from '../style/HeaderStyle';

const Header = () => {
    const [ color, setColor ] = useState("글 승인")

    return (
        <>
            <S.HeaderStyle>
                <S.HeaderBox>
                    <HeaderContainer setColor={(e)=>setColor(e)} name="글 승인" color={color} link="approval"/>
                    <HeaderContainer setColor={(e)=>setColor(e)} name="신고 관리" color={color} link="report"/>
                    <HeaderContainer setColor={(e)=>setColor(e)} name="글 삭제" color={color} link="remove-post"/>
                </S.HeaderBox>
            </S.HeaderStyle>
        </>
    )
}

export default Header;