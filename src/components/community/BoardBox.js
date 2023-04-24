import React from "react";
import styled from "styled-components";
import WriteButton from "./WriteButton";
import SearchBox from "./SearchBox";
import PostItem from "./PostItem";
import dummy from "../../db/data.json";


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

const BoardBox = () => {

    return (
        <>
            <BoardWrapper>
                <BoardTop>
                    <WriteButton />
                    <SearchBox />
                    <FilterBox>
                        <option value="newest">최신순</option>
                        <option value="viewed">조회순</option>
                    </FilterBox>
                </BoardTop >
                <PostList>
                    {dummy.boarder.map(item => (
                        <PostItem
                            user={item.user}
                            title={item.title}
                            date={item.date}
                            view={item.view}
                        />
                    ))}
                </PostList>
            </BoardWrapper>
        </>
    )
}

export default BoardBox;