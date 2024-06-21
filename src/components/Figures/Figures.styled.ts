import styled from 'styled-components';

interface FigureProps {
    bgColor?: string;
}

interface SquareProps extends FigureProps {
    size?: number;
}

const _default = {size: 75, width: 100, height: 200, bgColor: 'grey'}

const FigureWrapper = styled.div<FigureProps>`
    background-color: ${props => props.bgColor || _default.bgColor};
    border: 1px solid black;
    margin: 5px;
    border-radius: 5px;
`;

export const Square = styled(FigureWrapper)<SquareProps>`
    width: ${props => props.size || _default.size}px;
    height: ${props => props.size || _default.size}px;
`;