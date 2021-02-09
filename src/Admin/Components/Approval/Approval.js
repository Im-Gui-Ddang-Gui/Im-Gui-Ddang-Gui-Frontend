import React, { useEffect } from 'react';
import { request } from '../../../utils/axios/axios'

const Approval = () => {
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
            approval
        </>
    )
}

export default Approval;