import React, { useState } from 'react';
import * as S from '../styled/Mainstyle';
import Header from './Header';
import Body from './Body';
import PostModal from './PostModal';

const Main = () => {
    const [ postModal, setPostModal ] = useState("visible");
    console.log(postModal);

    return (
        <>
            <S.Mainstyle>
                <Header onClick={(e)=>setPostModal(e)}/>
                <Body />

                <PostModal postModal={postModal}/>
            </S.Mainstyle>
        </>
    )
}

export default Main;