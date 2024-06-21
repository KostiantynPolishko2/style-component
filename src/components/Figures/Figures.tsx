import React, { FC } from 'react';
import { Square, Rectangle, Circle } from './Figures.styled';
import { CenterPosition } from './General.styled';

interface FiguresProps {}

const Figure: FC<FiguresProps> = () => (
   <CenterPosition>
      <Square size={100}>
         <p>Square</p>
      </Square>
      <Rectangle width={150} height={100} bgColor='yellow'>
         <p>Rectangle</p>
      </Rectangle>
      <Circle size={100} bgColor='blue'>
         <p>Circle</p>
      </Circle>
   </CenterPosition>
);

export default Figure;
