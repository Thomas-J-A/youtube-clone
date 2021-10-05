import React from 'react';
import Thumbnail from './Thumbnail';
import thumbnail0 from '../../images/thumbnails/thumbnail0.jpg';
import thumbnail1 from '../../images/thumbnails/thumbnail1.jpg';
import thumbnail2 from '../../images/thumbnails/thumbnail2.jpg';
import thumbnail3 from '../../images/thumbnails/thumbnail3.jpg';
import thumbnail4 from '../../images/thumbnails/thumbnail4.jpg';
import thumbnail5 from '../../images/thumbnails/thumbnail5.jpg';
import thumbnail6 from '../../images/thumbnails/thumbnail6.jpg';
import thumbnail7 from '../../images/thumbnails/thumbnail7.jpg';
import thumbnail8 from '../../images/thumbnails/thumbnail8.jpg';
import thumbnail9 from '../../images/thumbnails/thumbnail9.jpg';
import thumbnail10 from '../../images/thumbnails/thumbnail10.jpg';
import thumbnail11 from '../../images/thumbnails/thumbnail11.jpg';
import thumbnail12 from '../../images/thumbnails/thumbnail12.jpg';
import thumbnail13 from '../../images/thumbnails/thumbnail13.jpg';
import thumbnail14 from '../../images/thumbnails/thumbnail14.jpg';
import thumbnail15 from '../../images/thumbnails/thumbnail15.jpg';
import thumbnail16 from '../../images/thumbnails/thumbnail16.jpg';
import thumbnail17 from '../../images/thumbnails/thumbnail17.jpg';
import thumbnail18 from '../../images/thumbnails/thumbnail18.jpg';
import thumbnail19 from '../../images/thumbnails/thumbnail19.jpg';

const Sidebar = () => (
  <aside className="sidebar">
    <div className="filter-videos">
      <div>All</div>
      <div>Related</div>
      <div>Recently uploaded</div>
      <div>Watched</div>
    </div>

    <div className="video-previews">
      <Thumbnail
        src={thumbnail0}
        title="Bob Mortimer Gone Cooking Corned Beef Hash"
        channel="Bob Mortimer"
        videoInfo="274K views | 9 months ago"
      />

      <Thumbnail
        src={thumbnail1}
        title="Mortimerian Tales - Bob Mortimer On Would I lie To You"
        channel="WILTY? nope!"
        videoInfo="13M views | 4 years ago"
      />

      <Thumbnail
        src={thumbnail2}
        title="The Figma 2021 Crash Course by Example"
        channel="DesignCourse"
        videoInfo="342K views | 9 months ago"
      />

      <Thumbnail
        src={thumbnail3}
        title="Gone Christmas Fishing - Outtake 2"
        channel="MorrisseysMonkey"
        videoInfo="24K views | 9 months ago"
      />

      <Thumbnail
        src={thumbnail4}
        title="BBC Two: Mortimer &amp; Whitehouse, Gone Fishing"
        channel="No Sheet Music"
        videoInfo="103K views | 3 years ago"
      />

      <Thumbnail
        src={thumbnail5}
        title="Vic and Bob: Tubby Brewster (Geordie Striker)"
        channel="40,000 Years Of Job Club"
        videoInfo="377K views | 1 year ago"
      />

      <Thumbnail
        src={thumbnail6}
        title="Bob Mortimer &amp; Richard in HYSTERICS over Bob&apos;s toilet story"
        channel="Travel Man"
        videoInfo="577K views | 8 months ago"
      />

      <Thumbnail
        src={thumbnail7}
        title="React JS Crash Course 2021"
        channel="Traversy Media"
        videoInfo="1.3M views | 8 months ago"
      />

      <Thumbnail
        src={thumbnail8}
        title="Dr David Paul - The Psychology of Trading"
        channel="FinPort"
        videoInfo="1M views | 2 years ago"
      />

      <Thumbnail
        src={thumbnail9}
        title="Richard Ayoade &amp; Bob Mortimer&apos;s FUNNIEST moments in Hamburg"
        channel="Travel Man"
        videoInfo="477K views | 1 year ago"
      />

      <Thumbnail
        src={thumbnail10}
        title="Sean Lock Destroys A Heckler | BEST OF Purple Van Man"
        channel="Universal Comedy"
        videoInfo="985K views | 10 months ago"
      />

      <Thumbnail
        src={thumbnail11}
        title="Learn HTML5 and CSS3 For Beginners - Crash Course"
        channel="Dev Ed"
        videoInfo="907K views | 1 year ago"
      />

      <Thumbnail
        src={thumbnail12}
        title="Bob Mortimer &amp; Paul Whitehouse Have a Good Old Chuckle"
        channel="Sunday Brunch"
        videoInfo="282K views | 1 year ago"
      />

      <Thumbnail
        src={thumbnail13}
        title="Bob Mortimer and Ross Noble make custard"
        channel="Bill Carr"
        videoInfo="156K views | 7 years ago"
      />

      <Thumbnail
        src={thumbnail14}
        title="Bob Mortimer&apos;s Train Guy"
        channel="EskimoRanger"
        videoInfo="351K views | 1 year ago"
      />

      <Thumbnail
        src={thumbnail15}
        title="Excel VBA Beginner Tutorial"
        channel="Learnit Training"
        videoInfo="2.3M views | 1 year ago"
      />

      <Thumbnail
        src={thumbnail16}
        title="And Away Paul Whitehouse &amp; Bob Mortimer Style"
        channel="Spuds C"
        videoInfo="549 views | 2 months ago"
      />

      <Thumbnail
        src={thumbnail17}
        title="Bob Mortimer&apos;s Best Taskmaster Moments"
        channel="Taskmaster"
        videoInfo="1.3M views | 1 year ago"
      />

      <Thumbnail
        src={thumbnail18}
        title="Boots McFoolish Arrives | Gone Fishing | Bob Mortimer"
        channel="Bob Mortimer &amp; Paul Whitehouse"
        videoInfo="55K views | 1 week ago"
      />

      <Thumbnail
        src={thumbnail19}
        title="Athletico Mince - Bob Mortimer&apos;s Sunderland Girl"
        channel="Tony Pulis"
        videoInfo="30K views | 1 year ago"
      />
    </div>
  </aside>
);

export default Sidebar;
