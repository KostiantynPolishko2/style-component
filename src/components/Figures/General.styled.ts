import styled, {keyframes} from "styled-components";

export const CenterPosition = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
`;

export const ButtonStart = styled.button.attrs({
    type: 'button',
    name: 'start-anime',
    value: 'anime',
})`
    background-color: red;
    border: 1px solid black;
    color: white;
    margin: 5px;
`;
