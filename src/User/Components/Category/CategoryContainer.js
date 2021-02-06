import React from 'react';
import * as S from '../styled/CategoryStyle';

const CategoryContainer = (props) => {

    let borderColor = props.choce === props.name ? "1px solid orange" : "1px solid black"
    let charColor = props.choce ===props.name ? "orange" : "black";

    return (
            <S.TagStyle borderColor={borderColor} tagColor={charColor} >
                {props.name}
            </S.TagStyle>
    );
}

export default CategoryContainer;