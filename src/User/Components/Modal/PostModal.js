import React, { useState } from 'react';
import * as S from '../styled/PostStyle';
import { request } from '../../../utils/axios/axios'

const PostModal = (props) => {
    const [ writeTitle, setWriteTitle ] = useState(null);
    const [ writeNickName, setWriteNickName ] = useState(null);
    const [ writeContents, setWriteContents] = useState("");
    const [ writeFile, setWriteFile ] = useState("파일선택");
    const [ writeTag, setWriteTag ] = useState("태그");

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

    const onSendPost = (e) => {
        e.preventDefault();
        console.log(writeContents);
        //PostApi()
    }

    const PostApi = async () => {
        const data = {
            type: writeTag,
            title: writeTitle,
            userName: writeNickName,
            content: writeContents
        }
        const response = await request(
            "post",
            "/board",
            {},
            data
        )
    }

    return (
        <>
            <S.PostModalStyle visibility={props.postModal}>
                <S.PostModal height={props.height}>
                    <S.Post onSubmit={onSendPost}>

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
                            placeholder="별명"
                            type="text" 
                            maxLength="5" 
                            onChange={onNickName}
                        />

                        <S.PostTag>

                                {writeTag}
                            
                        </S.PostTag>
                    </S.PostHeader>

                    

                    <S.PostContents 
                        placeholder="내용을 입력하세요"
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
                        <S.PostButton 
                            type="button"
                            onClick={onClose}
                        >
                            취소
                        </S.PostButton>
                        
                    </S.PostButtonBox>

                    </S.Post>
                </S.PostModal>
            </S.PostModalStyle>
        </>
    )
}

export default PostModal;