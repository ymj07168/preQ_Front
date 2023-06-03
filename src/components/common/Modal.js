import styled from 'styled-components';
import deleteImg from '../../asset/deleteImg.png';
import { getCookie } from '../../lib/cookie';
import { deletePostItem } from '../../lib/api/community';

export const ModalBackdrop = styled.div`
  // Modal이 떴을 때의 배경을 깔아주는 CSS를 구현
  z-index: 1; //위치지정 요소
  position: fixed;
  display : flex;
  justify-content : center;
  align-items : center;
//   background-color: rgba(0,0,0,0.4);
  border-radius: 10px;
  top : 0;
  left : 0;
  right : 0;
  bottom : 0;
`;

export const ModalView = styled.div.attrs((props) => ({
    // attrs 메소드를 이용해서 아래와 같이 div 엘리먼트에 속성을 추가할 수 있다.
    role: 'dialog',
}))`
  // Modal창 CSS를 구현합니다.
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  border-radius: 5.85882px;
  width: 440px;
  height: 180px;
  background-color: #C1BEBE;
    >div.desc {
      margin-top: 20px;
      margin-bottom: 30px;
      font-family: 'Inter';
      font-style: normal;
      font-weight: 600;
      font-size: 15px;
      line-height: 18px;
      text-align: center;
      letter-spacing: 0.146471px;
      color: #25282B;
    }
    >div.btn-group {
        display: flex;
        flex-direction: row;
        align-items: center;
        padding: 0px;
        gap: 17.58px;
    }
    .delete-btn{
        width: 57.15px;
        height: 35.15px;
        background: #FC3B3B;
        border-radius: 4.39412px;
        border: none;
        font-family: 'Inter';
        font-style: normal;
        font-weight: 500;
        font-size: 15px;
        text-align: center;
        letter-spacing: 0.5px;
        color: #25282B;
    }
    .cancel-btn{
        width: 57.15px;
        height: 35.15px;
        background: transparent;
        border-radius: 4.39412px;
        font-family: 'Inter';
        font-style: normal;
        font-weight: 500;
        font-size: 15px;
        text-align: center;
        letter-spacing: 0.5px;
        color: #25282B;   
    }
`;

export const Modal = ({ openModalHandler, item_id }) => {

    const onCancel = () => {
        openModalHandler(false)
    }

    const onDeletePost = async () => {
        let config = {
            headers: {
                'Authorization': `Bearer ${getCookie('is_login')}`,
                'withCredentials': true,
            }
        }
        await deletePostItem(item_id, config)
            .then((res) => console.log(res))
            .catch((err) => console.log(err))
        window.location.replace(`/community`);
    }
    return (
        <>
            <ModalBackdrop>
                <ModalView onClick={(e) => e.stopPropagation()}>
                    <img src={deleteImg} alt="삭제물음창" />
                    <div className='desc'>정말 삭제하시겠습니까?</div>
                    <div className='btn-group'>
                        <button className='cancel-btn' onClick={onCancel}>취소</button>
                        <button className='delete-btn' onClick={onDeletePost}>삭제</button>
                    </div>
                </ModalView>
            </ModalBackdrop>
        </>
    );
};
