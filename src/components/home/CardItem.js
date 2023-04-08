import React from 'react';
import styled from 'styled-components';

const CardItemBox = styled.div`
    white-space: pre-line;
    width: 300px;
    height: 300px;
    margin: 30px;
    border-radius: 4px;
    text-align: center;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 0px;
    gap: 15px;

    .cards__item__title{
        font-family: 'Poppins';
        font-style: normal;
        font-weight: 600;
        font-size: 30px;
        line-height: 45px;
        color: #252525;
    }

    .cards__item__info{
        white-space: pre-line;
        font-family: 'Poppins';
        font-style: normal;
        font-weight: 400;
        font-size: 24px;
        line-height: 36px;
        text-align: center;

color: #9D9D9D;
    }

`

function CardItem(props) {
    return (
        <>
            <CardItemBox>
                <figure className='cards__item__pic-wrap'>
                    <img
                        className='cards__item__img'
                        src={props.src}
                        alt='사진을 불러올 수 없음'
                    />
                </figure>
                <div className='cards__item__title'>
                    {props.label}
                </div>
                <div className='cards__item__info'>
                    {props.text}
                </div>
            </CardItemBox>
        </>
    );
}

export default CardItem;