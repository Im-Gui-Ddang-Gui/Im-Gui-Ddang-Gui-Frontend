import React from 'react';
import { useHistory } from 'react-router-dom';
import * as S from '../style/HeaderStyle';

const HeaderContainer = (props) => {
    const history = useHistory()

    const onLink = () => {
        props.setColor(props.name);
        history.push(`/admin/${props.link}`)
    }
    const color = props.name === props.color ? "orange" : "black";

    return (
        <>
            <S.HeaderContainer linkColor={color} onClick={onLink}>
                {props.name}
            </S.HeaderContainer>
        </>
    )
}

export default HeaderContainer;