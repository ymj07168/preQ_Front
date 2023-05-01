import React, { useState } from "react";
import styled from "styled-components";
import wrtieBtnImg from "../../asset/writebtnImg.png";
import SearchBox from "./SearchBox";
import PostItem from "./PostItem";
import dummy from "../../db/data.json";
import Pagination from "./Pagination";


const BoardWrapper = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    gap: 80px;
`
const BoardTop = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    gap: 160px;
`
const FilterBox = styled.select`
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 8px 15px;
    gap: 8px;
    width: 109px;
    height: 42px;
    background: #FFFFFF;
    border: 1px solid #DDDDDD;
    border-radius: 8px;
    &::-ms-expand{
        margin-left: 5px;
    }
`

const PostList = styled.div`
    display: flex;
    justify-contet: center;
    align-items: center;
    flex-direction: column;
    gap: 12px;
`

const WriteBtn = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
    width: 130px;
    height: 44px;
    background: #0D2D84;
    border-radius: 8px;
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 600;
    font-size: 18px;
    line-height: 22px;
    color: #FFFFFF;
`

const BoardBox = ({ isClick }) => {

    const [isHover, setHover] = useState('');

    // 페이지네이션
    const [limit, setLimit] = useState(3);
    const [page, setPage] = useState(1)
    const offset = (page - 1) * limit;

    const onClick = () => {
        // 글 작성 뷰 이동
        isClick(true)
    }

    const onMouseEnter = (x) => {
        console.log(x)
        setHover(x)
    }

    return (
        <>
            <BoardWrapper>
                <BoardTop>

                    <WriteBtn onClick={onClick}>
                        <img src={wrtieBtnImg} alt="작성하기버튼" />
                        <div className="write-btn-text">작성버튼</div>
                    </WriteBtn>
                    <SearchBox />
                    <FilterBox>
                        <option value="newest">최신순</option>
                        <option value="viewed">조회순</option>
                    </FilterBox>
                </BoardTop >
                <PostList>
                    {dummy.boarder.slice(offset, offset + limit).map(item => (
                        <div onMouseEnter={() => { onMouseEnter(item.id) }}>
                            <PostItem
                                key={item.id}
                                user={item.user}
                                title={item.title}
                                date={item.date}
                                view={item.view}
                                isHover={isHover === item.id}
                            />
                        </div>
                    ))}
                </PostList>

                <Pagination
                    total={dummy.boarder.length}
                    limit={limit}
                    page={page}
                    setPage={setPage}
                />

            </BoardWrapper>
        </>
    )
}

export default BoardBox;