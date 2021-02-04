import React from 'react';
import * as S from '../styled/ContainerStyle';

const Container = () => {

    return (
        <>
            <S.ContainerStyle>
                <S.ContainerHeader>
                    <S.HeaderId>
                        #132
                    </S.HeaderId>

                    <S.HeaderTitle>
                        연애란 무엇인가?
                    </S.HeaderTitle>

                    <S.HeaderTag>
                        연애
                    </S.HeaderTag>

                    <S.HeaderDate>
                        20.11.22
                    </S.HeaderDate>
                </S.ContainerHeader>
                <S.Contents>
                    asdwasdwad
                </S.Contents>
            </S.ContainerStyle>
        </>
    )
}

export default Container;