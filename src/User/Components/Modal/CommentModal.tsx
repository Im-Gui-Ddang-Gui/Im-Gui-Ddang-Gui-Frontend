import React, { useState } from 'react';
import CommentContainer from '../Container/CommentContainer';
import * as S from '../styled/CommentStyle';
import {userProps} from '../../../interfaces/interfaces'

const CommentModal: React.FunctionComponent<userProps> = (props: any) => {
    const [ commentNickName, setCommentNickName ] = useState<string>("");
    const [ commentContent, setCommentContent ] = useState<string>("");

    const onClose = () => {
        props.setCommentModal("hidden");
        props.setCommentHeight("0");
        document.body.style.overflow = "unset"
    }

    const onNickName = (e:React.ChangeEvent<HTMLInputElement>) => {
        setCommentNickName(e.target.value)
    }

    const onContent = (e: React.ChangeEvent<HTMLInputElement>) => {
        setCommentContent(e.target.value)
    }

    const onSend = () => {

    }

    return (
        <>
            <S.CommentModalStyle visibility={props.commentModal}>
                <S.CommentModal height={props.commentheight}>
                    <S.Comment>
                        <S.ContainerBox>
                            <CommentContainer/>
                        </S.ContainerBox>

                        <S.CommentWrite>
                            <S.WriteBox onSubmit={onSend}>
                                <S.WriteInputBox>
                                    <S.NickNameInput 
                                        placeholder="별명"
                                        maxLength="5"
                                        onChange={onNickName}
                                    />
                                    <S.ContentInput 
                                        placeholder="댓글을 입력하세요"
                                        maxLength="100"
                                        onChange={onContent}
                                        required
                                    />
                                    {commentContent.length} / 100
                                </S.WriteInputBox>

                                <S.WriteButtonBox>
                                    <S.WriteButton 
                                        type="button"
                                        onClick={onClose}
                                    >
                                        닫기
                                    </S.WriteButton>
                                    <S.WriteButton>
                                        댓글달기
                                    </S.WriteButton>
                                </S.WriteButtonBox>
                            </S.WriteBox>
                        </S.CommentWrite>
                    </S.Comment>
                </S.CommentModal>
            </S.CommentModalStyle>
        </>
    )
}

export default CommentModal;