import React from 'react';

const VideoOptions = () => (
  <div className="video-options">
    <div className="likes">
      <i className="far fa-thumbs-up" />
      <span>700</span>
    </div>
    <div className="dislikes">
      <i className="far fa-thumbs-down" />
      <span>6</span>
    </div>
    <div className="share">
      <i className="fas fa-share" />
      <span>SHARE</span>
    </div>
    <div className="save">
      <i className="fas fa-plus" />
      <span>SAVE</span>
    </div>
    <div className="more">
      <i className="fas fa-ellipsis-h" />
    </div>
  </div>
);

export default VideoOptions;
