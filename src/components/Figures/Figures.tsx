import React, { FC } from 'react';
import { Square } from './Figures.styled';

interface FiguresProps {}

const Figure: FC<FiguresProps> = () => (
 <Square size={100} bgColor='red'>
    <p>Figure</p>
 </Square>
);

export default Figure;
