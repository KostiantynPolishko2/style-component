import styled from 'styled-components';

interface FigureProps {
    bgColor?: string;
}

export const FigureWrapper = styled.div<FigureProps>`
    background-color: ${props => props.bgColor || 'grey'};
    border: 1px solid black;
`;
