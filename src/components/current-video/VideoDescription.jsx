import React from 'react';
import VideoOptions from './VideoOptions';
import MusicInfo from './MusicInfo';
import uploaderProfilePic from '../../images/uploader-profile-pic.jpg';

const VideoInfo = () => (
  <div className="video-info">
    <h2>Bob Mortimer Falling Over</h2>
    <p>53,188 views | Sep 9, 2019</p>
  </div>
);

const VideoDescription = () => (
  <div className="video-description">
    <div className="video-description-wrapper-top">
      <VideoInfo />
      <VideoOptions />
    </div>

    <div className="video-description-wrapper-bottom">
      <div className="uploader">
        <img className="uploader-profile-pic" src={uploaderProfilePic} alt="" />
        <div>
          <p className="profile-name">Benzy Of Benzy</p>
          <p className="subscribers">919 subscribers</p>
        </div>
        <button type="button">SUBSCRIBE</button>
      </div>
      <MusicInfo />
    </div>
  </div>
);

export default VideoDescription;
