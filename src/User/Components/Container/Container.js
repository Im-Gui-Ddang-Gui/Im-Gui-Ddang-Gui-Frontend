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
                        사랑이란 무엇인가?
                    </S.HeaderTitle>

                    <S.HeaderTag>
                        연애
                    </S.HeaderTag>

                    <S.HeaderDate>
                        20.11.22
                    </S.HeaderDate>
                </S.ContainerHeader>
                <S.Contents>
                사랑은 하나의 배려요, 관심이며 상대방을 염려하는 것이다. 또한 책임을 지는 것이며 존중하는 것이다. 그래서 사랑은 참으로 크고 깊다고 아니할 수 없다. 우리에게 가장 중요한 행복의 요소는 사랑이기 때문에 사랑할 땐 상대방의 생명을 존중하고, 개성을 아껴 주어야 한다. 우리는 누구를 사랑하거나 누구한테서 사랑을 받을 때 인생의 행복을 느끼지 않을 수 없다. 참마음을 서로 주고받는 것, 그것이 사랑이다. 마음과 마음, 인격과 인격, 정성과 정성이 서로 오고가고 깊이 결합하여 참된 사랑이 이루어질 때 우리는 진정한 행복을 느낄 것이다.
                </S.Contents>

                <S.ReportButton>
                    신고하기
                </S.ReportButton>

                <S.CommentButton>
                    댓글보기
                </S.CommentButton>
                
            </S.ContainerStyle>
        </>
    )
}

export default Container;