import styled from "styled-components";
import background from "../../asset/background.png";

// 웹사이트 배경 이미지
const TopContainer = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 850px;
    background-image: url(${background});
    backgorund-repeat: 'no-repeat';
    background-position: top center;
    background-size: cover;
`

export default TopContainer;