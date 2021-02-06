import React, { useState } from 'react';
import * as S from '../styled/PostStyle';

const PostModal = (props) => {
    const [ writeTitle, setWriteTitle ] = useState(null);
    const [ writeNickName, setWriteNickName ] = useState(null);
    const [ writeContents, setWriteContents] = useState("");
    const [ writeFile, setWriteFile ] = useState("파일선택");
    const [ writeTag, setWriteTag ] = useState("선택");

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

    const onFile = (e) => {
        setWriteFile(e.target.files[0])
    }

    console.log(writeTitle, writeNickName, writeContents, writeFile)

    return (
        <>
            <S.PostModalStyle visibility={props.postModal}>
                <S.PostModal height={props.height}>
                    <S.Post>

                    <S.PostHeader>
                        <S.PostTitle 
                            type="text" 
                            minLength="1" 
                            maxLength="50" 
                            placeholder="제목 1~50자" 
                            required
                            onChange={onTitle}
                        />

                        <S.PostNickName 
                            type="text" 
                            maxLength="5" 
                            onChange={onNickName}
                        />

                        <S.PostTag>
                            
                                {writeTag}
                            
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

                    <S.PostFileBox>

                        {/* <S.PostFileName 
                            value="파일"
                            readOnly
                            />

                        <S.PostFileLabel for="file">업로드</S.PostFileLabel> 
                        <S.PostFile type="file" id="file" onChange={onFile}/>  */}

                        <S.PostFileEx type="file" id="file" onChange={onFile}/>
                        
                    </S.PostFileBox>

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