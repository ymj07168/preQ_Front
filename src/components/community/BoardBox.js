import React, { useEffect, useState } from "react";
import styled from "styled-components";
import wrtieBtnImg from "../../asset/writebtnImg.png";
import SearchBox from "./SearchBox";
import PostItem from "./PostItem";
import dummy from "../../db/data.json";
import Pagination from "./Pagination";
import PostView from "./PostView";
import PostForm from "./PostForm";
import { getCookie } from "../../lib/cookie";
import { readAllPost } from "../../lib/api/community";


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
    const [isForm, showForm] = useState(false);
    const [isDetail, showDetail] = useState(false);
    const [detail, setDetail] = useState('')

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

    // 글 작성 뷰 이동
    const onShowForm = () => {
        showForm(!isForm)
    }
    // 글 상세 뷰 이동
    const onShowDetail = (id, user, title, date, view) => {
        showDetail(!isDetail)
        setDetail({ id, user, title, date, view })
    }


    // 게시판 전체 데이터 조회
    let config = {
        headers: {
            'Authorization': `Bearer ${getCookie('is_login')}`,
            'withCredentials': true,
        }
    }

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
        // getAllPost(json.data.data);
        setAllPost(json.data.data);
    }

    useEffect(() => {
        getAllPost();
        console.log(filter)
    }, [filter]);



    return (
        <>
            {isDetail ?
                <PostView
                    id={detail.id}
                    user={detail.user}
                    date={detail.date}
                    title={detail.title}
                    view={detail.view}
                />
                :
                isForm ?
                    <PostForm isClick={onShowForm} />
                    :
                    <BoardWrapper>
                        <BoardTop>
                            <WriteBtn onClick={onShowForm}>
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
                                <div key={item.id} onMouseEnter={() => { onMouseEnter(item.id) }} onClick={() => { onShowDetail(item.id, item.name, item.title, item.createdAt, item.views) }}>
                                    <PostItem
                                        key={item.id}
                                        user={item.name}
                                        title={item.title}
                                        date={item.createdAt}
                                        view={item.views}
                                        isHover={isHover === item.id}
                                    />
                                </div>
                            ))}
                            {/* {dummy.boarder.slice(offset, offset + limit).map(item => (
                                <div key={item.id} onMouseEnter={() => { onMouseEnter(item.id) }} onClick={() => { onShowDetail(item.user, item.title, item.date, item.view) }}>
                                    <PostItem
                                        key={item.id}
                                        user={item.user}
                                        title={item.title}
                                        date={item.date}
                                        view={item.view}
                                        isHover={isHover === item.id}
                                    />
                                </div>
                            ))} */}
                        </PostList>

                        <Pagination
                            total={dummy.boarder.length}
                            limit={limit}
                            page={page}
                            setPage={setPage}
                        />

                    </BoardWrapper>
            }
        </>
    )
}

export default BoardBox;