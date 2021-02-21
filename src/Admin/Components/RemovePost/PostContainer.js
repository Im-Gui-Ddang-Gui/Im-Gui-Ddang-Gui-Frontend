import React from 'react';
import * as S from '../style/RemovePostStyle';

const PostContainer = () => {

    return (
        <>
            <S.PostContainer>
                <S.PostHeader>
                    <S.PostTitle>제목</S.PostTitle>
                    <S.PostTag>태그</S.PostTag>
                    <S.PostDate>21.22.22</S.PostDate>
                    <S.PostRemove>
                        <S.PostButton>
                            삭제
                        </S.PostButton>
                    </S.PostRemove>
                </S.PostHeader>
                <S.PostContent>내용</S.PostContent>
            </S.PostContainer>
        </>
    )
}

export default PostContainer;