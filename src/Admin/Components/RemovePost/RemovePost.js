import React, { useEffect } from 'react';
import * as S from '../style/RemovePostStyle';
import { request } from '../../../utils/axios/axios';
import PostContainer from './PostContainer';

const RemovePost = () => {
    useEffect(()=>{
        const Refresh = async () => {
            const TokenData = {
                "X-Refresh-Token": localStorage.getItem("refresh-token")
            }
            try{
                const response = await request(
                    "put",
                    "/admin/auth",
                    {},
                    TokenData
                )
            }
            catch(e){
                
            }
        }
    })

    return (
        <>
            <S.RemovePost>
                <PostContainer />
            </S.RemovePost> 
        </>
    )
}

export default RemovePost;