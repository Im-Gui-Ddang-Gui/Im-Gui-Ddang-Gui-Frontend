import React from 'react';
import * as S from '../styled/CommentStyle';

const CommentModal = (props) => {

    return (
        <>
            <S.CommentModalStyle visibility={props.vi}>
                <S.CommentModal>
                    <S.Comment>
                        sadfje
                    </S.Comment>
                </S.CommentModal>
            </S.CommentModalStyle>
        </>
    )
}

export default CommentModal;