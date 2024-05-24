import bird from './Images/bird.svg';
import cat from './Images/cat.svg';
import cow from './Images/cow.svg';
import dog from './Images/dog.svg';
import gator from './Images/gator.svg';
import horse from './Images/horse.svg';
import heart from './Images/heart.svg';
import { useState } from 'react';
import './AnimalShow.css'

const svgMap = {
  bird,
  cat,
  dog,
  horse,
  cow,
  gator,
};

const AnimalShow = ({ type }) => {  
            const [click,setClick] = useState(0)
            const handleClick = () => {
                        setClick(click + 1)
            }
  return (
    <div className='animal-show' onClick={handleClick}>
      <img className='animal' src={svgMap[type]} alt={type} />
      <img className='heart'
      src = {heart} 
      alt = "heart"
      style ={{width : 10 + 10 * click + 'px'}}></img>
    </div>
  );
};

export default AnimalShow;
