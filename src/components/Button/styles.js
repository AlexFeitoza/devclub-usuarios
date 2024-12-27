import styled from "styled-components";

export const Button = styled.button`
    border:     ${(props) => props.theme === 'primary' ? 'none' : '3px, solid, #fff'};
    background: ${(props) => props.theme === 'primary' ? ' linear-gradient(180deg, #fe7e5d 0%, #ff6378 100%)' : 'transparent'};
    font-size: 18px;
    color: #fff;
    padding: 16px 32px;
    width: fit-content;
    border-radius: 30px;
    cursor: pointer;

    &:hover {
       opacity: ${(props) => props.theme === 'primary' ? 0.8 : 1};
       background: ${(props) => props.theme === 'primary' ? '' : '#fff'};
       color: ${(props) => props.theme === 'primary' ? '' : '#181f36'};
    }

    &:active {
        opacity: 0.5;
    }
`

