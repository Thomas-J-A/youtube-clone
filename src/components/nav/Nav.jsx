import React from 'react';

const ContainerLeft = () => (
  <div className="container-left">
    <i className="fas fa-bars" />
    <i className="fab fa-youtube" />
    <span>
      YouTube
      <sup>GB</sup>
    </span>
  </div>
);

const ContainerCentre = () => (
  <div className="container-centre">
    <form>
      <input type="search" placeholder="Search" />
      <button type="submit">
        <i className="fas fa-search" />
      </button>
    </form>
    <i className="fas fa-microphone" />
  </div>
);

const ContainerRight = () => (
  <div className="container-right">
    <i className="fas fa-video" />
    <i className="fas fa-th" />
    <i className="far fa-bell" />
    <div className="profile">T</div>
  </div>
);

const Nav = () => (
  <nav>
    <ContainerLeft />
    <ContainerCentre />
    <ContainerRight />
  </nav>
);

export default Nav;
