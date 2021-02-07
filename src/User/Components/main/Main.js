import React, { useState } from 'react';
import * as S from '../styled/Mainstyle';
import Header from './Header';
import Body from './Body';
import PostModal from '../Modal/PostModal';
import CommentModal from '../Modal/CommentModal';

const Main = () => {
    const [ postModal, setPostModal ] = useState("hidden");
    const [ height, setHeight ] = useState("0")
    const [ commentModal, setCommentModal ] = useState("hidden");
    const [ commentheight, setCommentHeight ] = useState("0");

    return (
        <>
            <PostModal 
                setPostModal={(e)=>setPostModal(e)}
                setHeight={(e)=>setHeight(e)}
                postModal={postModal}
                height={height}
            />
            <CommentModal
                setCommentModal={(e)=>setCommentModal(e)}
                setCommentHeight={(e)=>setCommentHeight(e)}
                commentModal={commentModal}
                commentheight={commentheight}
            />

            <S.Mainstyle>
                <Header 
                    setPostModal={(e)=>setPostModal(e)}
                    setHeight={(e)=>setHeight(e)}
                />
                <Body 
                    setCommentModal={(e)=>setCommentModal(e)}
                    setCommentHeight={(e)=>setCommentHeight(e)}
                />
                
            </S.Mainstyle>
        </>
    )
}

export default Main;