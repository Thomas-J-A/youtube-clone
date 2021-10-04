import React from 'react';
import uploaderProfilePic from '../../images/uploader-profile-pic.jpg';

const VideoDescription = () => (
  <div className="video-description">
    <div className="video-description-wrapper-top">
      <div className="video-info">
        <h2>Bob Mortimer Falling Over</h2>
        <p>53,188 views | Sep 9, 2019</p>
      </div>

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
      <div className="music-info">
        <p>Music in this video</p>
        <p>Learn more</p>
        <p>Listen ad-free with YouTube Premium</p>
        <table>
          <tr>
            <th>Song</th>
            <td>Roly Poly Tuba</td>
          </tr>
          <tr>
            <th>Artist</th>
            <td>Tom Briers</td>
          </tr>
          <tr>
            <th>Album</th>
            <td>ANW - 2327 Tuba Dramedy</td>
          </tr>
          <tr>
            <th>Licensed to YouTube by</th>
            <td>Audio Network (on behalf of Audio Network Limited); Audio Network (music publishing), and 7 Music Rights Societies</td>
          </tr>
        </table>
        <span>SHOW LESS</span>
      </div>
    </div>
  </div>
);

export default VideoDescription;
