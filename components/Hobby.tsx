import React from 'react';
import Image from 'next/image';
import { Hobby as HobbyType } from '@/app/data/HobbyList';

type HobbyProps = {
  hobbyData: HobbyType;
};

const Hobby: React.FC<HobbyProps> = ({ hobbyData }) => {
  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <Image
          src={`/img/hobbyimage/${hobbyData.imagePath}`}
          alt={hobbyData.title} 
          height={hobbyData.imageHeight} 
          width={hobbyData.cardWidth} 
        />
      </div>
      <h2 className="text-center my-3">{hobbyData.title}</h2>
      <p className="text-center my-2">{hobbyData.description}</p>
    </div>
  );
}

export default Hobby;






