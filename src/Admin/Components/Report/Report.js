import React, { useEffect } from 'react';
import { request } from '../../../utils/axios/axios';

const Report = () => {
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
            report
        </>
    )
}

export default Report;