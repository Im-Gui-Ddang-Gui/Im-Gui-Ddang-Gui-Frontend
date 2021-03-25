import React, { useState } from 'react';
import * as S from '../styled/CategoryStyle';
import CategoryContainer from './CategoryContainer';

const Category = () => {
    const [ choce, setChoce ] = useState<string>("");

    const onChoceCategory = (e: any) => {
        setChoce(e)
    }

    return(
        <>
            <S.CategoryStyle>
                <div onClick={() => onChoceCategory("이슈")}><CategoryContainer choce={choce} name={"이슈"} /></div>
                <div onClick={() => onChoceCategory("유머")}><CategoryContainer choce={choce} name={"유머"} /></div>
                <div onClick={() => onChoceCategory("연애")}><CategoryContainer choce={choce} name={"연애"} /></div>
                <div onClick={() => onChoceCategory("홍보")}><CategoryContainer choce={choce} name={"홍보"} /></div>
                <div onClick={() => onChoceCategory("제보")}><CategoryContainer choce={choce} name={"제보"} /></div>
                <div onClick={() => onChoceCategory("질문")}><CategoryContainer choce={choce} name={"질문"} /></div>
                <div onClick={() => onChoceCategory("기타")}><CategoryContainer choce={choce} name={"기타"} /></div>
            </S.CategoryStyle>
        </>
    )
}

export default Category;