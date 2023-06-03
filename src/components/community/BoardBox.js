import React, { useEffect, useState } from "react";
import styled from "styled-components";
import wrtieBtnImg from "../../asset/writebtnImg.png";
import SearchBox from "./SearchBox";
import PostItem from "./PostItem";
import dummy from "../../db/data.json";
import Pagination from "./Pagination";
import { getCookie } from "../../lib/cookie";
import { readAllPost } from "../../lib/api/community";
import { useNavigate } from "react-router-dom";


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

const BoardBox = () => {

    const [isHover, setHover] = useState('');

    const navigator = useNavigate();


    // 페이지네이션
    // const [limit, setLimit] = useState(3);
    const limit = 3;
    const [page, setPage] = useState(1)
    const offset = (page - 1) * limit;

    // 마우스 호버시 삭제, 수정 버튼 생성
    const onMouseEnter = (x) => {
        console.log(x)
        setHover(x)
    }


    // 게시판 전체 데이터 조회
    const [filter, setFilter] = useState("0");

    const [allPost, setAllPost] = useState([])
    const getAllPost = async () => {
        let config = {
            headers: {
                'Authorization': `Bearer ${getCookie('is_login')}`,
                'withCredentials': true,
            }
        }
        console.log(filter);
        console.log(typeof (filter))
        console.log(config)
        const json = await readAllPost(filter, config);
        setAllPost(json.data.data);
    }

    useEffect(() => {
        getAllPost();
        console.log(filter)
    }, [filter]);



    return (
        <>

            <BoardWrapper>
                <BoardTop>
                    <WriteBtn onClick={() => navigator('/community/create')}>
                        <img src={wrtieBtnImg} alt="작성하기버튼" />
                        <div className="write-btn-text">작성버튼</div>
                    </WriteBtn>
                    <SearchBox />
                    <FilterBox name="filter" onChange={(e) => setFilter(e.target.value)}>
                        <option value="0">최신순</option>
                        <option value="1">조회순</option>
                    </FilterBox>
                </BoardTop >
                <PostList>
                    {allPost.slice(offset, offset + limit).map(item => (
                        <div key={item.id} onMouseEnter={() => { onMouseEnter(item.id) }} onClick={() => navigator(`/community/item/${item.id}`)}>
                            <PostItem
                                key={item.id}
                                id={item.id}
                                user={item.name}
                                title={item.title}
                                date={item.createdAt}
                                view={item.views}
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