import React from 'react';
import * as S from '../styled/HeaderStyle';
import Category from './Category';
import IGDG from '../../../assets/igdg-img.png';

const Header = (props) => {
    const onPostModalOn = () => {
        props.onClick("block");
    }

    return (
        <>
            <S.HeaderStyle>
                <S.HeaderName>
                    <S.Title><p>임</p>금님&nbsp;<p>귀</p>는&nbsp;<p>당</p>나귀&nbsp;<p>귀</p></S.Title>

                    <S.Write onClick={onPostModalOn}>글쓰기</S.Write>
                </S.HeaderName>
                
                <S.HeaderLogo>
                    <img src={IGDG} />
                </S.HeaderLogo>
            </S.HeaderStyle>
            <Category />
        </>
    )
}

export default Header;