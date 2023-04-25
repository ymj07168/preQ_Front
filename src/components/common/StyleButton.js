import styled from "styled-components";

const StyleButton = styled.button`
    width: ${props => props.width};
    height: ${props => props.height};
    background: #0D2D84;
    border-radius: 8px;
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 600;
    font-size: ${props => props.size};
    line-height: 45px;
    color: #FFFFFF;
    margin-top: 10px;
`

export default StyleButton;