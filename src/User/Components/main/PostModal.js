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
                    <div onClick={onClose}>asdawdsa</div>
                    <S.PostContents 
                        cols="50"
                        rows="12"
                        onChange={onContent}
                        maxLength="500"
                        required
                    />
                    {writeContents.length} / 500
                </S.PostModal>
            </S.PostModalStyle>
        </>
    )
}

export default PostModal;