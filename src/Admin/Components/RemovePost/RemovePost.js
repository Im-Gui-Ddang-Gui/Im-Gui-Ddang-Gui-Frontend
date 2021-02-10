import React from 'react';
import Header from '../Header/Header';

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
            RemovePost
        </>
    )
}

export default RemovePost;