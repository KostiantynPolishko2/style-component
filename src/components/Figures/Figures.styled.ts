import styled, { keyframes } from 'styled-components';
import {rotate0_135_0, move_up_down} from './FigureAnime.styled';
import _default from 'styled-components/dist/utils/createWarnTooManyClasses';
import {CenterPosition} from './General.styled';


interface FigureProps {
    bgColor?: string;
}

interface SquareProps extends FigureProps {
    size?: number;
}

interface RectangleProps extends FigureProps {
    width?: number;
    height?: number;
}

const _defaultSquare: SquareProps = {
    bgColor: 'magenta',
    size: 100,
}

const _defaultRect: RectangleProps = {
    bgColor: 'red',
    width: 150,
    height: 100,
}

const FigureWrapper = styled(CenterPosition)<FigureProps>`
    background-color: ${props => props.bgColor || 'grey'};
    border: 1px solid black;
    margin: 5px;
    transition: all 1000ms linear 400ms;
    &:hover {
        box-shadow: 0px 0px 10px 5px rgb(0, 205, 0);
        animation: ${rotate0_135_0} 8s linear 100ms infinite;
    }
    &:active {
        box-shadow: 0px 0px 10px 5px rgb(0, 205, 0) inset; 
        position: relative;
        animation: ${move_up_down} 1s linear 100ms infinite;
    }
`;

export const Square = styled(FigureWrapper)<SquareProps>`
    width: ${props => props.size || _defaultSquare.size}px;
    height: ${props => props.size || _defaultSquare.size}px;
`;

export const Rectangle = styled(FigureWrapper)<RectangleProps>`
    background-color: ${props => props.bgColor || _defaultRect.bgColor};
    width: ${props => props.width || _defaultRect.width}px;
    height: ${props => props.height || _defaultRect.height}px;
`;

export const Circle = styled(Square)<SquareProps>`
    border-radius: 50%;
`;