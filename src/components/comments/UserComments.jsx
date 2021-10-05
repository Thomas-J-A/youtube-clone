import React from 'react';
import profilePic0 from '../../images/profile-pic0.jpg';
import profilePic1 from '../../images/profile-pic1.jpg';
import profilePic2 from '../../images/profile-pic2.jpg';
import profilePic3 from '../../images/profile-pic3.jpg';
import profilePic4 from '../../images/profile-pic4.jpg';
import profilePic5 from '../../images/profile-pic5.jpg';

const UserComments = () => (
  <div className="user-comments">
    <div className="comment">
      <img src={profilePic0} alt="" />
      <div>
        <div className="username-date-wrapper">
          <span className="username">Peter G</span>
          <span className="date">1 year ago</span>
        </div>
        <p>He seems to fall so softly though, like the floor is a thick mattress and he's just got home from work. What a treasure.</p>
        <i className="far fa-thumbs-up" />
        <span>80</span>
        <i className="far fa-thumbs-down" />
        <span className="reply">REPLY</span>
      </div>
      <i className="fas fa-ellipsis-v report" />
    </div>

    <div className="comment">
      <img src={profilePic1} alt="" />
      <div>
        <div className="username-date-wrapper">
          <span className="username">J Hallenbeck</span>
          <span className="date">1 year ago</span>
        </div>
        <p>Who'd have thought a show about two aged TV comedians going fishing would be so funny and poignant? This show is great!</p>
        <i className="far fa-thumbs-up" />
        <span>26</span>
        <i className="far fa-thumbs-down" />
        <span className="reply">REPLY</span>
      </div>
      <i className="fas fa-ellipsis-v" />
    </div>

    <div className="comment">
      <img src={profilePic2} alt="" />
      <div>
        <div className="username-date-wrapper">
          <span className="username">Anna Franklin</span>
          <span className="date">1 year ago</span>
        </div>
        <p>I literally had to stop this mid-way through, I was laughing so hard. Tears!! Thank you.</p>
        <i className="far fa-thumbs-up" />
        <span>22</span>
        <i className="far fa-thumbs-down" />
        <span className="reply">REPLY</span>
        <div className="view-replies">
          <i className="fas fa-caret-down" />
          <span>View reply</span>
        </div>
      </div>
      <i className="fas fa-ellipsis-v" />
    </div>

    <div className="comment">
      <img src={profilePic3} alt="" />
      <div>
        <div className="username-date-wrapper">
          <span className="username">thejudgemuffin</span>
          <span className="date">2 years ago</span>
        </div>
        <p>Thanks for this.... Myself my wife and 5 year old son LOVE this and its his reward for being good in school... You've made a difference with this vid &#128578;</p>
        <i className="far fa-thumbs-up" />
        <span>12</span>
        <i className="far fa-thumbs-down" />
        <span className="reply">REPLY</span>
      </div>
      <i className="fas fa-ellipsis-v" />
    </div>

    <div className="comment">
      <img src={profilePic4} alt="" />
      <div>
        <div className="username-date-wrapper">
          <span className="username">kawaiilotus</span>
          <span className="date">1 week ago</span>
        </div>
        <p>How the hell he managed to go over multiple fences when he was a lad beats me.</p>
        <i className="far fa-thumbs-up" />
        <span>3</span>
        <i className="far fa-thumbs-down" />
        <span className="reply">REPLY</span>
      </div>
      <i className="fas fa-ellipsis-v" />
    </div>

    <div className="comment">
      <img src={profilePic5} alt="" />
      <div>
        <div className="username-date-wrapper">
          <span className="username">Harrison Bergeron</span>
          <span className="date">9 months ago</span>
        </div>
        <p>Bob has spherical feet.</p>
        <i className="far fa-thumbs-up" />
        <span>7</span>
        <i className="far fa-thumbs-down" />
        <span className="reply">REPLY</span>
        <div className="view-replies">
          <i className="fas fa-caret-down" />
          <span>View reply</span>
        </div>
      </div>
      <i className="fas fa-ellipsis-v" />
    </div>
  </div>
);

export default UserComments;
