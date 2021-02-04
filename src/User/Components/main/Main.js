import React from 'react';
import * as S from '../styled/Mainstyle';
import Header from './Header';
import Body from './Body';

const Main = () => {

    return (
        <>
            <S.Mainstyle>
                <Header />
                <Body />
            </S.Mainstyle>
        </>
    )
}

export default Main;