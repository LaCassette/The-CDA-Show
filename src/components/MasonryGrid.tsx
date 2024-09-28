import React from 'react';
import Masonry from 'react-masonry-css';
import mediaList from '../data/mediaList.json';

const breakpointColumnsObj = {
  default: 4,
  1100: 3,
  700: 2,
  500: 1
};

const MasonryGrid: React.FC = () => {
  return (
    <Masonry
      breakpointCols={breakpointColumnsObj}
      className="flex ml-[-30px] w-auto"
      columnClassName="pl-[30px] bg-clip-padding"
    >
      {mediaList.images.map((image, index) => (
        <div key={index} className="mb-[30px]">
          <img 
            src={`/images/${image}`} 
            alt={`Image ${index}`} 
            className="w-full rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"
          />
        </div>
      ))}
      {mediaList.videos.map((video, index) => (
        <div key={`video-${index}`} className="mb-[30px]">
          <video 
            controls 
            className="w-full rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"
          >
            <source src={`/videos/${video}`} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      ))}
    </Masonry>
  );
};

export default MasonryGrid;