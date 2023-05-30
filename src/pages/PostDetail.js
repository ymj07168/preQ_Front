import React from "react";
import TopContainer from "../components/common/TopContainer";
import NavBar from "../components/common/NavBar";
import PostView from "../components/community/PostView";
import Footer from "../components/common/Footer";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import { getCookie } from "../lib/cookie";
import { readPostItem } from "../lib/api/community";
import { useState } from "react";
import { useEffect } from "react";

const BoardContainer = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    margin-right: auto;
    margin-left: auto;
    .board-intro{
        font-family: 'Poppins';
        font-style: normal;
        font-weight: 1000;
        font-size: 24px;
        line-height: 45px;
        margin-left: 170px;
        color: #0D2D84;
        margin-bottom: 80px;
    }
    .board-center{
        display: flex;
        justify-content : center;
        align-items: center;
        flex-direction: column;
    }
`

const PostDetail = () => {

    const { id } = useParams();
    console.log(id);

    const [data, setData] = useState();

    const getPostItem = async () => {
        let config = {
            headers: {
                'Authorization': `Bearer ${getCookie('is_login')}`,
                'withCredentials': true,
            }
        }
        const json = await readPostItem(id, config);
        setData(json.data.data)
        console.log(json.data.data)
    }

    useEffect(() => {
        getPostItem();
    }, []);

    return (
        <TopContainer color="white" image="blue">
            <NavBar />
            <BoardContainer>
                <div className="board-intro">
                    면접 팁과 후기를 자유롭게 공유해봐요
                </div>
                <div className="board-center">
                    <PostView
                        id={data?.id}
                        name={data?.name}
                        date={data?.createdAt}
                        title={data?.title}
                        content={data?.content}
                        views={data?.views}
                        comments={data?.comments}
                    />
                </div>
            </BoardContainer>
            <Footer />
        </TopContainer>
    )
}

export default PostDetail;