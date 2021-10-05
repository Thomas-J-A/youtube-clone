import React from 'react';
import UserComments from './UserComments';

const AddComment = () => (
  <div className="add-comment">
    <div className="profile">T</div>
    <input type="text" placeholder="Add a public comment..." />
  </div>
);

const Comments = () => (
  <section className="comments">
    <div className="comments-tools">
      <span className="comments-count">47 Comments</span>
      <div className="comments-sort">
        <i className="fas fa-sort-amount-up" />
        <span>SORT BY</span>
      </div>
    </div>

    <AddComment />
    <UserComments />
  </section>
);

export default Comments;
