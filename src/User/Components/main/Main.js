import React, { useState } from 'react';
import * as S from '../styled/Mainstyle';
import Header from './Header';
import Body from './Body';
import PostModal from '../Modal/PostModal';

const Main = () => {
    const [ postModal, setPostModal ] = useState("hidden");
    const [ height, setHeight ] = useState("0")

    return (
        <>
            <PostModal 
                setPostModal={(e)=>setPostModal(e)}
                setHeight={(e)=>setHeight(e)}
                postModal={postModal}
                height={height}
            />

            <S.Mainstyle>
                <Header 
                    setPostModal={(e)=>setPostModal(e)}
                    setHeight={(e)=>setHeight(e)}
                />
                <Body />
                
            </S.Mainstyle>
        </>
    )
}

export default Main;