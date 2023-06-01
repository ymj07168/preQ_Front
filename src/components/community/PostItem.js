import React from "react";
import styled from "styled-components";
import StyleButton from "../common/StyleButton";
import { Modal } from "../common/Modal";
import { useState } from "react";

const PostItemBox = styled.div`
    // box-sizing: border-box;
    display: flex;
    width: 840px;
    height: 100px;
    background: rgba(255, 255, 255, 0.8);
    border: 2px solid #FFFFFF;
    box-shadow: 0px 8px 24px #EBEBEB;
    border-radius: 12px;
    padding: 15px 30px;
    // gap: 40px;
    .user{
        height: 40px;
        font-family: 'Poppins';
        font-style: normal;
        font-weight: 500;
        font-size: 18px;
        line-height: 27px;
        color: #636363;
    }
    .title{
        height: 40px;
        align-items: center;
        justify-content: center;
        font-family: 'Poppins';
        font-style: normal;
        font-weight: 500;
        font-size: 20px;
        line-height: 30px;
        color: #200E32;
    }
    .date{
        height: 20px;
        font-family: 'Poppins';
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        line-height: 21px;   
        color: #636363;
    }
`

const LeftWrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 700px;
`
const RightWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 145px;
    gap: 5px;
    .view{
        font-family: 'Poppins';
        font-style: normal;
        font-weight: 500;
        font-size: 14px;
        line-height: 21px;
        color: #200E32;
    }
    .btn-group{
        display: flex;
        gap: 5px;
    }
`

const PostItem = (props) => {

    const [isOpen, setIsOpen] = useState(false);

    const { id, user, title, date } = props;

    const openModalHandler = () => {
        // isOpen의 상태를 변경하는 메소드를 구현
        // !false -> !true -> !false
        setIsOpen(!isOpen)
    };

    return (
        <>
            <PostItemBox >
                <LeftWrapper>
                    <div className="user">{user}</div>
                    <div className="title">{title}</div>
                    <div className="date">{date}</div>
                </LeftWrapper>
                <RightWrapper>
                    <div className="view">조회수: {props.view}</div>
                    {props.isHover ? <div className="btn-group"><StyleButton width="70px" height="45px" size="15px" onClick={props.onClick}>수정</StyleButton><StyleButton width="70px" height="45px" size="15px" onClick={(event) => { event.stopPropagation(); openModalHandler(); }}>삭제</StyleButton></div> : <div></div>}
                </RightWrapper>
            </PostItemBox >
            {isOpen ?
                <Modal openModalHandler={openModalHandler} item_id={id}/>
                : null
            }
        </>
    )
}

export default PostItem;