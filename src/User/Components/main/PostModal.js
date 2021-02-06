import React, { useState } from 'react';
import * as S from '../styled/PostStyle';

const PostModal = (props) => {
    const [ writeTitle, setWriteTitle ] = useState(null);
    const [ writeNickName, setWriteNickName ] = useState(null);
    const [ writeContents, setWriteContents] = useState("");

    const onClose = () => {
        props.setPostModal("hidden");
        props.setHeight("0");
    }

    const onTitle = (e) => {
        setWriteTitle(e.target.value);
    }

    const onNickName = (e) => {
        setWriteNickName(e.target.value);
    }

    const onContent = (e) => {
        setWriteContents(e.target.value);
    }

    return (
        <>
            <S.PostModalStyle visibility={props.postModal}>
                <S.PostModal height={props.height}>
                    <S.Post>

                    <S.PostHeader>
                        <S.PostTitle type="text" minLength="1" maxLength="50" placeholder="제목 1~50자" required/>

                        <S.PostNickName type="text" maxLength="5" />

                        <S.PostTag>
                            tag
                        </S.PostTag>
                    </S.PostHeader>

                    

                    <S.PostContents 
                        cols="50"
                        rows="11"
                        onChange={onContent}
                        maxLength="500"
                        required
                    />
                    {writeContents.length} / 500

                    <S.PostFile 
                        type="file"
                    />

                    <S.PostButtonBox>

                        <S.PostButton>완료</S.PostButton>
                        <S.PostButton onClick={onClose}>취소</S.PostButton>
                        
                    </S.PostButtonBox>

                    </S.Post>
                </S.PostModal>
            </S.PostModalStyle>
        </>
    )
}

export default PostModal;