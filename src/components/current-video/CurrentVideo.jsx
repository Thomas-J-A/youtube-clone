import React from 'react';

const CurrentVideo = () => (
  <section className="current-video">
    <div className="video-wrapper">
      <iframe width="560" height="315" src="https://www.youtube.com/embed/xUrAqEzbe2I" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
    </div>
  </section>
);

export default CurrentVideo;
