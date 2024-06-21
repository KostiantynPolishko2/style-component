import React, { FC } from 'react';
import { FigureWrapper } from './Figures.styled';

interface FiguresProps {}

const Figure: FC<FiguresProps> = () => (
 <FigureWrapper>
    <p>Figure</p>
 </FigureWrapper>
);

export default Figure;
