import { ReactElement, ReactHTML, ReactHTMLElement } from "react";
import styled, {keyframes} from "styled-components";

export const CenterPosition = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
`;

function bgColor() {

    let bgColor: string = 'red'
    console.log('setBgColor');

    return (_element: React.FormEvent<HTMLElement>) => {
        if(bgColor === 'red'){
            _element.currentTarget.style.backgroundColor = 'grey';
            bgColor = 'grey';
            console.log('if', bgColor);
         }
         else{
            _element.currentTarget.style.backgroundColor = 'red';
            bgColor = 'red';
            console.log('else', bgColor);
         }
    }
 }

 const setBgColor = bgColor();

export const ButtonStart = styled.button.attrs({
    type: 'button',
    name: 'start-anime',
    value: 'anime',
    onClick: setBgColor,
})`
    background-color: red;
    border: 1px solid black;
    color: white;
    margin: 5px;
`;