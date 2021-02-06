import React, { useState } from 'react';
import * as S from '../styled/PostStyle';

const PostModal = (props) => {
    const [ writeContents, setWriteContents] = useState("");

    const onClose = () => {
        props.setPostModal("hidden");
        props.setHeight("0");
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
                        <input type="text" minLength="1" maxLength="50" placeholder="제목 1~50자" required/>

                        <input type="text" maxLength="5" />

                        <div>
                            tag
                        </div>
                    </S.PostHeader>

                    

                    <S.PostContents 
                        cols="50"
                        rows="12"
                        onChange={onContent}
                        maxLength="500"
                        required
                    />
                    {writeContents.length} / 500

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