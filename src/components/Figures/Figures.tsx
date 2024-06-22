import React, { FC } from 'react';
import { Square, Rectangle, Circle } from './Figures.styled';
import {move_up_down} from './FigureAnime.styled';

interface FiguresProps {}

const setBgColor = (e: React.FormEvent<HTMLElement>) => {

   if(e.currentTarget.style.backgroundColor === 'grey'){
      e.currentTarget.style.backgroundColor = 'red';
   }
   else{
      e.currentTarget.style.backgroundColor = 'grey';
   }
}

const setAnime = (e: React.FormEvent<HTMLElement>) => {

   if(e.currentTarget.getAnimations()[0].playState === 'paused'){
      e.currentTarget.style.animationPlayState = 'running';
   }
   else{
      e.currentTarget.style.animationPlayState = 'paused';
   };
}  

const Figure: FC<FiguresProps> = () => (
   <>
      <Square onClick={setAnime} size={100}>
         <p>Square</p>
      </Square>
      <Rectangle width={150} height={100} bgColor='yellow'>
         <p>Rectangle</p>
      </Rectangle>
      <Circle size={100} bgColor='blue'>
         <p>Circle</p>
      </Circle>
   </>
);

export default Figure;
