import React, { useState } from 'react';

const Thumbnail = ({ src, title, channel, videoInfo }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseOver = () => {
    setIsHovered(true);
  };

  const handleMouseOut = () => {
    setIsHovered(false);
  };

  return (
    <div 
      className="thumbnail"
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
    >
      <div className="thumbnail-image">
        <img src={src} alt="" />
        {isHovered && (
          <>
            <div className="watch-later">
              <i className="far fa-clock" />
            </div>
            <div className="add-to-queue">
              <i className="fas fa-sort-amount-up" />
            </div>
          </>
        )}
        <div className="video-length">13:00</div>
      </div>
      <div className="thumbnail-description">
        <p>{title}</p>
        <p>{channel}</p>
        <p>{videoInfo}</p>
      </div>
    </div>
  );
};

export default Thumbnail;
