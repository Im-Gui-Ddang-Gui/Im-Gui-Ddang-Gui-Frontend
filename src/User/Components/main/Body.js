import React from 'react';
import Container from '../Container/Container';
import * as S from '../styled/BodyStyle';

const Body = (props) => {

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