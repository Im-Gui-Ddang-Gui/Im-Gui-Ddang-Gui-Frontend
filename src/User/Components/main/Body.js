import React, { useEffect, useState } from 'react';
import { request } from '../../../utils/axios/axios';
import Container from '../Container/Container';
import * as S from '../styled/BodyStyle';

const Body = (props) => {
    const [ data, setData ] = useState(null)
    const [ error, setError ] = useState(null)
    const [ loading, setLoading ] = useState(false)

    useEffect(()=>{
        const Api = async () => {
            try{
                setData(null)
                setLoading(true)
                const response = await request(
                    "get",
                    "/board?page=1&size=20",
                    {},

                )
                setData(response.data)
                setLoading(false)
                console.log(response)
            }
            catch(e){
                setError(e)
            }
        }
        Api()
    },[])

    return (
        <>
            <S.BodyStyle>
                <Container 
                    setCommentModal={(e)=>props.setCommentModal(e)}
                    setCommentHeight={(e)=>props.setCommentHeight(e)}
                    commentModal={props.commentModal}
                    commentheight={props.commentheight}
                />
            </S.BodyStyle>
        </>
    )
}

export default Body;